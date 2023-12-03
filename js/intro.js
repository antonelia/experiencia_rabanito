gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
gsap.set('.scrollDist', {width:'100%', height:'200%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)

$('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)


$(window).on('load', function(){
    $('#arrow').hide();
    setTimeout(function() {
          $("#arrow").fadeIn();
    }, 3000);
});

window.addEventListener('load', function() {
    $(".cubo-abierto").hide();
    // Obtén todos los textos dentro de la clase .main
    const texts = document.querySelectorAll('.main text');
  
    // Configura una animación para cada texto usando GSAP
    texts.forEach((text, index) => {
        gsap.from(text, {
            opacity: 0,          // Comienza con el texto invisible
            y: 50,               // Desplaza el texto hacia abajo
            duration: 1,         // Duración de la animación (ajusta según tu preferencia)
            delay: index * 0.3,  // Añade un retraso progresivo para cada texto (ajustable)
            ease: 'power4.out'   // Tipo de animación (puedes probar diferentes tipos)
        });
    });
});

$("#descubrir-btn").on( "mouseenter", function() {
    $(".cubo-abierto").fadeIn();
});
$("#descubrir-btn").on( "mouseleave", function() {
    $(".cubo-abierto").fadeOut();
});

$("#descubrir-btn").on( "click", function() {
    window.location.href = 'manifiesto.html';
});
