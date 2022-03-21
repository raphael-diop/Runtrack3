const tableau = {name: "La Plateforme_", address: "8 rued'hozier", city: "Marseille", nb_staff: "11", 
creation:"2019"}

document.addEventListener("DOMContentLoaded", ()=> { 
    jsonValueKey(tableau);
})

function jsonValueKey(tableau) {
    alert(tableau.name);
    alert(tableau.city);
}
 



