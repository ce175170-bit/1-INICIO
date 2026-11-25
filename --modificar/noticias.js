/* Cuántas noticias se ven siempre */
window.NOTICIAS_CONFIG = {
    visibles: 3
};

window.NOTICIAS = [

    {
        fecha: "24 de noviembre de 2026",
        titulo: "GANADORAS DEL CONCURSO DE TIKTOK «CRECIENDO SEGUROS Y FELICES»",
        resumen: "El Gobierno Autónomo Municipal de Betanzos felicita a las dos ganadoras de este concurso, que tuvo como objetivo promover la creatividad y expresión de niñas",
        imagen: "Noticias/noti30.png",
        enlace: "https://www.facebook.com/share/v/19kSBSeidr/"
    },

    {
        fecha: "24 de noviembre de 2026",
        titulo: "Choferes suben ilegalmente tarifas tras el alza del diésel",
        resumen: "De manera automática, e ilegal, varios choferes del transporte público subieron las tarifas de micros y minibuses poniendo como excusa la reciente elevación del precio del diésel.",
        imagen: "Noticias/noti31.png",
        enlace: "https://elpotosi.net/local/20261124_choferes-suben-ilegalmente-tarifas-tras-el-alza-del-diesel.html"
    },

    {
        fecha: "24 de noviembre de 2026",
        titulo: "SELECCIÓN DE TALLA BAJA DE FUTSAL  SIN PASAJES PARA VOLVER A BOLIVIA",
        resumen: "La Selección Boliviana de Fútbol de Talla Baja vive dos realidades  en el Mundial de  Marruecos. Dentro de la cancha, es protagonista y líder invicto",
        imagen: "Noticias/noti32.jpg",
        enlace: "https://www.facebook.com/share/p/1CXEy97LM6/"
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