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
   GALERÍA DE FOTOS
===================================================== */

const photoButtons =
    document.querySelectorAll(
        ".photo-thumb"
    );
const mainPhoto =
    document.getElementById(
        "mainPhoto"
    );
const photoTitle =
    document.getElementById(
        "photoTitle"
    );
const photoCategory =
    document.getElementById(
        "photoCategory"
    );
const photoDescription =
    document.getElementById(
        "photoDescription"
    );
photoButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {


            /* QUITAR ACTIVO */

            photoButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            /* ACTIVAR BOTÓN */

            button.classList.add(
                "active"
            );


            /* EFECTO DE CAMBIO */

            if (mainPhoto) {

                mainPhoto.style.opacity =
                    "0";

            }


            setTimeout(() => {


                /* CAMBIAR IMAGEN */

                if (mainPhoto) {

                    mainPhoto.src =
                        button.dataset.image;

                }


                /* CAMBIAR TÍTULO */

                if (photoTitle) {

                    photoTitle.textContent =
                        button.dataset.title ||
                        "";

                }


                /* CAMBIAR CATEGORÍA */

                if (photoCategory) {

                    photoCategory.textContent =
                        button.dataset.category ||
                        "";

                }


                /* CAMBIAR DESCRIPCIÓN */

                if (photoDescription) {

                    photoDescription.textContent =
                        button.dataset.description ||
                        "";

                }


                /* MOSTRAR */

                if (mainPhoto) {

                    mainPhoto.style.opacity =
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
    /*
       Obtenemos solamente el ID.
       Ejemplo:
       IqbOoPuduTI
    */
    const videoID =
        button.dataset.video;

    /* DETENER ANTERIOR */
    detenerVideoActual();

    /* LIMPIAR CONTENEDOR */
    videoMain.innerHTML = "";

    /* CREAR IFRAME */
    const iframe =
        document.createElement(
            "iframe"
        );
    iframe.id =
        "mainYouTube";
    /* URL DEL REPRODUCTOR YOUTUBE */
    iframe.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(videoID) +
        "?autoplay=1&rel=0";
    /* TÍTULO */
    iframe.title =
        button.dataset.title ||
        "Video de YouTube";

    /* BORDE */
    iframe.setAttribute(
        "frameborder",
        "0"
    );


    /*
       PERMISOS DEL REPRODUCTOR
    */

    iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );


    /*
       POLÍTICA DE REFERENCIA
    */

    iframe.setAttribute(
        "referrerpolicy",
        "strict-origin-when-cross-origin"
    );


    /*
       PANTALLA COMPLETA
    */

    iframe.setAttribute(
        "allowfullscreen",
        ""
    );


    /*
       AGREGAR IFRAME
    */

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

/* CONTADOR DE VISITAS */

const contadorVisitas =
    document.getElementById("contadorVisitas");

const contadorID =
    "colegio-jfb";

async function registrarVisita() {

    if (!contadorVisitas) {
        return;
    }

    try {

        const respuesta =
            await fetch(
                `https://api.counterapi.dev/v1/${contadorID}/visitas/up`
            );

        if (!respuesta.ok) {
            throw new Error(
                "No se pudo conectar con el contador"
            );
        }

        const datos =
            await respuesta.json();

        /*
           CounterAPI devuelve el número
           actual de visitas.
        */

        if (
            datos &&
            datos.count !== undefined
        ) {

            contadorVisitas.textContent =
                Number(datos.count)
                    .toLocaleString("es-BO");

        }

    } catch (error) {

        console.error(
            "Error en el contador de visitas:",
            error
        );

        /*
           Si el servicio no responde,
           mostramos un guion en lugar
           de romper la página.
        */

        contadorVisitas.textContent = "—";

    }

}
/* Ejecutar */

registrarVisita();