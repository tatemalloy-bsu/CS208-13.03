window.addEventListener("DOMContentLoaded", function () {
   drawGround();
   drawSnowText();
   drawSnowman();
   drawSnowflakes();
});

function drawGround() {
   const canvas = document.querySelector("canvas");
   const context = canvas.getContext("2d");

   context.fillStyle = "lightgray";
   context.fillRect(0, 0, canvas.width, canvas.height);
   context.fillStyle = "sienna";
   context.fillRect(0, canvas.height - 50, canvas.width, 50);
}

function drawSnowText() {
   const canvas = document.querySelector("canvas");
   const context = canvas.getContext("2d");

   context.font = "80px Verdana";
   context.textAlign = "center";   
   context.textBaseline = "top";     
   context.fillStyle = "blue";
   context.fillText("SNOW", canvas.width / 2, 10);
}

function drawSnowman() {
   const canvas = document.querySelector("canvas");
   const context = canvas.getContext("2d");

   context.fillStyle = "white";

   context.beginPath();
   context.arc(150, 200, 50, 0, Math.PI * 2);
   context.fill();
   context.beginPath();
   context.arc(150, 120, 40, 0, Math.PI * 2);
   context.fill();


   context.beginPath();
   context.arc(150, 60, 25, 0, Math.PI * 2);
   context.fill();
}

function drawSnowflakes() {
   for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * 300);
      const y = Math.floor(Math.random() * 300);
      drawSingleFlake(x, y);
   }
}

function drawSingleFlake(x, y) {
   const canvas = document.querySelector("canvas");
   const context = canvas.getContext("2d");
   const flakeSize = 6;

   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   context.lineTo(x, y + flakeSize);
   context.lineTo(x - flakeSize / 2, y + flakeSize / 2);
   context.fillStyle = "#eee";
   context.fill();
}
