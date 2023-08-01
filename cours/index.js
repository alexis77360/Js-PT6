"use strict";
/* //! Canva 

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

window.addEventListener('load', draw); */
//! Fin Canva 

//! Try Catch
/* 
try {
    console.log('Je suis executé');
} catch (e) {
    console.log("Il y a eu une erreur");
} finally {
    console.log('Je suis toujours executé');
}
throw new Error("Voici une erreur");


function isNumber(num) {
    if (isNaN(num)) {
        throw new Error("Ce n'est pas un nombre");
    } else {
        console.log("C'est un nombre");
    }
} */


//! Fin Try Catch

//! Strict mode

//? Le mode strict permet de rendre le code plus strict
//? Il permet de ne pas utiliser des variables non déclarées
//? Il permet de ne pas utiliser des mots réservés
//? Il permet de ne pas utiliser des variables en double
//? Il permet de ne pas utiliser des fonctions en double
//? Il permet de ne pas utiliser des paramètres en double

/* voiture = "BMW";
console.log(voiture);
 */

//! Fin Strict mode

//! Bundler pour compiler le code exemple : Webpack ou Parcel
