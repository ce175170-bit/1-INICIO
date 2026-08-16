
/* ================================
   MENÚ PARA CELULAR
================================ */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});






/* =====================================================
   GALERÍA DE FOTOS
   DESLIZAR CON MOUSE Y DEDO
===================================================== */

function activarCarrusel(slider) {

    let presionado = false;
    let inicioX;
    let desplazamientoInicial;


    /* MOUSE */

    slider.addEventListener("mousedown", function(e) {

        presionado = true;

        slider.classList.add("dragging");

        inicioX = e.pageX - slider.offsetLeft;

        desplazamientoInicial = slider.scrollLeft;

    });


    slider.addEventListener("mouseleave", function() {

        presionado = false;

        slider.classList.remove("dragging");

    });


    slider.addEventListener("mouseup", function() {

        presionado = false;

        slider.classList.remove("dragging");

    });


    slider.addEventListener("mousemove", function(e) {

        if (!presionado) return;

        e.preventDefault();

        const posicionActual =
            e.pageX - slider.offsetLeft;

        const distancia =
            (posicionActual - inicioX) * 1.5;

        slider.scrollLeft =
            desplazamientoInicial - distancia;

    });


    /* =================================================
       CELULAR
    ================================================= */

    let inicioToque = 0;

    slider.addEventListener(
        "touchstart",
        function(e) {

            inicioToque =
                e.touches[0].clientX;

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchend",
        function(e) {

            const finalToque =
                e.changedTouches[0].clientX;

            const distancia =
                inicioToque - finalToque;


            /*
                Si el usuario desliza más de 50px,
                pasa al siguiente/anterior.
            */

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
        { passive: true }
    );

}


/* ACTIVAR FOTOS */

const photoTrack =
    document.getElementById("photoTrack");

if (photoTrack) {

    activarCarrusel(photoTrack);

}


/* ACTIVAR VIDEOS */

const videoTrack =
    document.getElementById("videoTrack");

if (videoTrack) {

    activarCarrusel(videoTrack);

}







/* ================================
   BOTÓN VOLVER ARRIBA
================================ */

const topBtn = document.getElementById("topBtn");

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


/* ================================
   ANIMACIONES
================================ */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


document
    .querySelectorAll(
        ".comunicado-card, .student-card, .news-card, .gallery-item, .video-item, .comment"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });


    
/* =====================================================
   VISOR DE COMUNICADOS
===================================================== */

const modalComunicado =
    document.getElementById("modalComunicado");

const imagenComunicado =
    document.getElementById("imagenComunicado");


function abrirComunicado(imagen) {

    imagenComunicado.src = imagen;

    modalComunicado.classList.add("activo");

    document.body.style.overflow = "hidden";
}


function cerrarComunicado() {

    modalComunicado.classList.remove("activo");

    document.body.style.overflow = "";

    imagenComunicado.src = "";
}


/* Cerrar haciendo clic fuera de la imagen */

modalComunicado.addEventListener("click", function(event) {

    if (event.target === modalComunicado) {

        cerrarComunicado();

    }

});


/* Cerrar con tecla ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarComunicado();

    }

});




/* =====================================================
   GALERÍA DE FOTOS
===================================================== */

const photoButtons =
    document.querySelectorAll(".photo-thumb");

const mainPhoto =
    document.getElementById("mainPhoto");

const photoTitle =
    document.getElementById("photoTitle");

const photoCategory =
    document.getElementById("photoCategory");

const photoDescription =
    document.getElementById("photoDescription");


photoButtons.forEach(button => {

    button.addEventListener("click", () => {

        photoButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        mainPhoto.style.opacity = "0";


        setTimeout(() => {

            mainPhoto.src =
                button.dataset.image;

            photoTitle.textContent =
                button.dataset.title;

            photoCategory.textContent =
                button.dataset.category;

            photoDescription.textContent =
                button.dataset.description;

            mainPhoto.style.opacity = "1";

        }, 180);

    });

});


/* =====================================================
   GALERÍA DE VIDEOS
===================================================== */

const videoButtons =
    document.querySelectorAll(".video-thumb");

const mainVideo =
    document.getElementById("mainVideo");

const videoTitle =
    document.getElementById("videoTitle");

const videoCategory =
    document.getElementById("videoCategory");

const videoDescription =
    document.getElementById("videoDescription");


videoButtons.forEach(button => {

    button.addEventListener("click", () => {

        videoButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        mainVideo.pause();


        mainVideo.src =
            button.dataset.video;

        mainVideo.poster =
            button.dataset.poster;


        videoTitle.textContent =
            button.dataset.title;

        videoCategory.textContent =
            button.dataset.category;

        videoDescription.textContent =
            button.dataset.description;


        mainVideo.load();

    });

});




/* ================= COMENTARIOS ================= */

const comentarios =
    document.querySelectorAll(".comentario-item");

const anterior =
    document.getElementById("anterior");

const siguiente =
    document.getElementById("siguiente");

let actual = 0;


/* MOSTRAR PRIMER COMENTARIO */

comentarios[0].classList.add("activo");


/* SIGUIENTE */

siguiente.addEventListener("click", () => {

    comentarios[actual].classList.remove("activo");

    actual++;

    if (actual >= comentarios.length) {

        actual = 0;

    }

    comentarios[actual].classList.add("activo");

});


/* ANTERIOR */

anterior.addEventListener("click", () => {

    comentarios[actual].classList.remove("activo");

    actual--;

    if (actual < 0) {

        actual = comentarios.length - 1;

    }

    comentarios[actual].classList.add("activo");

});



/* =========================================
   MISIÓN Y VISIÓN REPLEGABLE
========================================= */

const botonesMV =
    document.querySelectorAll(".mv-boton");


botonesMV.forEach(boton => {

    boton.addEventListener("click", () => {

        const item =
            boton.parentElement;


        /* Cerrar los demás */

        document
            .querySelectorAll(".mv-item")
            .forEach(otro => {

                if (otro !== item) {

                    otro.classList.remove("activo");

                }

            });


        /* Abrir / cerrar */

        item.classList.toggle("activo");

    });

});















