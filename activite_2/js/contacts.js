/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
var formulaire = ["prénom: Carole", " nom: Lévisse", "\nprénom: Mélodie", " nom: Nelsonne"];

var option = "";

console.log("Bienvenue dans le gestionaire des contacts !")
alert("Bienvenue dans le gestionaire des contacts !")

while (option !== "0"){
    console.log("1: Liste des contact\n2: Ajouté un contact\n0: quitter\n")
    option = prompt("choisisez une option:\n1: Liste des contact\n2: Ajouté un contact\n0: quitter")
    
    if (option === "1") {
        console.log("Voici la liste de tout vos contact:\n" + formulaire);
        alert("Voici la liste de tout vos contact:\n" + formulaire); 
    }
    else if(option === "2") {
        var prenom = prompt("entrer le prénom du nouveau contact:");
        formulaire.push("\nprénom: " + prenom);

        var nom = prompt("entré le nom de votre nouveau contact:");
        formulaire.push(" nom: " + nom);
        console.log("le contact a bien été ajouté");
        alert("le contact a bien été ajouté"); 
    }

}