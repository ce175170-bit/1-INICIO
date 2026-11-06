/* Cuántas noticias se ven siempre */
window.NOTICIAS_CONFIG = {
    visibles: 3
};

window.NOTICIAS = [

    {
        fecha: "06 de noviembre de 2026",
        titulo: "Campeonato estudiantil de futsal del nivel secundario en Betanzos",
        resumen: "En conmemoración de un aniversario más de Betanzos como capital de la provincia Cornelio Saavedra, se lanza la presente convocatoria con el objetivo de promover el deporte en nuestro municipio",
        imagen: "Noticias/noti11.jpg",
        enlace: "https://www.facebook.com/share/p/1EmukM4ya2/"
    },

    {
        fecha: "06 de noviembre de 2026",
        titulo: "Senamhi prevé lluvias aisladas en el Departamento de Potosí",
        resumen: "Pese a que los efectos del fenómeno “El Niño” comenzaron a golpear de manera contundente a las cuatro regiones del Departamento de Potosí, que soportan una drástica disminución de precipitaciones pluviales",
        imagen: "Noticias/noti12.jpg",
        enlace: "https://elpotosi.net/local/20261106_senamhi-preve-lluvias-aisladas-en-el-departamento-de-potosi.html"
    },

    {
        fecha: "06 de noviembre de 2026",
        titulo: "Magisterio urbano anuncia más piquetes y protestas",
        resumen: "La Federación de Trabajadores en Educación Urbana de Potosí mantiene sus medidas de presión. Este viernes tiene prevista la crucifixión de educadores en demanda de que las autoridades gubernamentales escuchen su demanda.",
        imagen: "Noticias/noti13.jpg",
        enlace: "https://elpotosi.net/local/20261106_magisterio-urbano-anuncia-mas-piquetes-y-protestas.html"
    },


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