/* =====================================================
   GALERÍA DE FOTOS + VISOR AMPLIADO
   Lee la lista window.FOTOS (editar-fotos.js).
   - El texto solo aparece en las fotos que lo tengan.
   - Celular: deslizar con el dedo + tocar para ampliar.
   - Computadora: flechas, clic para ampliar, teclado.
===================================================== */
(function () {
    const seccion = document.getElementById('fotos');
    if (!seccion) return;

    const principal  = seccion.querySelector('.foto-principal');
    const imgMain    = document.getElementById('fotoPrincipal');
    const capa       = seccion.querySelector('.superposicion-foto');
    const elCat      = document.getElementById('categoriaFoto');
    const elTit      = document.getElementById('tituloFoto');
    const elDesc     = document.getElementById('descripcionFoto');
    const elContador = document.getElementById('contadorFoto');
    const contMini   = seccion.querySelector('.miniaturas-fotos');

    /* ---------- 1) Lista de fotos ---------- */
    const crudas = (Array.isArray(window.FOTOS) && window.FOTOS.length) ? window.FOTOS : [];
    if (!crudas.length) return;

    const fotos = crudas.map(function (f) {
        return {
            src:  f.imagen,
            mini: f.miniatura || f.imagen,
            cat:  f.categoria   || '',
            tit:  f.titulo      || '',
            desc: f.descripcion || ''
        };
    });

    const total = fotos.length;
    let actual = 0;

    /* ---------- 2) Miniaturas ---------- */
    contMini.innerHTML = '';
    const miniaturas = fotos.map(function (f, i) {
        const b = document.createElement('button');
        b.className = 'miniatura-foto';
        b.type = 'button';
        b.setAttribute('aria-label', 'Ver foto ' + (i + 1));
        const im = document.createElement('img');
        im.src = f.mini;
        im.alt = 'Foto ' + (i + 1);
        im.loading = 'lazy';
        im.decoding = 'async';
        im.draggable = false;
        b.appendChild(im);
        b.addEventListener('click', function () { mostrar(i); });
        contMini.appendChild(b);
        return b;
    });

    /* ---------- 3) Visor (en el body) ---------- */
    const visor = document.createElement('div');
    visor.className = 'visor-galeria';
    visor.setAttribute('role', 'dialog');
    visor.setAttribute('aria-modal', 'true');
    visor.setAttribute('aria-label', 'Visor de fotos');
    visor.innerHTML =
        '<button class="visor-btn visor-cerrar" type="button" aria-label="Cerrar">&#10005;</button>' +
        '<button class="visor-btn visor-prev" type="button" aria-label="Anterior">&#10094;</button>' +
        '<img alt="">' +
        '<button class="visor-btn visor-next" type="button" aria-label="Siguiente">&#10095;</button>' +
        '<div class="visor-pie"><small></small><strong></strong><span></span></div>';
    document.body.appendChild(visor);

    const imgVisor = visor.querySelector('img');
    const pieCat   = visor.querySelector('small');
    const pieTit   = visor.querySelector('strong');
    const pieNum   = visor.querySelector('.visor-pie span');
    let visorAbierto = false;

    /* ---------- Mostrar foto ---------- */
    function ponerImagen(el, f, inmediato) {
        const aplicar = function () {
            el.src = f.src;
            el.alt = f.tit || 'Foto de la galería';
            el.onload = function () { el.style.opacity = 1; };
            if (el.complete) el.style.opacity = 1;
        };
        if (inmediato) { aplicar(); return; }
        el.style.opacity = 0;
        setTimeout(aplicar, 180);
    }

    // El texto solo se muestra si ESA foto lo tiene
    function ponerTextos(f) {
        const hay = !!(f.cat || f.tit || f.desc);
        capa.style.display = hay ? '' : 'none';

        elCat.textContent = f.cat;
        elCat.style.display = f.cat ? '' : 'none';
        elTit.textContent = f.tit;
        elTit.style.display = f.tit ? '' : 'none';

        elDesc.textContent = '';
        if (f.desc) {
            const s = document.createElement('strong');
            s.textContent = f.desc;
            elDesc.appendChild(s);
        }
        elDesc.style.display = f.desc ? '' : 'none';
    }

    function mostrar(n, inmediato) {
        actual = (n + total) % total;
        const f = fotos[actual];

        ponerImagen(imgMain, f, inmediato);
        ponerTextos(f);
        elContador.textContent = (actual + 1) + ' / ' + total;

        miniaturas.forEach(function (m, i) {
            m.classList.toggle('activo', i === actual);
        });

        const m = miniaturas[actual];
        contMini.scrollTo({
            left: m.offsetLeft - (contMini.clientWidth - m.clientWidth) / 2,
            behavior: inmediato ? 'auto' : 'smooth'
        });

        if (visorAbierto) actualizarVisor();

        new Image().src = fotos[(actual + 1) % total].src;
    }

    function actualizarVisor() {
        const f = fotos[actual];
        ponerImagen(imgVisor, f, false);
        pieCat.textContent = f.cat;
        pieCat.style.display = f.cat ? '' : 'none';
        pieTit.textContent = f.tit;
        pieTit.style.display = f.tit ? '' : 'none';
        pieNum.textContent = (actual + 1) + ' / ' + total;
    }

    function abrirVisor() {
        visorAbierto = true;
        actualizarVisor();
        visor.classList.add('abierto');
        document.body.classList.add('visor-abierto');
        visor.querySelector('.visor-cerrar').focus();
    }

    function cerrarVisor() {
        visorAbierto = false;
        visor.classList.remove('abierto');
        document.body.classList.remove('visor-abierto');
        principal.focus({ preventScroll: true });
    }

    const siguiente = function () { mostrar(actual + 1); };
    const anterior  = function () { mostrar(actual - 1); };

    /* ---------- Eventos ---------- */
    principal.addEventListener('click', function (e) {
        if (e.target.closest('.flecha-foto')) return;
        abrirVisor();
    });

    principal.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirVisor(); }
        if (e.key === 'ArrowRight') siguiente();
        if (e.key === 'ArrowLeft')  anterior();
    });

    principal.querySelector('.flecha-prev').addEventListener('click', function (e) { e.stopPropagation(); anterior(); });
    principal.querySelector('.flecha-next').addEventListener('click', function (e) { e.stopPropagation(); siguiente(); });

    visor.querySelector('.visor-prev').addEventListener('click', function (e) { e.stopPropagation(); anterior(); });
    visor.querySelector('.visor-next').addEventListener('click', function (e) { e.stopPropagation(); siguiente(); });
    visor.querySelector('.visor-cerrar').addEventListener('click', cerrarVisor);

    visor.addEventListener('click', function (e) {
        if (e.target === visor) cerrarVisor();
    });

    document.addEventListener('keydown', function (e) {
        if (!visorAbierto) return;
        if (e.key === 'Escape')     cerrarVisor();
        if (e.key === 'ArrowRight') siguiente();
        if (e.key === 'ArrowLeft')  anterior();
    });

    /* ---------- Deslizar con el dedo ---------- */
    function activarSwipe(el) {
        let x0 = 0, y0 = 0;
        el.addEventListener('touchstart', function (e) {
            x0 = e.changedTouches[0].clientX;
            y0 = e.changedTouches[0].clientY;
        }, { passive: true });
        el.addEventListener('touchend', function (e) {
            const dx = e.changedTouches[0].clientX - x0;
            const dy = e.changedTouches[0].clientY - y0;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                dx < 0 ? siguiente() : anterior();
            }
        }, { passive: true });
    }
    activarSwipe(principal);
    activarSwipe(visor);

    mostrar(0, true);
})();