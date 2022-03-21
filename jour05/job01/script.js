let btnEnvoyer = document.querySelector("button");

btnEnvoyer.addEventListener("click", function(e) {
    //récupérer les données du formulaires
    var erreur;
    nom = document.querySelector("#nom")
    prenom = document.querySelector("#prenom")
    email = document.querySelector("#email")
    password = document.querySelector("#password")
    password_retype = document.querySelector("#password_retype")

    //Vérification si le formulaire n'est pas vide 
    if (!password_retype.value){
        erreur = "Veuillez renseigner votre password_retype";
    }

    if (!password.value){
        erreur = "Veuillez renseigner votre password";
    }

    if (!email.value){
        erreur = "Veuillez renseigner votre email";
    }

    if (!prenom.value){
        erreur = "Veuillez renseigner votre prenom";
    }
    
    if (!nom.value){
        erreur = "Veuillez renseigner votre nom";
    }

    if(password.value != password_retype.value){
        erreur = "Veuillez rentrer des Passwords indentiques";
    }

    if(erreur){
        e.preventDefault();
        document.querySelector("#erreur").innerHTML = erreur;
        return false;
    }else{
        alert("Formulaire envoyé");
    }




    function storage() {

    }
})

