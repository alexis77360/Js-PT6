//? Compiler le fichier index.ts en index.js avec la commande tsc index.ts


//? tsc --init pour créer le fichier tsconfig.json
//? tsc -w pour compiler automatiquement le fichier index.ts en index.js


let num1 = 10;
let num2:string;

//! union type soit number soit string
let num3:number|string;

//! Tableau
let arr = ["chien", "rat", "poisson"]
let tab : string[] = []; //? tableau de string
let tableau: (number | boolean)[] = []; //? tableau de number ou de boolean

//! Objet
//? on doit définir les propriétés de l'objet et leur type dans une interface
interface joueur {
    id : number,
    nom: string,
    age?: number, //? Le ? signifie que la propriété est optionnelle ( pas déclaré dans l'objet toto)
}


let toto:joueur = {
    id: 0,
    nom: "toto",
    age: 20,
}


//! Les classes

class Singer {
    id : number;
    nom: string;
    alive?: boolean; //! propriété optionnelle

    constructor(id:number, nom:string, alive?:boolean){
        this.id = id;
        this.nom = nom;
        this.alive = alive;
    }
}

let johnny = new Singer(0, "Johnny");

console.log(johnny);

//! Les fonctions

const sayMyName = (name:string):string => {
    return `Hello ${name}`;
}

console.log(sayMyName("toto"));

const ageDuCapitaine = (age:number | string, size?:number ) => {
    if(size){
    console.log(`Age du capitaine : ${age} ans et taille du capitaine : ${size} cm` );
    } else {
        console.log(`Age du capitaine : ${age} ans`);
    }
    
}

ageDuCapitaine(10);


//! Enum & Tuples
//? Tuple signifie que l'on peut avoir un tableau avec des types différents
//? Enum permet de définir des constantes ici ADMIN = 0, USER = 1, VISITOR = 2

enum Role {ADMIN, USER, VISITOR};


interface User {
    name: string,
    attributs: [string, number], //! Tuple
    role: Role,
}

const user1:User = {
    name: "toto",
    attributs: ["toto", 10],
    role: Role.ADMIN,
}

console.log(user1.role);

