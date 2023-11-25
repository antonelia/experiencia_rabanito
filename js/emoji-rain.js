var msg = "";
function generateAnimalEmojis() {
  msg = "gatitos";
  const emojis = ['🐱', '🐱', '🐱', '🐱'];
  generateEmojiRain(emojis);
}

function generateCookiesEmojis() {
  msg = "cookies";
  const emojis = ["🍪", "🍪", "🍪", "🍪"];
  generateEmojiRain(emojis);

}
$( document ).ready(function() {
  
});

function generateEmojiRain(emojis) {
  // Código que genera la lluvia de emojis
  $("#cookies-section").modal('toggle');
  const emojiRainContainer = document.createElement("div");
  document.body.appendChild(emojiRainContainer);
  let count = 0;
  const intervalId = setInterval(() => {
    if (count >= 60) {
      clearInterval(intervalId);
      emojiRainContainer.innerHTML = "";
      if( msg == 'gatitos'){
        $('#gatitos-modal').modal('show');
        console.log("gatitos");
      }else{
        $('#cookies-modal').modal('show');
        console.log("cookies");
      }

    } else {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      const emojiSpan = document.createElement("span");
      emojiSpan.innerText = randomEmoji;
      emojiSpan.style.fontSize = "30px";
      emojiSpan.style.position = "absolute";
      emojiSpan.style.left = Math.random() * window.innerWidth + "px";
      emojiSpan.style.top = -Math.random() * window.innerHeight + "px";
      emojiSpan.style.animation = "emoji-fall 2s linear";
      emojiRainContainer.appendChild(emojiSpan);
      count++;
    }
  }, 50);

  //Esta linea devuelve la posibilidad de scrollear el sitio luego de que se ejecutaron las funciones de la lluvia de emojis y se mostraron los modales con los mensajes
  document.body.style.overflow = "auto";

}

function pageRedirect() {
  window.location.href = 'nosotras.html';
}

function avanzarPaginaNosotrasCookies(){
  $('#cookies-modal').modal('toggle');
  pageRedirect();
}
function avanzarPaginaNosotrasGatitos(){
  $('#gatitos-modal').modal('toggle');
  pageRedirect();
}

const animalsButton = document.getElementById('no-accept-cookies');
animalsButton.addEventListener('click', generateAnimalEmojis);

const fruitsButton = document.getElementById('accept-cookies');
fruitsButton.addEventListener('click', generateCookiesEmojis);

const continuarCookiesButton = document.getElementById('continuar-cookies');
continuarCookiesButton.addEventListener('click', avanzarPaginaNosotrasCookies);

const continuarGatitosButton = document.getElementById('continuar-gatitos');
continuarGatitosButton.addEventListener('click', avanzarPaginaNosotrasGatitos);
