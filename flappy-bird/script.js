const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = './media/flappy-bird-set.png';

//? Réglage des paramètres
let gamePlaying = false;
const gravity = .5;
const speed = 4.2;
const size = [51, 36];
const jump = -11.5;

const cTenth = (canvas.width / 10);

let index = 0,
    bestScore = 0,
    currentScore,
    pipe = [],
    flight,
    flyHeight;

const render = () => {

    index++;

    //? Background

    ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        -((index * (speed / 2)) % canvas.width) + canvas.width,
        0,
        canvas.width,
        canvas.height
    );

    //? Deuxieme background pour le défilement infini
    ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        -((index * (speed / 2)) % canvas.width),
        0,
        canvas.width,
        canvas.height
    );



    







    //? Les 4 premiers paramètres définissent la zone de l'image à prendre (source) et les 4 derniers définissent la zone de l'image à dessiner (destination)
    ctx.drawImage(
        img,
        432,
        Math.floor((index % 9) / 3) * size[1],
        //! 432 = position de l'image dans le fichier, 9 = nombre d'images, 3 = nombre d'images par ligne, size[1] = hauteur de l'image

        ...size, //! ...size = 51, 36 soit 2 paramètres
        ((canvas.width / 2) - (size[0] / 2)), //! centrer l'oiseau
        flyHeight =(canvas.height / 2) - (size[1] / 2), //! centrer l'oiseau sur l'axe Y
        ...size
    );

    //? Appel en boucle de la fonction render
    window.requestAnimationFrame(render);
}


//? Appel de la fonction render au chargement de l'image
img.onload = render;