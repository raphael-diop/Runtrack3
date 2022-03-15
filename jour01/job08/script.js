function sommenombrespremiers(num1,num2){

    var nbDiv = 0;// le nombre de diviseur

    for (j = 1; j <= i; $j++) {
        if (num1 % $j == 0) {
            nbDiv++;//conteur de diviseur
            console.log (nbDiv);
        }
        if (num2 % $j == 0) {
            nbDiv++;//conteur de diviseur
            console.log (nbDiv);
        }
        
    }

    if (nbDiv == 2) {
        return false;
    }

}
sommenombrespremiers(3,8)


