//$("#manifiesto").hide();

// Creo variables para guardar el valor numerico que luego se usa para calcular cuanto mover el boton
var moverX = 0;
var moverY = 0; 


function moverBotonVideo() {
  // Obtener el ancho de la pantalla
  const anchoPantalla = window.innerWidth;

  // Verificar el ancho y asignar un valor para que segun el tamaño el boton se mueva mas o menos
  if (anchoPantalla <= 1366) {
    moverX = 30;
    moverY = 50; 
  } else {
    moverX = 50;
    moverY = 90; 
  }
}

// Llamar a la función cuando se carga la página o se redimensiona la ventana
window.addEventListener('load', moverBotonVideo);
window.addEventListener('resize', moverBotonVideo);

document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#player', {
      title: 'Example Title',
      fullscreen:{ enabled: true}
  }); 
 
  player.on('ended', function(){
      setTimeout(function() {
          $('#avanzar-modal').modal('toggle');
      }, 1500);    
  });
});

const button = document.getElementById('ver-manifiesto');
let moves = 0; // número de movimientos realizados

button.addEventListener('mouseover', function () {
  if (moves < 3) { // si se han realizado menos de 3 movimientos
    //para cambiar la distancia que se desplaza el boton ajustar el valor despues de *
    button.style.left = `${Math.ceil(Math.random() * moverX)}%`;
    button.style.top = `${Math.ceil(Math.random() * moverY)}%`;
    moves++; // aumenta el número de movimientos realizados
  }
});

button.addEventListener('click', function () {
    $("#manifiesto-intro").hide();
    $("#manifiesto").show();
});