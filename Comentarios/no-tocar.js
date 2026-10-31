/* =====================================================
   COMENTARIOS
   (los comentarios se agregan en editar-comentarios.js)
   ARCHIVO INDEPENDIENTE: no hace falta tocar script.js
   ni el HTML ni styles.css
===================================================== */
(() => {

    const lista = window.COMENTARIOS || [];

    const contenedor =
        document.querySelector("#comentarios .comentario-contenedor");

    if (!contenedor || !lista.length) return;


    const esc = t => String(t ?? "").replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));


    /* =================================================
       DIBUJAR LOS COMENTARIOS (reemplazan los del HTML)
    ================================================= */

    contenedor.innerHTML = lista.map(c => `
        <div class="comentario-item">
            <img src="${esc(c.imagen || "img/escudo-completo.png")}" alt="Persona"
                 loading="lazy" decoding="async">
            <div>
                <h3>${esc(c.nombre)}</h3>
                <small>
                    ${esc(c.cargo)}<br>
                    ${esc(c.institucion || "Est. Col. J.F.B.")}
                </small>
                <p>"${esc(c.comentario)}"</p>
            </div>
        </div>
    `).join("");

    const items = contenedor.querySelectorAll(".comentario-item");

    let actual = 0;


    /* =================================================
       MOSTRAR UN COMENTARIO (en PC; en celular se
       deslizan con el dedo y el CSS los muestra todos)
    ================================================= */

    function mostrar(numero) {

        items.forEach((item, i) => item.classList.toggle("activo", i === numero));

    }

    mostrar(0);


    /* =================================================
       FLECHAS
       Se reemplazan por una copia limpia para que no
       queden funcionando a la vez que las de script.js
    ================================================= */

    function activarFlecha(id, paso) {

        const original = document.getElementById(id);

        if (!original) return;

        const flecha = original.cloneNode(true);

        flecha.removeAttribute("id");

        original.replaceWith(flecha);

        flecha.addEventListener("click", () => {

            actual = (actual + paso + items.length) % items.length;

            mostrar(actual);

        });

    }

    activarFlecha("anterior", -1);
    activarFlecha("siguiente", 1);

})();
