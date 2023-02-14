var audio = new Audio('Tum Se Hi 128 Kbps.mp3');
var x = new Audio('t.mp3');
document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector("#message");
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
  
    message.textContent = "Will you be mine forever?";
  
    yesButton.addEventListener("click", function() {
      const ele = document.getElementById('done');
      ele.style.backgroundImage = "url('giphy.webp')";
      const para = document.getElementById('message');
      para.innerHTML = "You are mine Forever";
      para.style.color = '#fff';
      x.pause();
      audio.play();
      alert("Congratulations! you are totally mine for today!!"   );
    });
  
    noButton.addEventListener("click", function() {
        audio.pause();
        x.play();
      alert("RHEGI TO FIRBHI MERI HI");
    });
  });
  
