//barba transitions

function pageTransition(){
  var tl = gsap.timeline();

  tl.to('.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2});
  tl.to('.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1});
}

function contentAnimation(){
  var tl = gsap.timeline();

  tl.from('.lightblue-waves', {duration: .4, translateY: -100, opacity:0});
  tl.from('.cubo-1', {duration: .4, translateY: -100, opacity:0});
  tl.from('.abajo', {duration: .4, translateY: 450, opacity:0});
  tl.from('.yellow-waves', {duration: .4, translateY: 30, opacity:0});
  tl.from('#manifiesto', {duration: .6, translateY: 50, opacity:0});

}

function delay(n){
  n = n || 2000;
  return new Promise(done => {
      setTimeout(() => {
          done();
      }, n);
  });
}

barba.init({
  sync: true,
  transitions : [{
      async leave(data){
          const done = this.async();

          pageTransition();
          await delay(1500);
          done();
      },

      async enter(data){
          contentAnimation();
      },

      async once(data){
          contentAnimation();
      }
  
  }]
})