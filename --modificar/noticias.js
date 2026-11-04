/* Cuántas noticias se ven siempre */
window.NOTICIAS_CONFIG = {
    visibles: 3
};

window.NOTICIAS = [

    {
        fecha: "03 de noviembre de 2026",
        titulo: "Precios actuales de la canasta familiar en Betanzos",
        resumen: "Los costos de la canasta familiar y las tarifas de transporte fueron socializados y acordados con representantes de los sindicatos y organizaciones sociales, quienes participaron en diversas reuniones junto a las autoridades municipales, el Comité Cívico, la FEJUVE y los presidentes de barrio.",
        imagen: "Noticias/noti8.jpg",
        enlace: "https://www.facebook.com/share/p/1CFKapVf5f/"
    },

    {
        fecha: "03 de noviembre de 2026",
        titulo: "Alta demanda: ya hay cronograma para la preinscripción 2027",
        resumen: "Se acerca el cierre del año escolar y desde el Ministerio de Educación ya se ha establecido un cronograma para la preinscripción en unidades educativas de alta demanda que inicia la próxima semana con el registro de las escuelas y terminará en enero de 2027.",
        imagen: "Noticias/noti9.jpg",
        enlace: "https://elpotosi.net/local/20261103_alta-demanda-ya-hay-cronograma-para-la-preinscripcion-2027.html"
    },

     {
        fecha: "03 de noviembre de 2026",
        titulo: "Fallece el cantautor potosino Luis Rico",
        resumen: "Fue uno de los cantautores y compositores de canción social y de protesta más influyentes de Bolivia. Nació el 15 de mayo de 1945 en Tupiza, Potosí, y dedicó más de 50 años a retratar la historia",
        imagen: "Noticias/noti10.jpg",
        enlace: "https://correodelsur.com/cultura/20261103/fallece-el-cantautor-luis-rico.html"
    },

    {
        fecha: "02 de noviembre de 2026",
        titulo: "Los bachilleres no acabarán el año antes que el resto de los niveles",
        resumen: "A diferencia de otros años, los estudiantes de sexto curso de secundaria ya no tendrán un adelanto de evaluaciones finales, por lo que pasarán clases como el resto de los cursos hasta inicios de diciembre. Mientras tanto, desde la Dirección Departamental de Educación...",
        imagen: "Noticias/noti6.jpg",
        enlace: "https://elpotosi.net/local/20261101_los-bachilleres-no-acabaran-el-ano-antes-que-el-resto-de-los-niveles.html"
    },

    {
        fecha: "02 de noviembre de 2026",
        titulo: " ¡Potosí celebra 216 años de libertad este 10 de noviembre!",
        resumen: "​Entérate de todas las actividades oficiales por el aniversario de la Gesta Libertaria del 10 de Noviembre.​📲 Escanea el QR de la imagen y  descarga el cronograma de actividades.",
        imagen: "Noticias/noti7.jpg",
        enlace: "https://www.facebook.com/share/p/1Dxf2WPzyT/"
    },

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