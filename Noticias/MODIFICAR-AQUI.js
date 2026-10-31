/* Cuántas noticias se ven siempre */
window.NOTICIAS_CONFIG = {
    visibles: 3
};

window.NOTICIAS = [

    {
        fecha: "31 de octubre de 2026",
        titulo: "𝗣𝗥𝗢𝗚𝗥𝗔𝗠𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝗘𝗡 𝗛𝗢𝗠𝗘𝗡𝗔𝗝𝗘 𝗔 𝗟𝗢𝗦 101 𝗔Ñ𝗢𝗦 𝗗𝗘 𝗕𝗘𝗧𝗔𝗡𝗭𝗢𝗦",
        resumen: "El Gobierno Autónomo Municipal de Betanzos, a la cabeza del alcalde Dr. Julio Arturo Caba Quicho, junto al pleno del Concejo Municipal, hace público el programa general en homenaje a los 101 años del municipio de Betanzos",
        imagen: "Noticias/noti4.jpg",
        enlace: "https://www.facebook.com/share/p/1EbEuU3pwZ/"
    },

    {
        fecha: "31 de octubre de 2026",
        titulo: "Aplicarán calendario regionalizado para el cierre del año escolar",
        resumen: "Esta gestión se aplicará un calendario escolar regionalizado, lo que implica que algunos distritos escolares terminarán de pasar clases en una fecha diferente a otros",
        imagen: "Noticias/noti5.jpg",
        enlace: "https://elpotosi.net/local/20261030_aplicaran-calendario-regionalizado-para-el-cierre-del-ano-escolar.html"
    },

    {
        fecha: "26 de octubre de 2026",
        titulo: "Betanzos tiene el privilegio de contar con una ex-seleccionada del fútbol boliviano.",
        resumen: "Sonia Torihuano Flores, ex-seleccionada del fútbol y fútbol de salón boliviano, es la jugadora del magisterio urbano betanceño que descolló en los juegos interprovinciales de Toro Toro",
        imagen: "Noticias/noti2.jpg",
        enlace: "https://www.facebook.com/share/p/1FAjFYcD1h/"
    },

    {
        fecha: "26 de octubre de 2026",
        titulo: "Inicia el pago del Bono Juancito Pinto a más de 178 mil estudiantes",
        resumen: "Este lunes 26 de octubre inicia el pago del Bono Juancito Pinto en Potosí, beneficio que llegará a 178.324 alumnos, de acuerdo con el Ministerio de Educación. El director departamental de Educación, Javier Ortega, había informado que el acto de inauguración será en la Unidad Educativa San Javier.",
        imagen: "Noticias/noti3.jpg",
        enlace: "https://elpotosi.net/local/20261026_inicia-el-pago-del-bono-juancito-pinto-a-mas-de-178-mil-estudiantes.html"
    }
];


/* ============================================================
   LISTA DE NOTICIAS  (el ÚNICO archivo que debes editar)

   - Las primeras noticias de la lista (por defecto 3) son las
     ACTUALES: siempre se ven en la página.
   - Las demás son ANTERIORES: se ven al pulsar "Más noticias".

   PARA AGREGAR UNA NUEVA:
     copia un bloque { ... } completo y pégalo AL INICIO de la lista,
     con una coma entre bloque y bloque. La que quede en 4° lugar
     pasa sola a "anteriores".
   PARA QUITAR UNA: borra el bloque completo (con su coma).

   fecha   → fecha que se muestra
   titulo  → título de la noticia
   resumen → texto corto de la noticia
   imagen  → ruta de la imagen, por ejemplo "Noticias/noti4.jpg"
   enlace  → enlace del botón "Leer más →"
             (si lo dejas vacío "", el botón no aparece)

   Si un texto lleva comillas dentro, usa comillas simples: 'así'.
   ============================================================ */