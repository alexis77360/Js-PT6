let item;

//? Quand j'attrape un élément
document.addEventListener("dragstart", (e) => {
    item = e.target;
});

//? Quand je le bouge
document.addEventListener("dragover", (e) => {
    e.preventDefault();
});

//? Quand je le lache
document.addEventListener("drop", (e) => {
    if(e.target.getAttribute('data-draggable') === 'target'){
        e.preventDefault();
        e.target.appendChild(item);
    }
});

//! Pensez a vider la variable item quand on lache l'élément
document.addEventListener("dragend", (e) => {
    item = null;
});
