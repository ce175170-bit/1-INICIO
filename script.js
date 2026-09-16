/* =====================================================
   PÁGINA WEB EDUCATIVA   
===================================================== */

/* =====================================================
   MENÚ PARA CELULAR
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    /* CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN */

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}

/* =====================================================
   CERRAR MENÚ AL TOCAR FUERA
===================================================== */
document.addEventListener("click", event => {

    if (!menuBtn || !nav) return;

    const hizoClickEnMenu =
        nav.contains(event.target);

    const hizoClickEnBoton =
        menuBtn.contains(event.target);

    if (
        !hizoClickEnMenu &&
        !hizoClickEnBoton
    ) {

        nav.classList.remove("active");

    }

});

/* =====================================================
   CARRUSEL CON MOUSE Y DEDO
===================================================== */
function activarCarrusel(slider) {

    if (!slider) return;


    let presionado = false;

    let inicioX = 0;

    let desplazamientoInicial = 0;


    /* =================================================
       MOUSE
    ================================================= */

    slider.addEventListener("mousedown", event => {

        presionado = true;

        slider.classList.add("dragging");

        inicioX =
            event.pageX -
            slider.offsetLeft;

        desplazamientoInicial =
            slider.scrollLeft;

    });


    slider.addEventListener("mouseleave", () => {

        presionado = false;

        slider.classList.remove("dragging");

    });


    slider.addEventListener("mouseup", () => {

        presionado = false;

        slider.classList.remove("dragging");

    });


    slider.addEventListener("mousemove", event => {

        if (!presionado) return;

        event.preventDefault();


        const posicionActual =
            event.pageX -
            slider.offsetLeft;


        const distancia =
            (posicionActual - inicioX) * 1.5;


        slider.scrollLeft =
            desplazamientoInicial -
            distancia;

    });


    /* =================================================
       CELULAR
    ================================================= */

    let inicioToque = 0;

    slider.addEventListener(
        "touchstart",
        event => {

            inicioToque =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    slider.addEventListener(
        "touchend",
        event => {

            const finalToque =
                event.changedTouches[0].clientX;


            const distancia =
                inicioToque -
                finalToque;


            if (Math.abs(distancia) > 50) {

                const ancho =
                    slider.clientWidth;


                if (distancia > 0) {

                    slider.scrollBy({

                        left: ancho,

                        behavior: "smooth"

                    });

                } else {

                    slider.scrollBy({

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
const photoTrack =
    document.getElementById("photoTrack");
if (photoTrack) {

    activarCarrusel(photoTrack);

}

/* =====================================================
   ACTIVAR CARRUSEL DE VIDEOS
===================================================== */
const videoTrack =
    document.getElementById("videoTrack");
if (videoTrack) {

    activarCarrusel(videoTrack);

}

/* =====================================================
   BOTÓN VOLVER ARRIBA
===================================================== */

const topBtn =
    document.getElementById("topBtn");
if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", () => {

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
        ".comunicado, .comunicado-card, .student-card, .news-card, .gallery-item, .video-item, .comentario-item, .comment"
    );
if (
    elementosAnimados.length > 0 &&
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
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


        observer.observe(elemento);

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
        event => {

            if (
                event.target ===
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
    event => {

        if (
            event.key === "Escape"
        ) {

            cerrarComunicado();

        }

    }
);


/* =====================================================
          GALERÍA DE FOTOS — COLEGIO J.F.B.
          PC = FLECHAS
          CELULAR = DESLIZAMIENTO
          CLIC = PANTALLA COMPLETA
===================================================== */

const jfbFotos =
    document.querySelectorAll(".jfb-foto");

const jfbAnterior =
    document.getElementById("jfbAnterior");

const jfbSiguiente =
    document.getElementById("jfbSiguiente");

const jfbIndicadores =
    document.getElementById("jfbIndicadores");

const jfbVisor =
    document.getElementById("jfbVisor");

const jfbImagenGrande =
    document.getElementById("jfbImagenGrande");

const jfbCerrar =
    document.getElementById("jfbCerrar");

const jfbVisorAnterior =
    document.getElementById("jfbVisorAnterior");

const jfbVisorSiguiente =
    document.getElementById("jfbVisorSiguiente");


let jfbActual = 0;


/* =====================================================
              CREAR INDICADORES
===================================================== */

if (
    jfbIndicadores &&
    jfbFotos.length > 0
) {

    jfbFotos.forEach((foto, indice) => {

        const indicador =
            document.createElement("button");

        indicador.type = "button";

        indicador.setAttribute(
            "aria-label",
            "Ir a fotografía " + (indice + 1)
        );

        indicador.addEventListener(
            "click",
            () => {

                jfbMostrar(indice);

            }
        );

        jfbIndicadores.appendChild(
            indicador
        );

    });

}


/* =====================================================
                 MOSTRAR FOTO
===================================================== */

function jfbMostrar(indice) {

    if (!jfbFotos.length) return;


    /*
       Mantener el índice dentro
       de los límites.
    */

    if (indice < 0) {

        indice =
            jfbFotos.length - 1;

    }

    if (
        indice >=
        jfbFotos.length
    ) {

        indice = 0;

    }


    jfbActual = indice;


    /* ==============================
       CAMBIAR FOTO
    ============================== */

    jfbFotos.forEach(
        (foto, posicion) => {

            foto.classList.toggle(
                "active",
                posicion === jfbActual
            );

        }
    );


    /* ==============================
       CAMBIAR INDICADORES
    ============================== */

    if (jfbIndicadores) {

        const indicadores =
            jfbIndicadores.querySelectorAll(
                "button"
            );

        indicadores.forEach(
            (indicador, posicion) => {

                indicador.classList.toggle(
                    "active",
                    posicion === jfbActual
                );

            }
        );

    }

}


/* =====================================================
                 FOTO ANTERIOR
===================================================== */

if (jfbAnterior) {

    jfbAnterior.addEventListener(
        "click",
        () => {

            jfbMostrar(
                jfbActual - 1
            );

        }
    );

}


/* =====================================================
                 FOTO SIGUIENTE
===================================================== */

if (jfbSiguiente) {

    jfbSiguiente.addEventListener(
        "click",
        () => {

            jfbMostrar(
                jfbActual + 1
            );

        }
    );

}


/* =====================================================
              ABRIR PANTALLA COMPLETA
===================================================== */

function jfbAbrirVisor() {

    if (
        !jfbFotos.length ||
        !jfbVisor ||
        !jfbImagenGrande
    ) return;


    const imagen =
        jfbFotos[jfbActual].querySelector(
            "img"
        );


    if (!imagen) return;


    jfbImagenGrande.src =
        imagen.src;

    jfbImagenGrande.alt =
        imagen.alt ||
        "Fotografía del Colegio J.F.B.";


    jfbVisor.classList.add(
        "activo"
    );


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
               CERRAR PANTALLA COMPLETA
===================================================== */

function jfbCerrarVisor() {

    if (!jfbVisor) return;


    jfbVisor.classList.remove(
        "activo"
    );


    document.body.style.overflow =
        "";


    if (jfbImagenGrande) {

        jfbImagenGrande.src = "";

    }

}


/* =====================================================
              CLIC EN LAS FOTOS
===================================================== */

jfbFotos.forEach(foto => {

    const imagen =
        foto.querySelector("img");


    if (!imagen) return;


    imagen.addEventListener(
        "click",
        () => {

            jfbAbrirVisor();

        }
    );


    /* Evitar arrastre */

    imagen.addEventListener(
        "dragstart",
        event => {

            event.preventDefault();

        }
    );

});


/* =====================================================
            CERRAR CON BOTÓN X
===================================================== */

if (jfbCerrar) {

    jfbCerrar.addEventListener(
        "click",
        () => {

            jfbCerrarVisor();

        }
    );

}


/* =====================================================
             CLIC FUERA DE LA FOTO
===================================================== */

if (jfbVisor) {

    jfbVisor.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                jfbVisor
            ) {

                jfbCerrarVisor();

            }

        }
    );

}


/* =====================================================
            FLECHA ANTERIOR DEL VISOR
===================================================== */

if (jfbVisorAnterior) {

    jfbVisorAnterior.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            jfbMostrar(
                jfbActual - 1
            );

            jfbActualizarVisor();

        }
    );

}


/* =====================================================
            FLECHA SIGUIENTE DEL VISOR
===================================================== */

if (jfbVisorSiguiente) {

    jfbVisorSiguiente.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            jfbMostrar(
                jfbActual + 1
            );

            jfbActualizarVisor();

        }
    );

}


/* =====================================================
              ACTUALIZAR VISOR
===================================================== */

function jfbActualizarVisor() {

    if (
        !jfbFotos.length ||
        !jfbImagenGrande
    ) return;


    const imagen =
        jfbFotos[jfbActual].querySelector(
            "img"
        );


    if (!imagen) return;


    jfbImagenGrande.src =
        imagen.src;

    jfbImagenGrande.alt =
        imagen.alt ||
        "Fotografía del Colegio J.F.B.";

}


/* =====================================================
                 TECLADO PC
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
           Solo actuar cuando
           el visor está abierto.
        */

        if (
            !jfbVisor ||
            !jfbVisor.classList.contains(
                "activo"
            )
        ) {

            return;

        }


        /* IZQUIERDA */

        if (
            event.key === "ArrowLeft"
        ) {

            jfbMostrar(
                jfbActual - 1
            );

            jfbActualizarVisor();

        }


        /* DERECHA */

        if (
            event.key === "ArrowRight"
        ) {

            jfbMostrar(
                jfbActual + 1
            );

            jfbActualizarVisor();

        }


        /* ESC */

        if (
            event.key === "Escape"
        ) {

            jfbCerrarVisor();

        }

    }
);


/* =====================================================
          DESLIZAMIENTO EN GALERÍA PRINCIPAL
===================================================== */

let jfbInicioX = 0;
let jfbInicioY = 0;


if (jfbFotos.length > 0) {

    const jfbGaleria =
        document.querySelector(
            ".jfb-galeria"
        );


    if (jfbGaleria) {

        jfbGaleria.addEventListener(
            "touchstart",
            event => {

                const toque =
                    event.touches[0];

                jfbInicioX =
                    toque.clientX;

                jfbInicioY =
                    toque.clientY;

            },
            {
                passive: true
            }
        );


        jfbGaleria.addEventListener(
            "touchend",
            event => {

                const toque =
                    event.changedTouches[0];

                const finalX =
                    toque.clientX;

                const finalY =
                    toque.clientY;


                const distanciaX =
                    jfbInicioX -
                    finalX;

                const distanciaY =
                    jfbInicioY -
                    finalY;


                /*
                   Solo cambiar la foto
                   si el movimiento
                   es principalmente horizontal.
                */

                if (
                    Math.abs(distanciaX) > 50 &&
                    Math.abs(distanciaX) >
                    Math.abs(distanciaY)
                ) {

                    if (
                        distanciaX > 0
                    ) {

                        jfbMostrar(
                            jfbActual + 1
                        );

                    } else {

                        jfbMostrar(
                            jfbActual - 1
                        );

                    }

                }

            },
            {
                passive: true
            }
        );

    }

}


/* =====================================================
          DESLIZAMIENTO EN PANTALLA COMPLETA
===================================================== */

let jfbVisorInicioX = 0;
let jfbVisorInicioY = 0;


if (jfbVisor) {

    jfbVisor.addEventListener(
        "touchstart",
        event => {

            const toque =
                event.touches[0];

            jfbVisorInicioX =
                toque.clientX;

            jfbVisorInicioY =
                toque.clientY;

        },
        {
            passive: true
        }
    );


    jfbVisor.addEventListener(
        "touchend",
        event => {

            const toque =
                event.changedTouches[0];

            const finalX =
                toque.clientX;

            const finalY =
                toque.clientY;


            const distanciaX =
                jfbVisorInicioX -
                finalX;

            const distanciaY =
                jfbVisorInicioY -
                finalY;


            if (
                Math.abs(distanciaX) > 50 &&
                Math.abs(distanciaX) >
                Math.abs(distanciaY)
            ) {

                if (
                    distanciaX > 0
                ) {

                    jfbMostrar(
                        jfbActual + 1
                    );

                } else {

                    jfbMostrar(
                        jfbActual - 1
                    );

                }


                jfbActualizarVisor();

            }

        },
        {
            passive: true
        }
    );

}


/* =====================================================
                 INICIAR GALERÍA
===================================================== */

if (jfbFotos.length > 0) {

    jfbMostrar(0);

}



/* =====================================================
   GALERÍA DE VIDEOS
   MP4 + YOUTUBE
===================================================== */
const videoMain =
    document.getElementById(
        "videoMain"
    );
const videoTitle =
    document.getElementById(
        "videoTitle"
    );
const videoCategory =
    document.getElementById(
        "videoCategory"
    );
const videoDescription =
    document.getElementById(
        "videoDescription"
    );
const videoButtons =
    document.querySelectorAll(
        ".video-thumb"
    );

/* =====================================================
   ACTUALIZAR INFORMACIÓN DEL VIDEO
===================================================== */
function actualizarInformacionVideo(button) {
    if (videoTitle) {

        videoTitle.textContent =
            button.dataset.title || "";

    }

    if (videoCategory) {

        videoCategory.textContent =
            button.dataset.category || "";

    }

    if (videoDescription) {

        videoDescription.textContent =
            button.dataset.description || "";

    }
}

/* =====================================================
   DETENER VIDEO ACTUAL
===================================================== */
function detenerVideoActual() {

    if (!videoMain) return;


    /* =================================================
       DETENER MP4
    ================================================= */

    const video =
        videoMain.querySelector(
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
        videoMain.querySelector(
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
function cargarMP4(button) {

    if (!videoMain) return;

    const video =
        button.dataset.video;

    const poster =
        button.dataset.poster || "";


    /* DETENER ANTERIOR */

    detenerVideoActual();


    /* LIMPIAR CONTENEDOR */

    videoMain.innerHTML = "";


    /* CREAR VIDEO */

    const elementoVideo =
        document.createElement(
            "video"
        );


    elementoVideo.id =
        "mainVideo";

    elementoVideo.controls =
        true;

    elementoVideo.playsInline =
        true;

    elementoVideo.preload =
        "metadata";


    /* POSTER */

    if (poster) {

        elementoVideo.poster =
            poster;

    }


    /* CREAR SOURCE */

    const source =
        document.createElement(
            "source"
        );


    source.src =
        video;

    source.type =
        "video/mp4";


    elementoVideo.appendChild(
        source
    );


    /* AGREGAR VIDEO */

    videoMain.appendChild(
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
function cargarYouTube(button) {

    if (!videoMain) return;


    /* =================================================
       OBTENER ID DEL VIDEO
    ================================================= */

    let videoID =
        (button.dataset.video || "").trim();


    /* =================================================
       EXTRAER ID SI SE COLOCA UNA URL COMPLETA
    ================================================= */

    if (
        videoID.includes("youtube.com") ||
        videoID.includes("youtu.be")
    ) {

        try {

            const url =
                new URL(
                    videoID.startsWith("http")
                        ? videoID
                        : "https://" + videoID
                );


            /* youtube.com/watch?v=ID */

            if (
                url.searchParams.get("v")
            ) {

                videoID =
                    url.searchParams.get("v");

            }


            /* youtu.be/ID */

            else if (
                url.hostname.includes("youtu.be")
            ) {

                videoID =
                    url.pathname
                        .replace("/", "")
                        .split("/")[0];

            }


            /* youtube.com/embed/ID */

            else if (
                url.pathname.includes("/embed/")
            ) {

                videoID =
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

    videoID =
        videoID
            .split("?")[0]
            .split("&")[0]
            .split("/")[0]
            .trim();


    /* =================================================
       COMPROBAR ID
    ================================================= */

    if (
        !/^[a-zA-Z0-9_-]{11}$/.test(videoID)
    ) {

        console.error(
            "ID de YouTube no válido:",
            videoID
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

    videoMain.innerHTML = "";


    /* =================================================
       CREAR IFRAME
    ================================================= */

    const iframe =
        document.createElement("iframe");


    iframe.id =
        "mainYouTube";


    /* =================================================
       REPRODUCTOR YOUTUBE
       SIN AUTOPLAY
    ================================================= */

    iframe.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(videoID) +
        "?rel=0";


    /* =================================================
       TÍTULO
    ================================================= */

    iframe.title =
        button.dataset.title ||
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

    videoMain.appendChild(
        iframe
    );

}

/* =====================================================
   CLIC EN LOS VIDEOS
===================================================== */
videoButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            /* ===============================
               QUITAR ACTIVO
            =============================== */

            videoButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            /* ===============================
               ACTIVAR ACTUAL
            =============================== */

            button.classList.add(
                "active"
            );


            /* ===============================
               INFORMACIÓN
            =============================== */

            actualizarInformacionVideo(
                button
            );


            /* ===============================
               TIPO DE VIDEO
            =============================== */

            const tipo =
                (
                    button.dataset.type ||
                    "mp4"
                ).toLowerCase();


            /* ===============================
               YOUTUBE
            =============================== */

            if (
                tipo === "youtube"
            ) {

                cargarYouTube(
                    button
                );

            }


            /* ===============================
               MP4
            =============================== */

            else {

                cargarMP4(
                    button
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
            nav
        ) {

            nav.classList.remove(
                "active"
            );

        }

    }
);

/* =====================================================
   PREVENIR ARRASTRE ACCIDENTAL DE IMÁGENES
===================================================== */
document
    .querySelectorAll(
        ".photo-thumb img, .video-thumb img"
    )
    .forEach(img => {

        img.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

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