$(window).on('load', function(){
    // setTimeout(function() {
    //     $('#loader').fadeOut();
    // }, 2000);
  
    // setTimeout(function() {
    //   $('#cookies-section').modal('show');
    // }, 4000);
    $('.white-circle').hide();

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
        'transform', 'scale(' + 80 + ')'
    );
    setTimeout(function() {
        $('#intro').hide();
        $('.white-circle').fadeOut();
    
    }, 1000);
  });