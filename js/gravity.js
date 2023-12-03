// Show the next-section after a delay (in milliseconds)
$(window).on('load', function(){
    
             $('#loader').fadeOut();
      
});
setTimeout(function () {
    document.getElementById('next-section').classList.remove('d-none');
}, 7000); // 5000 milliseconds = 5 seconds