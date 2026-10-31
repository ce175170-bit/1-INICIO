/* Cuántos comunicados se ven siempre */
window.COMUNICADOS_CONFIG = {
    visibles: 3
};

window.COMUNICADOS = [

    {
        etiqueta: "INVITACION",
        titulo: "DEMOSTRACIÓN DE BANDAS",
        fecha: "31 de octubre 2026",
        imagen: "Comunicados/comunicado5.jpg",
        descripcion: "¡Todos a apoyar a nuestro colegio J.F.B.! Acompaña a nuestras bandas en la demostración y demuestra tu orgullo bohorquerista. 🎺🥁"
    },   
    
    {
        etiqueta: "COMUNICADO",
        titulo: "Diploma de Bachiller en formato digital",
        fecha: "3 de Octubre de 2026",
        imagen: "Comunicados/comunicado6.jpg",
        descripcion: "El Ministerio de Educación informa que los bachilleres podrán acceder a su Diploma de Bachiller en formato digital. El portal oficial estará habilitado desde diciembre de 2026."
    },
       
    {
        etiqueta: "COMUNICADO",
        titulo: "Participación de la procesión",
        fecha: "19 de octubre de 2026",
        imagen: "Comunicados/comunicado.png",
        descripcion: "El colegio J.F.B. comunica a todos los estudiantes deben participar de la procesión."
    },

    {
        etiqueta: "COMUNICADO",
        titulo: "Bono Juancito Pinto",
        fecha: "02 de octubre de 2026",
        imagen: "Comunicados/comunicado1.png",
        descripcion: "Comunicado del Ministerio de Educacion"
    }
];

/* ============================================================
   LISTA DE COMUNICADOS  (el ÚNICO archivo que debes editar)

   - Los primeros comunicados de la lista (por defecto 3) son los
     ACTUALES: siempre se ven en la página.
   - Los demás son ANTERIORES: se ven al pulsar "Más comunicados".

   PARA AGREGAR UNO NUEVO:
     copia un bloque { ... } completo y pégalo AL INICIO de la lista,
     con una coma entre bloque y bloque. El que quede en 4° lugar
     pasa solo a "anteriores".
   PARA QUITAR UNO: borra el bloque completo (con su coma).

   etiqueta    → palabra pequeña de arriba (COMUNICADO, PROGRAMA...)
   titulo      → título del comunicado
   fecha       → fecha que se muestra
   imagen      → ruta de la imagen, por ejemplo "Comunicados/foto.png"
   descripcion → texto corto debajo de la imagen

   Si un texto lleva comillas dentro, usa comillas simples: 'así'.
   ============================================================ */
