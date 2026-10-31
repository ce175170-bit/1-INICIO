/* =====================================================
   GALERÍA DE FOTOS
   (las fotos se agregan en editar-fotos.js)
   ARCHIVO INDEPENDIENTE: no hace falta tocar script.js
   ni el HTML ni styles.css
===================================================== */
(() => {

    const lista = window.FOTOS || [];

    const fotoPrincipal =
        document.getElementById("fotoPrincipal");

    const tituloFoto =
        document.getElementById("tituloFoto");

    const categoriaFoto =
        document.getElementById("categoriaFoto");

    const descripcionFoto =
        document.getElementById("descripcionFoto");

    const contenedorMiniaturas =
        document.querySelector("#fotos .miniaturas-fotos");

    if (!fotoPrincipal || !contenedorMiniaturas || !lista.length) return;

    /* Quita las miniaturas antiguas escritas a mano en el HTML */
    contenedorMiniaturas.innerHTML = "";


    const esc = t => String(t ?? "").replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));


    /* =================================================
       PONER UNA FOTO EN GRANDE (con sus textos)
    ================================================= */

    function aplicarFoto(f) {

        fotoPrincipal.src = f.imagen;
        fotoPrincipal.alt = f.titulo || "Actividad educativa";

        if (tituloFoto) tituloFoto.textContent = f.titulo || "";
        if (categoriaFoto) categoriaFoto.textContent = f.categoria || "";

        if (descripcionFoto) {
            descripcionFoto.innerHTML =
                "<strong>" + esc(f.descripcion || "") + "</strong>";
        }

        fotoPrincipal.style.opacity = "1";

    }


    /* =================================================
       MOSTRAR UNA FOTO AL PULSAR SU MINIATURA
    ================================================= */

    let temporizador;

    function mostrarFoto(f, boton) {

        contenedorMiniaturas
            .querySelectorAll(".miniatura-foto")
            .forEach(otroBoton => otroBoton.classList.toggle("activo", otroBoton === boton));

        /* efecto de cambio */
        fotoPrincipal.style.opacity = "0";

        clearTimeout(temporizador);

        temporizador = setTimeout(() => aplicarFoto(f), 180);

    }


    /* =================================================
       CREAR LAS MINIATURAS
    ================================================= */

    lista.forEach((f, i) => {

        const boton = document.createElement("button");

        boton.className = "miniatura-foto" + (i === 0 ? " activo" : "");
        boton.type = "button";
        boton.setAttribute("aria-label", "Ver foto " + (i + 1));

        const img = document.createElement("img");

        img.src = f.miniatura || f.imagen;
        img.alt = "Foto " + (i + 1);
        img.loading = "lazy";
        img.decoding = "async";
        img.draggable = false;

        boton.appendChild(img);

        boton.addEventListener("click", () => mostrarFoto(f, boton));

        contenedorMiniaturas.appendChild(boton);

    });


    /* =================================================
       FOTO INICIAL = la primera de la lista
    ================================================= */

    aplicarFoto(lista[0]);

})();
