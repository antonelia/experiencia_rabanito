// Funcion imagen antes y despues
// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
//let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
//document.querySelector('.scroller').addEventListener('mousedown',function(){
  //active = true;
  // Add our scrolling class so the scroller has full opacity while active
  //document.querySelector('.scroller').classList.add('scrolling');
//});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
//document.body.addEventListener('mouseup',function(){
  //active = false;
  //document.querySelector('.scroller').classList.remove('scrolling');
//});
//document.body.addEventListener('mouseleave',function(){
  //active = false;
  //document.querySelector('.scroller').classList.remove('scrolling');
//});

// Let's figure out where their mouse is at
//document.body.addEventListener('mousemove',function(e){
  //if (!active) return;
  // Their mouse is here...
  //let x = e.pageX;
  // but we want it relative to our wrapper
  //x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  //scrollIt(x);
//});

// Let's use this function
//function scrollIt(x){
    //let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
    //document.querySelector('.after').style.width = transform+"px";
    //document.querySelector('.scroller').style.left = transform-25+"px";
//}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
//scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
//document.querySelector('.scroller').addEventListener('touchstart',function(){
  //active = true;
  //document.querySelector('.scroller').classList.add('scrolling');
//});
//document.body.addEventListener('touchend',function(){
  //active = false;
  //document.querySelector('.scroller').classList.remove('scrolling');
//});
//document.body.addEventListener('touchcancel',function(){
  //active = false;
  //document.querySelector('.scroller').classList.remove('scrolling');
//});

/*Funcion hide and show*/
var boxOne = false;
var boxTwo = false;
var boxThree = false;
var boxFour = false;
var boxFive= false;

$(document).ready(function () {


$('#box-one').mouseenter(function () {
    boxOne = true;
  
    if(boxOne==true && boxTwo==true && boxThree==true && boxFour==true && boxFive==true){
      // Delay for 5 seconds
      setTimeout(function () {
        // Fade out the body with a duration of 1 second   
        $('div').fadeOut(1000, function () {
          // Navigate to the new page after fade out
          window.location.href = 'gravity.html';
        });
      }, 1000);
    }
});

$('#box-two').mouseenter(function () {
    boxTwo = true;
  
    if(boxOne==true && boxTwo==true && boxThree==true && boxFour==true && boxFive==true){
      setTimeout(function () {
        $('div').fadeOut(1000, function () {
          window.location.href = 'gravity.html';
        });
      }, 1000);
    }
});

$('#box-three').mouseenter(function () {
  boxThree = true;

  if(boxOne==true && boxTwo==true && boxThree==true && boxFour==true && boxFive==true){
    setTimeout(function () {
      $('div').fadeOut(1000, function () {
          window.location.href = 'gravity.html';
      });
    }, 1000);
  }
});

$('#box-four').mouseenter(function () {
  boxFour = true;

  if(boxOne==true && boxTwo==true && boxThree==true && boxFour==true && boxFive==true){
    setTimeout(function () {
      $('div').fadeOut(1000, function () {
        window.location.href = 'gravity.html';
      });
    }, 1000);
  }
});

$('#box-five').mouseenter(function () {
  boxFive = true;

  if(boxOne==true && boxTwo==true && boxThree==true && boxFour==true && boxFive==true){
    setTimeout(function () {
      $('div').fadeOut(1000, function () {
        window.location.href = 'gravity.html';
      });
    }, 1000);
  }
});

});

//Gallery

$(document).ready(function () {
  $('#box-one').click(function () {
    $('#modal-one').modal('show');
  });
});

$(document).ready(function () {
  $('#box-two').click(function () {
    $('#modal-two').modal('show');
  });
});

$(document).ready(function () {
  $('#box-three').click(function () {
    $('#modal-three').modal('show');
  });
});

$(document).ready(function () {
  $('#box-four').click(function () {
    $('#modal-four').modal('show');
  });
});

$(document).ready(function () {
  $('#box-five').click(function () {
    $('#modal-five').modal('show');
  });
});
