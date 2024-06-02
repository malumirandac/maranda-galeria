function mostrarModal(event){
    /* evento se propaga a las diferentes capas del dom, burbujeo */
    /* preventDefault hara que el evento no se siga propagando, burbujeando*/
    event.preventDefault();
    const img = event.target;
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    /* indicamos que, a parte de mostrar el modal, indique el texto indicado en el alt de la imagen*/
    const texto = document.getElementById('textoimg');
    texto.textContent = img.alt;

    /* obtener imagen */
    const imgModal = document.getElementById('imgModal');
    /* indicamos que el src y el alt sea el que se indica en cada imagen */
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    myModal.show();
}

/* todas las funciones que escuchen eventos por defecto deben recibir un parametro evento 
el cual recibe informacion del evento que dispara la llamada a la funcion*/

function cerrarModal(event){
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.hide();
}

function borrarContenedorImagen(event){
    const boton = event.target;
    const contenedorImg = boton.closest('.contenedor-img')
    if (contenedorImg){
        contenedorImg.remove();  
    }
}

/* para seleccionar clase de imagenes */
function asignarComportamiento(event){
    const artworks = document.querySelectorAll(".artwork");

    /* recorrer elementos y cuando se haga click se muestre el modal*/
    artworks.forEach(artwork =>{
        artwork.addEventListener('click', mostrarModal);
    });

    const closeButton = document.getElementById("closeBtn");
    closeButton.addEventListener('click', cerrarModal);


    const eliminarContenedorImagen = document.querySelectorAll(".borrarBtn");
    eliminarContenedorImagen.forEach(borrarBtn =>{
        borrarBtn.addEventListener('click', borrarContenedorImagen);
    })

}




document.addEventListener('DOMContentLoaded', asignarComportamiento);