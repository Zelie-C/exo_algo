function factorielle(n: number){
  let result = 1;
  for(let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}

factorielle(5);

function isPalindrome(maChaine: string) {
  let i: number = 0;
  while(maChaine[i] === maChaine[maChaine.length -1 - i] && i <= maChaine.length/2){
    i++;
  }
  if (maChaine[i] != maChaine[maChaine.length -1 - i]){
    return false;
  } else {
    return true;
  }
}

isPalindrome("elle");


const nomsPossibles: string[] = [
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
]


//1. Créez un tableau d'élèves qui contient un nom aléatoire pour chaque élève.

const nbrEleves: number = 16;
const elevesArray: string[] = [];

for(let i = 0; i < nbrEleves; i++){
  const indexAleatoire = Math.floor(Math.random() * nomsPossibles.length)
  const nomAleatoire = nomsPossibles[indexAleatoire];
  elevesArray.push(nomAleatoire);
};

//2. Créez un tableau de notes qui contient une note aléatoire entre 0 et 20 pour chaque élève.

const notesArray: any[] = [];

for(let i = 0; i < elevesArray.length; i++){
  notesArray.push(Math.floor(Math.random() * 21));
};

//3. Créez une procédure qui affiche le nom de l'élève et sa note.

for(let i = 0; i < elevesArray.length; i++){
  console.log(`${elevesArray[i]} a eu la note de ${notesArray[i]}`);
}

//4. Créez une procédure qui affiche un nom d'élève et la note moyenne des élèves qui portent ce prénom.

function calculerMoyenne(prenom: string){
  const noteEleves = [];
  for(let i = 0; i < elevesArray.length; i++){
    if (elevesArray[i] === prenom){
      noteEleves.push(notesArray[i]);
    }
  }
  if (noteEleves.length === 0) {
    return 0;
  }

  const sommeNotes = noteEleves.reduce((acc, currentValue) => acc + currentValue, 0);
  return sommeNotes/noteEleves.length;

}


function afficherNomEtMoyenne(prenom: string){
  const moyenne = calculerMoyenne(prenom);
  let successMessage: string = `Les élèves s'appelant ${prenom} ont une moyenne de ${moyenne}`;
  let failMessage: string = `Il n'y a pas d'élève s'appelant ${prenom} dans la classe`;
  if (moyenne != 0){
    console.log(successMessage);
    return successMessage;
  } else {
    console.log(failMessage);
    return failMessage;
  }
}
afficherNomEtMoyenne("Machin");

//5. Créez une fonction qui retourne la note maximale de la classe.

function getNoteMax(tableau: number[]){
  let noteMax: number = 0;
  for(let i = 0; i < tableau.length; i++){
    if (tableau[i] > noteMax) {
      noteMax = tableau[i];
    }
  }
  return noteMax;
}

getNoteMax(notesArray);

//6. Créez une fonction qui retourne la note minimale de la classe.

function getNoteMin(tableau: number[]){
  let noteMin: number = 20;
  for(let i = 0; i < tableau.length; i++){
    if (tableau[i] < noteMin){
      noteMin = tableau[i];
    }
  }
  return noteMin;
}

getNoteMin(notesArray);

//7. Créez une fonction qui retourne la moyenne de la classe.

function moyenneClasse(tableau: number[]){
  let sommeNotes = tableau.reduce((accumulateur, currentValue) => accumulateur + currentValue, 0);
  let moyenne = sommeNotes/tableau.length;
  return moyenne;
}

moyenneClasse(notesArray);

//8. Créez une fonction qui retourne le nombre d'élèves qui ont la moyenne.

function nbrElevesPlusDeMoyenne(tableau: number[]) {
  let bonsEleves: string[] = [];
  for(let i = 0; i < elevesArray.length; i++){
    if (tableau[i] > moyenneClasse(notesArray)){
      bonsEleves.push(elevesArray[i]);
    }
  }
  let nbrBonsEleves: number = bonsEleves.length;
  return nbrBonsEleves;
}

nbrElevesPlusDeMoyenne(notesArray);

//9. Créez une procédure qui affiche pour chaque note, le nombre d'élèves qui ont cette note.

for(let i = 0; i <= 20; i++) {
  let elevesMemeNote: string[] = [];
  for (let j = 0; j < notesArray.length; j++){
    if (notesArray[j] === i){
      elevesMemeNote.push(elevesArray[j]);
    }
  }
  let nbrElevesMemeNote = elevesMemeNote.length;
  console.log(`${nbrElevesMemeNote} élèves ont eu la note de ${i}`);
}

//10. Créez une procédure qui affiche le nom de l'élève qui a la meilleure note.

let noteMaximale = getNoteMax(notesArray);
let prenomEleveNoteMax: string = "";
for(let i = 0; i < notesArray.length; i++){
  if (notesArray[i] === noteMaximale){
    console.log(prenomEleveNoteMax = elevesArray[i]);
  }
}
