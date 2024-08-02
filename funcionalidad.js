// script.js
document.addEventListener('DOMContentLoaded', () => {
  const carruselImagenes = document.querySelector('.carrusel-imagenes');
  const imagenes = carruselImagenes.querySelectorAll('img');
  let indiceActual = 0;
  let intervalo;

  function cambiarImagen() {
      indiceActual = (indiceActual + 1) % imagenes.length;
      carruselImagenes.style.transform = `translateX(-${indiceActual * 100}%)`;
  }

  function iniciarCarrusel() {
      intervalo = setInterval(cambiarImagen, 3000);
  }

  function manejarZoom(evento) {
      const zoomContenedor = document.createElement('div');
      zoomContenedor.classList.add('zoom');

      const imagenZoom = evento.target.cloneNode();
      zoomContenedor.appendChild(imagenZoom);

      const cerrarZoom = document.createElement('span');
      cerrarZoom.classList.add('cerrar');
      cerrarZoom.textContent = '×';
      cerrarZoom.addEventListener('click', () => {
          zoomContenedor.remove();
          iniciarCarrusel();
      });
      zoomContenedor.appendChild(cerrarZoom);

      document.body.appendChild(zoomContenedor);
      clearInterval(intervalo);
  }

  imagenes.forEach(imagen => {
      imagen.addEventListener('click', manejarZoom);
  });

  iniciarCarrusel();

  const videoFondo = document.getElementById('video-fondo');

  // Deshabilitar "Picture in Picture"
  videoFondo.addEventListener('enterpictureinpicture', function(event) {
      event.preventDefault();
      alert('La función "Picture in Picture" está deshabilitada para este video.');
  });

  // Deshabilitar arrastrar y soltar
  videoFondo.ondragstart = function() {
      return false;
  };

  // Obtener el modal
  var modal = document.getElementById("myModal");

  // Obtener el botón de cierre
  var span = document.getElementsByClassName("close")[0];

  // Mostrar el modal cuando la página se cargue
  window.onload = function() {
      modal.style.display = "block";
  }

  // Cerrar el modal cuando se hace clic en el botón de cierre
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Ajustar el carrusel al cambiar el tamaño de la ventana
  window.addEventListener('resize', () => {
      carruselImagenes.style.transform = `translateX(-${indiceActual * 100}%)`;
  });
});


function toggleMenu() {
  var menu = document.querySelector('.menu-desplegable');
  menu.style.left = (menu.style.left === '0px') ? '-200px' : '0px';
}
