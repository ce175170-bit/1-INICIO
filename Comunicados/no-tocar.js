/* =====================================================
   COMUNICADOS
   (los comunicados se agregan en comunicados-data.js)
   ARCHIVO INDEPENDIENTE: no hace falta tocar script.js
   ni el HTML ni styles.css
===================================================== */
(() => {

    const lista = window.COMUNICADOS || [];
    const configuracion = window.COMUNICADOS_CONFIG || {};

    const visibles =
        Number(configuracion.visibles) > 0
            ? Number(configuracion.visibles)
            : 3;

    const contenedor =
        document.querySelector("#comunicados .comunicados-container");

    if (!contenedor || !lista.length) return;

    /* Estilos del botón (no hace falta tocar styles.css) */
    const estilo = document.createElement("style");

    estilo.textContent =
        ".comunicados-mas{text-align:center;margin-top:35px}" +
        ".ver-mas-comunicados{padding:13px 30px;border:2px solid #54cc82;border-radius:999px;" +
        "background:transparent;color:#72d99a;font-size:12px;font-weight:800;letter-spacing:1px;" +
        "cursor:pointer;transition:.3s}" +
        ".ver-mas-comunicados:hover{background:#54cc82;color:#031b0d}" +
        ".comunicados-anteriores{margin-top:25px}";

    document.head.appendChild(estilo);


    const esc = t => String(t ?? "").replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));


    /* =================================================
       TARJETA DE UN COMUNICADO
    ================================================= */

    const tarjeta = c => `
        <article class="comunicado">
            <div class="comunicado-header">
                <div>
                    <span class="comunicado-label">${esc(c.etiqueta)}</span>
                    <h3>${esc(c.titulo)}</h3>
                </div>
                <span class="comunicado-fecha">${esc(c.fecha)}</span>
            </div>
            <div class="comunicado-imagen">
                <img src="${esc(c.imagen)}" alt="Comunicado institucional"
                     loading="lazy" decoding="async" width="800" height="1000">
            </div>
            <div class="comunicado-footer">
                <p>${esc(c.descripcion)}</p>
                <button class="ver-comunicado" type="button" data-imagen="${esc(c.imagen)}">
                    <i class="fa-solid fa-expand"></i>
                    Ver comunicado completo
                </button>
            </div>
        </article>
    `;

    const actuales = lista.slice(0, visibles);
    const anteriores = lista.slice(visibles);


    /* =================================================
       COMUNICADOS ACTUALES (reemplazan los del HTML)
    ================================================= */

    contenedor.innerHTML = actuales.map(tarjeta).join("");


    /* =================================================
       BOTÓN "MÁS COMUNICADOS" + ANTERIORES
    ================================================= */

    if (anteriores.length > 0) {

        const envoltorio = document.createElement("div");
        envoltorio.className = "comunicados-mas";

        const boton = document.createElement("button");
        boton.className = "ver-mas-comunicados";
        boton.type = "button";
        boton.textContent = "Más comunicados";
        boton.setAttribute("aria-expanded", "false");

        envoltorio.appendChild(boton);

        const listaAnteriores = document.createElement("div");
        listaAnteriores.className = "comunicados-container comunicados-anteriores";
        listaAnteriores.style.display = "none";
        listaAnteriores.innerHTML = anteriores.map(tarjeta).join("");

        contenedor.after(envoltorio, listaAnteriores);

        boton.addEventListener("click", () => {

            const abierto = listaAnteriores.style.display !== "none";

            if (abierto) {

                listaAnteriores.style.display = "none";
                boton.textContent = "Más comunicados";
                boton.setAttribute("aria-expanded", "false");
                boton.scrollIntoView({ block: "center" });

            } else {

                listaAnteriores.style.display = "";
                boton.textContent = "Ocultar comunicados anteriores";
                boton.setAttribute("aria-expanded", "true");

            }

        });

    }


    /* =================================================
       "VER COMUNICADO COMPLETO" (actuales y anteriores)
       usa el visor que ya existe en script.js
    ================================================= */

    const zona = contenedor.parentElement || document;

    zona.addEventListener("click", evento => {

        const boton = evento.target.closest(".ver-comunicado");

        if (!boton) return;

        if (window.abrirComunicado) {
            window.abrirComunicado(boton.dataset.imagen);
        }

    });

})();
