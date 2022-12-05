/* Función Tooltip a íconos redes sociales */

$(function (){
    $(`[data-bs-toggle="tooltip"]`).tooltip();
})


/* Condición solicitada, cambio color navbar en desplazamiento hacia parte inferior página */

$(document).scroll(function () {
    const y = $("html").scrollTop();
    y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");

});