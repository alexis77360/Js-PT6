const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = './media/flappy-bird-set.png';

//? Réglage des paramètres
let gamePlaying = false;
const gravity = 0.3;
const speed = 1.5;
const size = [51, 36];
const jump = -8.5;
const cTenth = (canvas.width / 10);

//? Réglage des potos
const pipeWidth = 78;
const pipeGap = 270;

//? Réglage des positions des potos
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;




let index = 0,
    bestScore = 0,
    currentScore,
    pipe = [],
    flight,
    flyHeight;

//? Fonction de d'initalisation du jeu
const setup = () => {
    currentScore = 0;
    flight = jump;
    flyHeight = (canvas.height / 2) - (size[1] / 2);

    //? Création des potos (3 potos) et positionnement des potos
    pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);

}

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

    if (gamePlaying) {
        ctx.drawImage(
            img,
            432,
            Math.floor((index % 9) / 3) * size[1],
            ...size,
            cTenth, //?Axe X
            flyHeight, //?Axe Y
            ...size);
        flight += gravity;
        flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]); //? Math.min = pour que l'oiseau ne sorte pas du canvas




    }
    else {
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

    //? Pour écrire du texte (texte, position X, position Y)
    ctx.fillText(`Meilleur score : ${bestScore}`, 55, 245);
    ctx.fillText(`Cliquer pour jouer !`, 48, 535);
    ctx.font = "bold 30px courier";

    }


    //? Affichage des poteaux

    if (gamePlaying) {
        pipes.map(pipe => {
            pipe[0] -= speed;

            //? Poteau du haut
            ctx.drawImage(
                img,
                432,
                588 - pipe[1],
                pipeWidth,
                pipe[1],
                pipe[0],
                0,
                pipeWidth,
                pipe[1]
            );
            
            //? Poteau du bas
            ctx.drawImage(
                img,
                432 + pipeWidth,
                108,
                pipeWidth,
                canvas.height - pipe[1] + pipeGap,
                pipe[0],
                pipe[1] + pipeGap,
                pipeWidth,
                canvas.height - pipe[1] + pipeGap
            );

            if(pipe[0] <= -pipeWidth) {
                currentScore++;
                bestScore = Math.max(bestScore, currentScore);

                //? Supprimer le poteau
                pipes = [...pipes.slice(1), [pipes[pipes.length-1][0] + pipeGap + pipeWidth, pipeLoc()]];
            }

            //? Si l'oiseau touche un poteau
            if([
                pipe[0] <= cTenth + size[0], //? Poteau de gauche
                pipe[0] + pipeWidth >= cTenth, //? Poteau de droite
                pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1] //? Poteau du haut et du bas
            ].every(elem => elem)) {
                gamePlaying = false;
                setup();
            }

        })

    }

    //? affiche le score

    document.getElementById('bestScore').innerHTML = `Meilleur : ${bestScore}`;
    document.getElementById('currentScore').innerHTML = `Actuel : ${currentScore}`;


    //? Appel en boucle de la fonction render
    window.requestAnimationFrame(render);
}
setup();


//? Appel de la fonction render au chargement de l'image
img.onload = render;

document.addEventListener('click', () => gamePlaying = true);
//? Ajoute le vol de l'oiseau

//? Si on appuie sur espace, l'oiseau s'envole
window.addEventListener("keydown", (e) => {
    if (e.code === "Space") flight = jump;
}); 

window.onclick = () => flight = jump;

