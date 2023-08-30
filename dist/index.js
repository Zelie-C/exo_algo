"use strict";
/*function getAllDiceCombinations(dices: any[]) {
  const toCombine = new Array(dices.length).fill("").map((_, i) => i)
  let combinations: any[] = []
  let temp: any[] = []
  let slent = Math.pow(2, toCombine.length) - 1

  for (let i = 0; i < slent; i++) {
    temp = []
    for (var j = 0; j < toCombine.length; j++) {
      if (i & Math.pow(2, j)) {
        temp.push(toCombine[j])
      }
    }

    if (temp.length > 0) {
      combinations.push(temp)
    }
  }

  return combinations.map((combi) => {
    const completion = toCombine.filter((index) => combi.indexOf(index) === -1)
    const diceCombi = combi.map((e) => dices[e])
    const diceCompletion = completion.map((e) => dices[e])
    return [diceCombi, diceCompletion]
  })
}

console.log('test fonction', getAllDiceCombinations(["vert", "rouge", "jaune"]))*/
Object.defineProperty(exports, "__esModule", { value: true });
const nomsPossibles = [
    "Amandine",
    "Benoit",
    "Cédric",
    "Dorian",
    "Emilie",
    "Fabien",
    "Géraldine",
    "Hélène",
    "Isabelle",
    "Jérôme",
    "Karine"
];
//const tableauEleves: string[] = new Array(16).map( nomsPossibles.forEach( nom => tableauEleves.push(nom)))
//1. Créez un tableau d'élèves qui contient un nom aléatoire pour chaque élève.
const nbrEleves = 16;
const elevesArray = [];
for (let i = 0; i < nbrEleves; i++) {
    const indexAleatoire = Math.floor(Math.random() * nomsPossibles.length);
    const nomAleatoire = nomsPossibles[indexAleatoire];
    elevesArray.push(nomAleatoire);
}
console.log(elevesArray);
//2. Créez un tableau de notes qui contient une note aléatoire entre 0 et 20 pour chaque élève.
const notesArray = [];
for (let i = 0; i < elevesArray.length; i++) {
    notesArray.push(Math.floor(Math.random() * 21));
}
console.log(notesArray);
//3. Créez une procédure qui affiche le nom de l'élève et sa note.
function quelleNote(eleves, notes) {
    for (let i = 0; i < eleves.length; i++) {
        console.log(`L'élève ${eleves[i]} a eu la note de ${notes[i]}`);
    }
}
quelleNote(elevesArray, notesArray);
//4. Créez une procédure qui affiche un nom d'élève et la note moyenne des élèves qui portent ce prénom.
function calculerMoyenne(prenom) {
    const noteEleves = [];
    for (let i = 0; i < elevesArray.length; i++) {
        if (elevesArray[i] === prenom) {
            noteEleves.push(notesArray[i]);
        }
    }
    if (noteEleves.length === 0) {
        return 0;
    }
    const sommeNotes = noteEleves.reduce((acc, currentValue) => acc + currentValue, 0);
    return sommeNotes / noteEleves.length;
}
function afficherNomEtMoyenne(prenom) {
    const moyenne = calculerMoyenne(prenom);
    let successMessage = `Les élèves s'appelant ${prenom} ont une moyenne de ${moyenne}`;
    let failMessage = `Il n'y a pas d'élève s'appelant ${prenom} dans la classe`;
    if (moyenne != 0) {
        console.log(successMessage);
        return successMessage;
    }
    else {
        console.log(failMessage);
        return failMessage;
    }
}
//5. Créez une fonction qui retourne la note maximale de la classe.
function getNoteMax(tableau) {
    let noteMax = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > noteMax) {
            noteMax = tableau[i];
        }
    }
    return noteMax;
}
getNoteMax(notesArray);
//6. Créez une fonction qui retourne la note minimale de la classe.
function getNoteMin(tableau) {
    let noteMin = 20;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] < noteMin) {
            noteMin = tableau[i];
        }
    }
    return noteMin;
}
getNoteMin(notesArray);
//7. Créez une fonction qui retourne la moyenne de la classe.
function moyenneClasse(tableau) {
    let sommeNotes = tableau.reduce((accumulateur, currentValue) => accumulateur + currentValue, 0);
    let moyenne = sommeNotes / tableau.length;
    return moyenne;
}
moyenneClasse(notesArray);
//8. Créez une fonction qui retourne le nombre d'élèves qui ont la moyenne.
function nbrElevesPlusDeMoyenne(tableau) {
    let bonsEleves = [];
    for (let i = 0; i < elevesArray.length; i++) {
        if (tableau[i] > moyenneClasse(notesArray)) {
            bonsEleves.push(elevesArray[i]);
        }
    }
    let nbrBonsEleves = bonsEleves.length;
    console.log(`${nbrBonsEleves} élèves ont plus que la moyenne`);
    return bonsEleves.length;
}
nbrElevesPlusDeMoyenne(notesArray);
//9. Créez une procédure qui affiche pour chaque note, le nombre d'élèves qui ont cette note.
let elevesMemeNote = [];
for (let i = 0; i < notesArray.length; i++) {
    if (notesArray[i] === elevesArray[i]) {
        elevesMemeNote.push(elevesArray[i]);
        let nbrElevesMemeNote = elevesMemeNote.length;
        console.log(`${nbrElevesMemeNote} élèves ont eu ${notesArray}`);
    }
}
//10. Créez une procédure qui affiche le nom de l'élève qui a la meilleure note.
let noteMaximale = getNoteMax(notesArray);
let prenomEleveNoteMax = "";
for (let i = 0; i < notesArray.length; i++) {
    if (notesArray[i] === noteMaximale) {
        console.log(prenomEleveNoteMax = elevesArray[i]);
    }
}
