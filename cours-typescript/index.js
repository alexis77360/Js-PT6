"use strict";
//? Compiler le fichier index.ts en index.js avec la commande tsc index.ts
//? tsc --init pour créer le fichier tsconfig.json
//? tsc -w pour compiler automatiquement le fichier index.ts en index.js
let num1 = 10;
let num2;
//! union type soit number soit string
let num3;
//! Tableau
let arr = ["chien", "rat", "poisson"];
let tab = []; //? tableau de string
let tableau = []; //? tableau de number ou de boolean
let toto = {
    id: 0,
    nom: "toto",
    age: 20,
};
//! Les classes
class Singer {
    constructor(id, nom, alive) {
        this.id = id;
        this.nom = nom;
        this.alive = alive;
    }
}
let johnny = new Singer(0, "Johnny");
console.log(johnny);
//! Les fonctions
const sayMyName = (name) => {
    return `Hello ${name}`;
};
console.log(sayMyName("toto"));
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`Age du capitaine : ${age} ans et taille du capitaine : ${size} cm`);
    }
    else {
        console.log(`Age du capitaine : ${age} ans`);
    }
};
ageDuCapitaine(10);
//! Enum & Tuples
//? Tuple signifie que l'on peut avoir un tableau avec des types différents
//? Enum permet de définir des constantes ici ADMIN = 0, USER = 1, VISITOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["VISITOR"] = 2] = "VISITOR";
})(Role || (Role = {}));
;
const user1 = {
    name: "toto",
    attributs: ["toto", 10],
    role: Role.ADMIN,
};
console.log(user1.role);
