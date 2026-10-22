/* =====================================================
   GALERÍA DE VIDEOS
   MP4 + YOUTUBE + FACEBOOK + TIKTOK + INSTAGRAM + VIMEO + DRIVE
   (los videos se agregan en videos-data.js)
   ARCHIVO INDEPENDIENTE: no hace falta tocar script.js
===================================================== */
(() => {

    const lista = window.VIDEOS || [];

    const videoMain =
        document.getElementById("videoMain");

    const videoTitle =
        document.getElementById("videoTitle");

    const videoCategory =
        document.getElementById("videoCategory");

    const videoDescription =
        document.getElementById("videoDescription");

    const contenedorMiniaturas =
        document.querySelector("#videos .video-thumbnails");

    if (!videoMain || !contenedorMiniaturas || !lista.length) return;

    /* Quita las miniaturas antiguas escritas a mano en el HTML */
    contenedorMiniaturas.innerHTML = "";

    /* Estilos mínimos (sin colores), no hace falta tocar styles.css */
    const estilo = document.createElement("style");

    estilo.textContent =
        ".video-main.es-vertical{aspect-ratio:9/16;height:80vh;width:auto;max-width:100%;margin-inline:auto}" +
        ".video-thumb video{width:100%;height:100%;object-fit:cover;display:block}";

    document.head.appendChild(estilo);


    /* =================================================
       RECONOCER LA PLATAFORMA DEL ENLACE
    ================================================= */

    function detectarVideo(url) {

        const s = String(url).trim();
        let m;

        /* YouTube (enlace o código de 11 caracteres) */
        if (
            (m = s.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/)) ||
            (m = s.match(/^([\w-]{11})$/))
        ) {
            return {
                tipo: "iframe",
                imagen: "https://i.ytimg.com/vi/" + m[1] + "/hqdefault.jpg",
                embed: "https://www.youtube.com/embed/" + m[1] + "?rel=0"
            };
        }

        /* Facebook */
        if (/facebook\.com|fb\.watch/.test(s)) {
            return {
                tipo: "iframe",
                embed: "https://www.facebook.com/plugins/video.php?href=" +
                    encodeURIComponent(s) + "&show_text=false"
            };
        }

        /* TikTok (vertical) */
        if ((m = s.match(/tiktok\.com\/.*?\/video\/(\d+)/))) {
            return {
                tipo: "iframe",
                vertical: true,
                embed: "https://www.tiktok.com/embed/v2/" + m[1]
            };
        }

        /* Instagram (vertical) */
        if ((m = s.match(/instagram\.com\/(?:[\w.]+\/)?(reels?|p|tv)\/([\w-]+)/))) {
            return {
                tipo: "iframe",
                vertical: true,
                embed: "https://www.instagram.com/" +
                    (m[1] === "reels" ? "reel" : m[1]) + "/" + m[2] + "/embed"
            };
        }

        /* Vimeo */
        if ((m = s.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
            return {
                tipo: "iframe",
                embed: "https://player.vimeo.com/video/" + m[1]
            };
        }

        /* Google Drive */
        if ((m = s.match(/drive\.google\.com\/file\/d\/([\w-]+)/))) {
            return {
                tipo: "iframe",
                embed: "https://drive.google.com/file/d/" + m[1] + "/preview"
            };
        }

        /* Archivo propio (mp4, webm...) o ruta local */
        if (
            /\.(mp4|webm|ogg|ogv|mov|m4v)(\?.*)?$/i.test(s) ||
            !/^https?:\/\//i.test(s)
        ) {
            return { tipo: "archivo" };
        }

        /* Cualquier otro sitio: se intenta incrustar */
        return { tipo: "iframe", embed: s };
    }

    const videos = lista.map(v => ({ ...v, ...detectarVideo(v.src) }));


    /* =================================================
       DETENER VIDEO ACTUAL
    ================================================= */

    function detenerVideoActual() {

        const video = videoMain.querySelector("video");

        if (video) {

            video.pause();
            video.removeAttribute("src");
            video.load();

        }

        const iframe = videoMain.querySelector("iframe");

        if (iframe) {

            iframe.src = "about:blank";

        }

    }


    /* =================================================
       MOSTRAR UN VIDEO
    ================================================= */

    function mostrarVideo(v, boton) {

        detenerVideoActual();

        videoMain.innerHTML = "";

        videoMain.classList.toggle("es-vertical", !!v.vertical);


        if (v.tipo === "archivo") {

            /* MP4 */

            const elementoVideo = document.createElement("video");

            elementoVideo.id = "mainVideo";
            elementoVideo.controls = true;
            elementoVideo.playsInline = true;
            elementoVideo.preload = "metadata";

            if (v.miniatura) {
                elementoVideo.poster = v.miniatura;
            }

            const source = document.createElement("source");

            source.src = encodeURI(v.src);
            source.type = "video/mp4";

            elementoVideo.appendChild(source);

            videoMain.appendChild(elementoVideo);

            elementoVideo.load();

            const promesa = elementoVideo.play();

            if (promesa !== undefined) {
                promesa.catch(() => {});
            }

        } else {

            /* YOUTUBE, FACEBOOK, TIKTOK, INSTAGRAM, VIMEO, DRIVE... */

            const iframe = document.createElement("iframe");

            iframe.id = "mainYouTube";
            iframe.src = v.embed;
            iframe.title = v.titulo || "Video";

            iframe.setAttribute("frameborder", "0");

            iframe.setAttribute(
                "allow",
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            );

            iframe.setAttribute(
                "referrerpolicy",
                "strict-origin-when-cross-origin"
            );

            iframe.setAttribute("allowfullscreen", "");

            videoMain.appendChild(iframe);

        }


        /* INFORMACIÓN */

        if (videoTitle) videoTitle.textContent = v.titulo || "";
        if (videoCategory) videoCategory.textContent = v.categoria || "";
        if (videoDescription) videoDescription.textContent = v.descripcion || "";


        /* BOTÓN ACTIVO */

        contenedorMiniaturas
            .querySelectorAll(".video-thumb")
            .forEach(btn => btn.classList.toggle("active", btn === boton));

    }


    /* =================================================
       CREAR LAS MINIATURAS
    ================================================= */

    videos.forEach(v => {

        const boton = document.createElement("button");

        boton.className = "video-thumb";
        boton.type = "button";
        boton.setAttribute("aria-label", "Reproducir: " + (v.titulo || "video"));

        const portada = v.miniatura || v.imagen;

        if (portada) {

            const img = document.createElement("img");

            img.src = portada;
            img.alt = "";
            img.loading = "lazy";
            img.decoding = "async";
            img.draggable = false;

            boton.appendChild(img);

        } else if (v.tipo === "archivo") {

            /* Sin portada: se usa un fotograma del propio video */

            const frame = document.createElement("video");

            frame.src = encodeURI(v.src) + "#t=0.5";
            frame.muted = true;
            frame.preload = "metadata";
            frame.playsInline = true;

            boton.appendChild(frame);

        }

        const icono = document.createElement("span");

        icono.innerHTML = '<i class="fa-solid fa-play"></i>';

        boton.appendChild(icono);

        boton.addEventListener("click", () => mostrarVideo(v, boton));

        contenedorMiniaturas.appendChild(boton);

    });

})();
