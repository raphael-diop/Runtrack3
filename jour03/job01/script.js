$(document).ready(function(){     
    //Dès qu'on clique sur #btn1, on applique hide() au span
    $("span").hide();
    $("#btn1").hide();
    $("#btn1").click(function(){
        $("html").hide();
    });
    
    //Dès qu'on clique sur #btn2, on applique show() au span
    $("#btn2").click(function(){
        $("span").show();
        $("#btn1").show();
    });
});