//? Canva 

function draw() {

const canvas = document.querySelector('canvas');
//? 2D
const ctx = canvas.getContext('2d');

//? fillStyle = color
ctx.fillStyle = 'red';
//? fillRect(x, y, width, height)
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'blue';
ctx.fillRect(100, 10, 50, 50);

ctx.fillStyle = 'green';
ctx.fillRect(100, 100, 40, 80);

//? effacer un rectangle
ctx.clearRect(20, 20, 40, 40);

//? strokeRect(x, y, width, height)
ctx.strokeStyle = 'orange';
ctx.strokeRect(125, 75, 50, 50);



//? Démarre un chemin
ctx.beginPath();
//? moveTo(x, y)
ctx.moveTo(100, 100);
//? lineTo(x, y)
ctx.lineTo(200, 100);
ctx.lineTo(200, 150);
//? Ferme le chemin
ctx.closePath();
//? Dessine le chemin
ctx.fill();

}

window.addEventListener('load', draw);
