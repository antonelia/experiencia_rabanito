 //Funcion imagen antes y despues
 //I hope this over-commenting helps. Let's do this!
 //Let's use the 'active' variable to let us know when we're using it
let active = false;

 //First we'll have to set up our event listeners
 //We want to watch for clicks on our scroller
document.querySelector('.scroller').addEventListener('mousedown',function(){
  active = true;
   //Add our scrolling class so the scroller has full opacity while active
  document.querySelector('.scroller').classList.add('scrolling');
});
 //We also want to watch the body for changes to the state,
 //like moving around and releasing the click
 //so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

 //Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  //Their mouse is here...
  let x = e.pageX;
   //but we want it relative to our wrapper
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
   //Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
//scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector('.scroller').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

/*Funcion hide and show*/
var boxOne = false;
var boxTwo = false;
var boxThree = false;
var boxFour = false;
var boxFive= false;

$(window).on('load', function(){
  $("#celeste").addClass("transicion-celeste");
  $("#celeste").removeClass("top-0vh");
  $("#celeste").addClass("top-100vh");

  setTimeout(function(){ 
      $("#amarillo").addClass("transicion");
  }, 0);

  setTimeout(function(){
    $("#rosa").addClass("transicion");
  }, 500);
});

//Gallery
$('#box-one').click(function () {
  $('#modal-one').modal('show');
});

$('#box-two').click(function () {
  $('#modal-two').modal('show');
});

$('#box-three').click(function () {
  $('#modal-three').modal('show');
});

$('#close-modal-one').click(function () {
  $('#modal-one').modal('toggle');
  boxOne = true;
  
    if(boxOne==true && boxTwo==true && boxThree==true){
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

$('#close-modal-two').click(function () {
  $('#modal-two').modal('toggle');
  boxTwo = true;
  
    if(boxOne==true && boxTwo==true && boxThree==true){
      setTimeout(function () {
        $('div').fadeOut(1000, function () {
          window.location.href = 'gravity.html';
        });
      }, 1000);
    }
});
$('#close-modal-three').click(function () {
  $('#modal-three').modal('toggle');
  boxThree = true;

  if(boxOne==true && boxTwo==true && boxThree==true){
    setTimeout(function () {
      $('div').fadeOut(1000, function () {
          window.location.href = 'gravity.html';
      });
    }, 1000);
  }
});

//grilla


document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('sortable-container');
  var columns = Array.from(container.children);

  columns.forEach(function (column, index) {
      new Sortable(column, {
          group: 'column',
          animation: 150,
          handle: '.sortable-item',
          onStart(evt) {
              // Check if the column has more than 2 items
              if (evt.from.children.length > 2) {
                  // Cache the last item before removal
                  evt.from.lastItem = evt.from.children[2];
              }
          },
          onEnd(evt) {
              // Check if the item was moved to another column
              if (evt.to !== evt.from) {
                  // Check if the target column has more than 2 items
                  if (evt.to.children.length > 2) {
                      // Find the column with only one item
                      var otherColumn = columns.find(col => col.children.length === 1);
                      // Move the last item from the target column to the column with one item
                      otherColumn.appendChild(evt.to.children[2]);
                  }
              }

              // Check if the source column had a cached item
              if (evt.from.lastItem) {
                  // Add the cached item back to the source column
                  evt.from.appendChild(evt.from.lastItem);
                  delete evt.from.lastItem;
              }
          }
      });
  });

  // Initialize the rearrangeable library for automatic rearrangement
  new Sortable(container, {
      force: true,
      acceptFrom: '.sortable-column',
  });
});