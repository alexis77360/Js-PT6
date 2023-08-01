const canvas = document.getElementById('art');
const ctx = canvas.getContext("2d");

function getMousePos(e){
    //? obtenir la position de la souris dans le canvas
    const rect = canvas.getBoundingClientRect();

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}

//? Dessine en fonction de la position de la souris
function mouseMove(e){
    const mousePos = getMousePos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
}


canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const mousePos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);

    //? dessiner une ligne
    canvas.addEventListener('mousemove', mouseMove)

    //? arrêter de dessiner
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', mouseMove)
    })
});

//? Effacer le canvas
reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})






