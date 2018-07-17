var contact = ["Carole Lévisse", "Mélodie Nelsonne"];
var option = "";

alert("Bienvenue dans le gestionaire des contacts !");

while (option !== "0"){
    option = prompt("choisisez une option:\n1: Liste des contact\n2: Ajouté un contact\n0: quitter", "Entrer votre réponse ici");

    if (option < "0" || option > "2")
        alert("Cette option n'éxiste pas!");

    else if (option === "1")
        alert("Voici la liste de tout vos contact:\n" + contact.join("\n"));

    else if(option === "2") {
        var prenom = prompt("entrer le prénom du nouveau contact:", "prénom");
        var nom = prompt("entrer le nom de votre nouveau contact:", "nom");

        contact.push( prenom + " " + nom);

        alert("le contact a bien été ajouté");
    }
}