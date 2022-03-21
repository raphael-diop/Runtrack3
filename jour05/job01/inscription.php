<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Inscription</title>
</head>
<body>

    <form action="traitement.php" method="post" id="form">
        <h1>Inscription</h1>
        <input type="text" name="nom" id="nom" placeholder="Nom">
        <input type="text" name="prenom" id="prenom" placeholder="Prenom">
        <input type="email" name="email" id="email" placeholder="email">
        <input type="password" name="password" id="password" placeholder="Password">
        <input type="password" name="password_retype" id="password_retype" placeholder="password_retype">
        <button type="submit" >Envoyer</button>
        <p style="color:red" id="erreur"></p>
    </form>
    
    <script src="script.js"></script>

   
</body>
</html>