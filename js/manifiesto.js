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

$(window).on('load', function(){
  $('#loader').fadeOut();
});

$("#navegar-grafico").on("click", function(){
  $("#avanzar-modal").toggle();
  $(".modal-backdrop").hide();

  $("#rosa").addClass("transicion");

  setTimeout(function(){ 
      $("#amarillo").addClass("transicion");
  }, 500);

  setTimeout(function(){
    $("#celeste").addClass("transicion-final");
    $("#celeste").removeClass("top-100vh");
  }, 500);
  setTimeout(function(){ 
    window.location.href = 'grafico.html';
  }, 3000);
  
});