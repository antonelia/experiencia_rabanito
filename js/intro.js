$(window).on('load', function(){
  
    $('.white-circle').hide();
    $(".section1").hide();

     setTimeout(function() {
        $('.linea-1').removeClass("inicio-animacion");
         $('.linea-1').addClass("empezar-animacion");
     }, 1000);

     setTimeout(function() {
        $('.linea-1').fadeOut();
     }, 5000);

     setTimeout(function() {
        $('.linea-2').removeClass("inicio-animacion");
        $('.linea-2').addClass("empezar-animacion");
    }, 6000);

    setTimeout(function() {
        $('.linea-2').fadeOut();
     }, 10000);

    setTimeout(function() {
        $('.linea-3').removeClass("inicio-animacion");
        $('.linea-3').addClass("empezar-animacion");
    }, 11000);

    setTimeout(function() {
        $('.white-circle').fadeIn();

    }, 15000);
    
});

$('.white-circle').on( "click", function() {
  $('.white-circle').css(
      'transform', 'scale(' + 90 + ')'
  );
  setTimeout(function() {
      $('#intro').hide();
      $('.white-circle').fadeOut();
      $("#section1").show();
      $("#titulo-hola").addClass('fadeInUp');
      $("#titulo-somos").addClass('fadeInUp');
  
  }, 1000);

  setTimeout(function() {
      $('#cookies-section').modal('show');
  }, 6000);
});
