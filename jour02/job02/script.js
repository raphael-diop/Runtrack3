function showHide(id) {
    var article = document.getElementById(id);
     if(article.style.display == "none") {
     article.style.display = "flex";
 } else {
     article.style.display = "none";
    }
     }