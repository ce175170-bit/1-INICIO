/* =====================================================
   PÁGINA WEB EDUCATIVA   
===================================================== */

/* =====================================================
   MENÚ PARA CELULAR
===================================================== */

const botonMenu = document.getElementById("botonMenu");
const navegacion = document.getElementById("navegacion");
if (botonMenu && navegacion) {

    botonMenu.addEventListener("click", () => {

        navegacion.classList.toggle("activo");

    });


    /* CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN */

    navegacion.querySelectorAll("a").forEach(enlace => {

        enlace.addEventListener("click", () => {

            navegacion.classList.remove("activo");

        });

    });

}

/* =====================================================
   CERRAR MENÚ AL TOCAR FUERA
===================================================== */
document.addEventListener("click", evento => {

    if (!botonMenu || !navegacion) return;

    const hizoClickEnMenu =
        navegacion.contains(evento.target);

    const hizoClickEnBoton =
        botonMenu.contains(evento.target);

    if (
        !hizoClickEnMenu &&
        !hizoClickEnBoton
    ) {

        navegacion.classList.remove("activo");

    }

});

/* =====================================================
   CARRUSEL CON MOUSE Y DEDO
===================================================== */
function activarCarrusel(deslizador) {

    if (!deslizador) return;


    let presionado = false;

    let inicioX = 0;

    let desplazamientoInicial = 0;


    /* =================================================
       MOUSE
    ================================================= */

    deslizador.addEventListener("mousedown", evento => {

        presionado = true;

        deslizador.classList.add("arrastrando");

        inicioX =
            evento.pageX -
            deslizador.offsetLeft;

        desplazamientoInicial =
            deslizador.scrollLeft;

    });


    deslizador.addEventListener("mouseleave", () => {

        presionado = false;

        deslizador.classList.remove("arrastrando");

    });


    deslizador.addEventListener("mouseup", () => {

        presionado = false;

        deslizador.classList.remove("arrastrando");

    });


    deslizador.addEventListener("mousemove", evento => {

        if (!presionado) return;

        evento.preventDefault();


        const posicionActual =
            evento.pageX -
            deslizador.offsetLeft;


        const distancia =
            (posicionActual - inicioX) * 1.5;


        deslizador.scrollLeft =
            desplazamientoInicial -
            distancia;

    });


    /* =================================================
       CELULAR
    ================================================= */

    let inicioToque = 0;

    deslizador.addEventListener(
        "touchstart",
        evento => {

            inicioToque =
                evento.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    deslizador.addEventListener(
        "touchend",
        evento => {

            const finalToque =
                evento.changedTouches[0].clientX;


            const distancia =
                inicioToque -
                finalToque;


            if (Math.abs(distancia) > 50) {

                const ancho =
                    deslizador.clientWidth;


                if (distancia > 0) {

                    deslizador.scrollBy({

                        left: ancho,

                        behavior: "smooth"

                    });

                } else {

                    deslizador.scrollBy({

                        left: -ancho,

                        behavior: "smooth"

                    });

                }

            }

        },
        {
            passive: true
        }
    );

}

/* =====================================================
   ACTIVAR CARRUSEL DE FOTOS
===================================================== */
const pistaFotos =
    document.getElementById("pistaFotos");
if (pistaFotos) {

    activarCarrusel(pistaFotos);

}

/* =====================================================
   ACTIVAR CARRUSEL DE VIDEOS
===================================================== */
const pistaVideos =
    document.getElementById("pistaVideos");
if (pistaVideos) {

    activarCarrusel(pistaVideos);

}

/* =====================================================
   BOTÓN VOLVER ARRIBA
===================================================== */

const botonArriba =
    document.getElementById("botonArriba");
if (botonArriba) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            botonArriba.style.display = "flex";

        } else {

            botonArriba.style.display = "none";

        }

    });


    botonArriba.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */
const elementosAnimados =
    document.querySelectorAll(
        ".comunicado, .tarjeta-comunicado, .tarjeta-estudiante, .tarjeta-noticia, .item-galeria, .item-video, .comentario-item, .comentario-caja"
    );
if (
    elementosAnimados.length > 0 &&
    "IntersectionObserver" in window
) {

    const observador =
        new IntersectionObserver(

            entradas => {

                entradas.forEach(entrada => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.style.opacity =
                            "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                        observador.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


    elementosAnimados.forEach(elemento => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(25px)";

        elemento.style.transition =
            "opacity .6s ease, transform .6s ease";


        observador.observe(elemento);

    });

}

/* =====================================================
   VISOR DE COMUNICADOS
===================================================== */

const modalComunicado =
    document.getElementById(
        "modalComunicado"
    );

const imagenComunicado =
    document.getElementById(
        "imagenComunicado"
    );


/* =====================================================
   ABRIR COMUNICADO
===================================================== */

function abrirComunicado(imagen) {

    if (
        !modalComunicado ||
        !imagenComunicado
    ) return;

    imagenComunicado.src = imagen;

    modalComunicado.classList.add(
        "activo"
    );

    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   CERRAR COMUNICADO
===================================================== */

function cerrarComunicado() {

    if (
        !modalComunicado ||
        !imagenComunicado
    ) return;

    modalComunicado.classList.remove(
        "activo"
    );

    document.body.style.overflow = "";

    imagenComunicado.src = "";
}


/* =====================================================
   HACER LAS FUNCIONES DISPONIBLES PARA EL HTML
===================================================== */

window.abrirComunicado =
    abrirComunicado;

window.cerrarComunicado =
    cerrarComunicado;


/* =====================================================
   CERRAR AL HACER CLIC FUERA
===================================================== */

if (modalComunicado) {

    modalComunicado.addEventListener(
        "click",
        evento => {

            if (
                evento.target ===
                modalComunicado
            ) {

                cerrarComunicado();

            }

        }
    );

}


/* =====================================================
   CERRAR CON ESC
===================================================== */

document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape"
        ) {

            cerrarComunicado();

        }

    }
);

/* =====================================================
   GALERÍA DE FOTOS
===================================================== */

const botonesFotos =
    document.querySelectorAll(
        ".miniatura-foto"
    );
const fotoPrincipal =
    document.getElementById(
        "fotoPrincipal"
    );
const tituloFoto =
    document.getElementById(
        "tituloFoto"
    );
const categoriaFoto =
    document.getElementById(
        "categoriaFoto"
    );
const descripcionFoto =
    document.getElementById(
        "descripcionFoto"
    );
botonesFotos.forEach(boton => {

    boton.addEventListener(
        "click",
        () => {


            /* QUITAR ACTIVO */

            botonesFotos.forEach(otroBoton => {

                otroBoton.classList.remove(
                    "activo"
                );

            });


            /* ACTIVAR BOTÓN */

            boton.classList.add(
                "activo"
            );


            /* EFECTO DE CAMBIO */

            if (fotoPrincipal) {

                fotoPrincipal.style.opacity =
                    "0";

            }


            setTimeout(() => {


                /* CAMBIAR IMAGEN */

                if (fotoPrincipal) {

                    fotoPrincipal.src =
                        boton.dataset.imagen;

                }


                /* CAMBIAR TÍTULO */

                if (tituloFoto) {

                    tituloFoto.textContent =
                        boton.dataset.titulo ||
                        "";

                }


                /* CAMBIAR CATEGORÍA */

                if (categoriaFoto) {

                    categoriaFoto.textContent =
                        boton.dataset.categoria ||
                        "";

                }


                /* CAMBIAR DESCRIPCIÓN */

                if (descripcionFoto) {

                    descripcionFoto.textContent =
                        boton.dataset.descripcion ||
                        "";

                }


                /* MOSTRAR */

                if (fotoPrincipal) {

                    fotoPrincipal.style.opacity =
                        "1";

                }

            }, 180);

        }
    );

});

/* =====================================================
   GALERÍA DE VIDEOS
   MP4 + YOUTUBE
===================================================== */
const videoPrincipal =
    document.getElementById(
        "videoPrincipal"
    );
const tituloVideo =
    document.getElementById(
        "tituloVideo"
    );
const categoriaVideo =
    document.getElementById(
        "categoriaVideo"
    );
const descripcionVideo =
    document.getElementById(
        "descripcionVideo"
    );
const botonesVideos =
    document.querySelectorAll(
        ".miniatura-video"
    );

/* =====================================================
   ACTUALIZAR INFORMACIÓN DEL VIDEO
===================================================== */
function actualizarInformacionVideo(boton) {
    if (tituloVideo) {

        tituloVideo.textContent =
            boton.dataset.titulo || "";

    }

    if (categoriaVideo) {

        categoriaVideo.textContent =
            boton.dataset.categoria || "";

    }

    if (descripcionVideo) {

        descripcionVideo.textContent =
            boton.dataset.descripcion || "";

    }
}

/* =====================================================
   DETENER VIDEO ACTUAL
===================================================== */
function detenerVideoActual() {

    if (!videoPrincipal) return;


    /* =================================================
       DETENER MP4
    ================================================= */

    const video =
        videoPrincipal.querySelector(
            "video"
        );


    if (video) {

        video.pause();

        video.removeAttribute(
            "src"
        );

        video.load();

    }


    /* =================================================
       DETENER YOUTUBE
    ================================================= */

    const iframe =
        videoPrincipal.querySelector(
            "iframe"
        );


    if (iframe) {

        /*
           Cambiar temporalmente el src
           detiene completamente YouTube.
        */

        iframe.src =
            "about:blank";

    }

}

/* =====================================================
   CARGAR VIDEO MP4
===================================================== */
function cargarMP4(boton) {

    if (!videoPrincipal) return;

    const video =
        boton.dataset.video;

    const portada =
        boton.dataset.portada || "";


    /* DETENER ANTERIOR */

    detenerVideoActual();


    /* LIMPIAR CONTENEDOR */

    videoPrincipal.innerHTML = "";


    /* CREAR VIDEO */

    const elementoVideo =
        document.createElement(
            "video"
        );


    elementoVideo.id =
        "videoReproductor";

    elementoVideo.controls =
        true;

    elementoVideo.playsInline =
        true;

    elementoVideo.preload =
        "metadata";


    /* POSTER */

    if (portada) {

        elementoVideo.poster =
            portada;

    }


    /* CREAR SOURCE */

    const fuente =
        document.createElement(
            "source"
        );


    fuente.src =
        video;

    fuente.type =
        "video/mp4";


    elementoVideo.appendChild(
        fuente
    );


    /* AGREGAR VIDEO */

    videoPrincipal.appendChild(
        elementoVideo
    );


    /* CARGAR */

    elementoVideo.load();


    /*
       Intentar reproducción automática.

       Si el navegador la bloquea,
       el usuario podrá reproducirlo
       manualmente.
    */

    const promesa =
        elementoVideo.play();

    if (promesa !== undefined) {

        promesa.catch(() => {

            /* Autoplay bloqueado */

        });

    }

}

/* =====================================================
   CARGAR VIDEO DE YOUTUBE
===================================================== */
function cargarYouTube(boton) {

    if (!videoPrincipal) return;


    /* =================================================
       OBTENER ID DEL VIDEO
    ================================================= */

    let idVideo =
        (boton.dataset.video || "").trim();


    /* =================================================
       EXTRAER ID SI SE COLOCA UNA URL COMPLETA
    ================================================= */

    if (
        idVideo.includes("youtube.com") ||
        idVideo.includes("youtu.be")
    ) {

        try {

            const url =
                new URL(
                    idVideo.startsWith("http")
                        ? idVideo
                        : "https://" + idVideo
                );


            /* youtube.com/watch?v=ID */

            if (
                url.searchParams.get("v")
            ) {

                idVideo =
                    url.searchParams.get("v");

            }


            /* youtu.be/ID */

            else if (
                url.hostname.includes("youtu.be")
            ) {

                idVideo =
                    url.pathname
                        .replace("/", "")
                        .split("/")[0];

            }


            /* youtube.com/embed/ID */

            else if (
                url.pathname.includes("/embed/")
            ) {

                idVideo =
                    url.pathname
                        .split("/embed/")[1]
                        .split("/")[0];

            }

        } catch (error) {

            console.error(
                "URL de YouTube no válida:",
                error
            );

            return;

        }

    }


    /* =================================================
       LIMPIAR ID
    ================================================= */

    idVideo =
        idVideo
            .split("?")[0]
            .split("&")[0]
            .split("/")[0]
            .trim();


    /* =================================================
       COMPROBAR ID
    ================================================= */

    if (
        !/^[a-zA-Z0-9_-]{11}$/.test(idVideo)
    ) {

        console.error(
            "ID de YouTube no válido:",
            idVideo
        );

        return;

    }


    /* =================================================
       DETENER VIDEO ACTUAL
    ================================================= */

    detenerVideoActual();


    /* =================================================
       LIMPIAR CONTENEDOR
    ================================================= */

    videoPrincipal.innerHTML = "";


    /* =================================================
       CREAR IFRAME
    ================================================= */

    const iframe =
        document.createElement("iframe");


    iframe.id =
        "youtubePrincipal";


    /* =================================================
       REPRODUCTOR YOUTUBE
       SIN AUTOPLAY
    ================================================= */

    iframe.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(idVideo) +
        "?rel=0";


    /* =================================================
       TÍTULO
    ================================================= */

    iframe.title =
        boton.dataset.titulo ||
        "Video de YouTube";


    /* =================================================
       BORDE
    ================================================= */

    iframe.setAttribute(
        "frameborder",
        "0"
    );


    /* =================================================
       PERMISOS
    ================================================= */

    iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );


    /* =================================================
       POLÍTICA DE REFERENCIA
    ================================================= */

    iframe.setAttribute(
        "referrerpolicy",
        "strict-origin-when-cross-origin"
    );


    /* =================================================
       PANTALLA COMPLETA
    ================================================= */

    iframe.setAttribute(
        "allowfullscreen",
        ""
    );


    /* =================================================
       AGREGAR IFRAME
    ================================================= */

    videoPrincipal.appendChild(
        iframe
    );

}

/* =====================================================
   CLIC EN LOS VIDEOS
===================================================== */
botonesVideos.forEach(boton => {

    boton.addEventListener(
        "click",
        () => {

            /* ===============================
               QUITAR ACTIVO
            =============================== */

            botonesVideos.forEach(otroBoton => {

                otroBoton.classList.remove(
                    "activo"
                );

            });


            /* ===============================
               ACTIVAR ACTUAL
            =============================== */

            boton.classList.add(
                "activo"
            );


            /* ===============================
               INFORMACIÓN
            =============================== */

            actualizarInformacionVideo(
                boton
            );


            /* ===============================
               TIPO DE VIDEO
            =============================== */

            const tipo =
                (
                    boton.dataset.tipo ||
                    "mp4"
                ).toLowerCase();


            /* ===============================
               YOUTUBE
            =============================== */

            if (
                tipo === "youtube"
            ) {

                cargarYouTube(
                    boton
                );

            }


            /* ===============================
               MP4
            =============================== */

            else {

                cargarMP4(
                    boton
                );

            }

        }
    );

});

/* =====================================================
   COMENTARIOS
   PC = FLECHAS
   CELULAR = DESLIZAMIENTO
===================================================== */
const comentarios =
    document.querySelectorAll(
        ".comentario-item"
    );
const anterior =
    document.getElementById(
        "anterior"
    );
const siguiente =
    document.getElementById(
        "siguiente"
    );
let actual = 0;

/* =====================================================
   MOSTRAR COMENTARIO
===================================================== */
function mostrarComentario(numero) {

    if (!comentarios.length) return;


    comentarios.forEach(
        comentario => {

            comentario.classList.remove(
                "activo"
            );

        }
    );


    comentarios[numero].classList.add(
        "activo"
    );

}

/* =====================================================
   PRIMER COMENTARIO
===================================================== */
if (comentarios.length > 0) {

    mostrarComentario(0);

}

/* =====================================================
   SIGUIENTE
===================================================== */
if (siguiente) {

    siguiente.addEventListener(
        "click",
        () => {

            if (!comentarios.length)
                return;


            actual++;


            if (
                actual >=
                comentarios.length
            ) {

                actual = 0;

            }


            mostrarComentario(
                actual
            );

        }
    );

}

/* =====================================================
   ANTERIOR
===================================================== */
if (anterior) {

    anterior.addEventListener(
        "click",
        () => {

            if (!comentarios.length)
                return;


            actual--;


            if (actual < 0) {

                actual =
                    comentarios.length - 1;

            }


            mostrarComentario(
                actual
            );

        }
    );

}

/* =====================================================
   MISIÓN Y VISIÓN REPLEGABLE
===================================================== */
const botonesMV =
    document.querySelectorAll(
        ".mv-boton"
    );

botonesMV.forEach(boton => {

    boton.addEventListener(
        "click",
        () => {


            const item =
                boton.parentElement;


            if (!item) return;


            /* CERRAR LOS DEMÁS */

            document
                .querySelectorAll(
                    ".mv-item"
                )
                .forEach(otro => {

                    if (
                        otro !== item
                    ) {

                        otro.classList.remove(
                            "activo"
                        );

                    }

                });


            /* ABRIR / CERRAR */

            item.classList.toggle(
                "activo"
            );

        }
    );

});

/* =====================================================
   CERRAR MENÚ AL CAMBIAR A PC
===================================================== */
window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 700 &&
            navegacion
        ) {

            navegacion.classList.remove(
                "activo"
            );

        }

    }
);

/* =====================================================
   PREVENIR ARRASTRE ACCIDENTAL DE IMÁGENES
===================================================== */
document
    .querySelectorAll(
        ".miniatura-foto img, .miniatura-video img"
    )
    .forEach(img => {

        img.addEventListener(
            "dragstart",
            evento => {

                evento.preventDefault();

            }

        );

    });

/* =====================================================
            ESTADÍSTICAS DEL COLEGIO
===================================================== */

/* AÑOS DE SERVICIO */

const anoInicioServicio = 1960;

const anoActual = new Date().getFullYear();

const anosServicio =
    anoActual - anoInicioServicio;

const contadorAnos =
    document.getElementById("anosServicio");

if (contadorAnos) {

    contadorAnos.textContent =
        anosServicio;

}


// =====================================================
// FIREBASE - CONTADOR DE VISITAS
// =====================================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    increment
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// =====================================================
// CONFIGURACIÓN DE FIREBASE
// =====================================================

const firebaseConfig = {

    apiKey:
        "AIzaSyB0xyjiYpAWwftNWA3pRrrKyKR8nOQeeZY",

    authDomain:
        "colegio-jfb-a66fb.firebaseapp.com",

    projectId:
        "colegio-jfb-a66fb",

    storageBucket:
        "colegio-jfb-a66fb.firebasestorage.app",

    messagingSenderId:
        "407961975361",

    appId:
        "1:407961975361:web:7ee11654b5c7bdd61264c0",

    measurementId:
        "G-LYJ2CRLMGT"

};


// =====================================================
// INICIAR FIREBASE
// =====================================================

const appFirebase =
    initializeApp(firebaseConfig);

const db =
    getFirestore(appFirebase);


// =====================================================
// CONTADOR DE VISITAS
// =====================================================

const contadorVisitas =
    document.getElementById(
        "contadorVisitas"
    );


async function registrarVisitaFirebase() {

    if (!contadorVisitas) {

        return;

    }

    try {

        const referencia =
            doc(
                db,
                "estadisticas",
                "visitas"
            );


        // =================================================
        // AUMENTAR EL CONTADOR
        // =================================================

        await setDoc(

            referencia,

            {
                total:
                    increment(1)
            },

            {
                merge: true
            }

        );


        // =================================================
        // LEER EL NUEVO VALOR
        // =================================================

        const documento =
            await getDoc(
                referencia
            );


        if (
            documento.exists()
        ) {

            const datos =
                documento.data();

            const total =
                Number(
                    datos.total || 0
                );

            contadorVisitas.textContent =
                total.toLocaleString(
                    "es-BO"
                );

        }

    } catch (error) {

        console.error(
            "Error en el contador de Firebase:",
            error
        );

        contadorVisitas.textContent =
            "—";

    }

}


// =====================================================
// EJECUTAR
// =====================================================

registrarVisitaFirebase();















