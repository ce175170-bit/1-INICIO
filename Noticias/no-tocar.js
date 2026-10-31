/* =====================================================
   NOTICIAS
   (las noticias se agregan en editar-noticias.js)
   ARCHIVO INDEPENDIENTE: no hace falta tocar script.js
   ni el HTML ni styles.css
===================================================== */
(() => {

    const lista = window.NOTICIAS || [];
    const configuracion = window.NOTICIAS_CONFIG || {};

    const visibles =
        Number(configuracion.visibles) > 0
            ? Number(configuracion.visibles)
            : 3;

    const contenedor =
        document.querySelector("#noticias .cuadricula-noticias");

    if (!contenedor || !lista.length) return;

    /* Estilos del botón (no hace falta tocar styles.css) */
    const estilo = document.createElement("style");

    estilo.textContent =
        ".noticias-mas{text-align:center;margin-top:35px}" +
        ".ver-mas-noticias{padding:13px 30px;border:2px solid #54cc82;border-radius:999px;" +
        "background:transparent;color:#72d99a;font-size:12px;font-weight:800;letter-spacing:1px;" +
        "cursor:pointer;transition:.3s}" +
        ".ver-mas-noticias:hover{background:#54cc82;color:#031b0d}" +
        ".noticias-anteriores{margin-top:25px}";

    document.head.appendChild(estilo);


    const esc = t => String(t ?? "").replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));


    /* =================================================
       TARJETA DE UNA NOTICIA
    ================================================= */

    const tarjeta = n => `
        <article class="tarjeta-noticia aparecer-escalonado">
            <img src="${esc(n.imagen)}" alt="" loading="lazy" decoding="async">
            <div class="contenido-noticia">
                <small>${esc(n.fecha)}</small>
                <h3>${esc(n.titulo)}</h3>
                <p>${esc(n.resumen)}</p>
                ${n.enlace ? `
                <a href="${esc(n.enlace)}" target="_blank" rel="noopener noreferrer">
                    Leer más →
                </a>` : ""}
            </div>
        </article>
    `;

    const actuales = lista.slice(0, visibles);
    const anteriores = lista.slice(visibles);


    /* =================================================
       NOTICIAS ACTUALES (reemplazan las del HTML)
    ================================================= */

    contenedor.innerHTML = actuales.map(tarjeta).join("");


    /* =================================================
       BOTÓN "MÁS NOTICIAS" + ANTERIORES
    ================================================= */

    if (anteriores.length > 0) {

        const envoltorio = document.createElement("div");
        envoltorio.className = "noticias-mas";

        const boton = document.createElement("button");
        boton.className = "ver-mas-noticias";
        boton.type = "button";
        boton.textContent = "Más noticias";
        boton.setAttribute("aria-expanded", "false");

        envoltorio.appendChild(boton);

        const listaAnteriores = document.createElement("div");
        listaAnteriores.className = "cuadricula-noticias noticias-anteriores";
        listaAnteriores.style.display = "none";
        listaAnteriores.innerHTML = anteriores.map(tarjeta).join("");

        contenedor.after(envoltorio, listaAnteriores);

        boton.addEventListener("click", () => {

            const abierto = listaAnteriores.style.display !== "none";

            if (abierto) {

                listaAnteriores.style.display = "none";
                boton.textContent = "Más noticias";
                boton.setAttribute("aria-expanded", "false");
                boton.scrollIntoView({ block: "center" });

            } else {

                listaAnteriores.style.display = "";
                boton.textContent = "Ocultar noticias anteriores";
                boton.setAttribute("aria-expanded", "true");

            }

        });

    }

})();
