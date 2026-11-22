/* Cuántas noticias se ven siempre */
window.NOTICIAS_CONFIG = {
    visibles: 3
};

window.NOTICIAS = [

    {
        fecha: "22 de noviembre de 2026",
        titulo: "BONO PEPE II SE PAGARÁ DESDE EL LUNES 23 EN TODO EL PAÍS.",
        resumen: "El Bono Pepe II, Programa Extraordinario de Protección y Equidad, se pagará desde el próximo lunes 23 de noviembre a los nacidos en el mes de noviembre",
        imagen: "Noticias/noti27.jpg",
        enlace: "https://www.facebook.com/share/p/1AHg5UkvvP/"
    },

    {
        fecha: "22 de noviembre de 2026",
        titulo: "Córdova se corona campeón de la Liga Nacional de Futsal",
        resumen: "Con dos goles del betanceño Chinche, José Fernando Terán, El Club Córdova, gritó Campeón del fútbol de salón boliviano",
        imagen: "Noticias/noti28.jpg",
        enlace: "https://www.facebook.com/share/p/1HGLT98SDE/"
    },

    {
        fecha: "22 de noviembre de 2026",
        titulo: "¡Debut soñado en el Mundial de Talla Baja!",
        resumen: "👏🏻 Muchas felicidades a nuestro estudiante Abdon Vedia de la Unidad Educativa Alfredo Miranda Torres de Millares, perteneciente al Municipio de Betanzos",
        imagen: "Noticias/noti29.jpg",
        enlace: "https://www.facebook.com/share/p/1EyJ2SqCXc/"
    },

    {
        fecha: "16 de noviembre de 2026",
        titulo: "Bachilleres acuden a su última semana de clases para procesar sus notas",
        resumen: "A menos de un mes del cierre de las actividades educativas en el Departamento de Potosí, que en gran parte de los distritos escolares terminarán el 11 de diciembre",
        imagen: "Noticias/noti23.jpg",
        enlace: "https://elpotosi.net/local/20261116_bachilleres-acuden-a-su-ultima-semana-de-clases-para-procesar-sus-notas.html"
    },

    {
        fecha: "11 de noviembre de 2026",
        titulo: "Cuadrangular de basquetbol",
        resumen: "Colegio Bohórquez prepara cuadrangular de basquetbol con equipos potosínos. Este fin de semana",
        imagen: "Noticias/noti18.jpg",
        enlace: "https://www.facebook.com/share/p/1BpbGp6rsn/"
    },


    {
        fecha: "11 de noviembre de 2026",
        titulo: "Pasaje Betanzos Potosí en los rapiditos baja de 18 a 16 Bs",
        resumen: "Anoche en reunión con dirigentes y autoridades locales, hemos acordado bajar el pasaje de 18 a 16 Bs.",
        imagen: "Noticias/noti19.jpg",
        enlace: "https://www.facebook.com/share/p/1F5j9Byuk9/"
    },

    {
        fecha: "11 de noviembre de 2026",
        titulo: "GOBIERNO Y MAESTROS RURALES FIRMAN ACUERDO",
        resumen: "Con la mediación del Defensor del Pueblo, el Ministerio de Educación y la Confederación Nacional de Maestros de Educación Rural de Bolivia",
        imagen: "Noticias/noti20.jpg",
        enlace: "https://www.facebook.com/share/p/1FvjUnEbp6/"
    },

    {
        fecha: "09 de noviembre de 2026",
        titulo: "Aeropuerto de Potosí estrenará pista de 4 kilómetros para vuelo exploratorio de Ecojet",
        resumen: "Con más de 71 años de historia, el Aeropuerto Internacional Capitán Nicolás Rojas de Potosí estrenará una pista de cuatro kilómetros y, en los próximos días, será escenario del primer vuelo exploratorio de la aerolínea privada Ecojet.",
        imagen: "Noticias/noti15.jpg",
        enlace: "https://elpotosi.net/local/20261108_aeropuerto-de-potosi-estrenara-pista-de-4-kilometros-para-vuelo-exploratorio-de-ecojet.html"
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