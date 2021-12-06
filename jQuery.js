$(document).ready(function(){
    $("#head").mouseover(function(){
        $("h1").css("color","red",);
    });
});

$(document).ready(function(){
    $(".button1").click(function() {
        $("p").hide();
    });
});
$(document).ready(function(){
    $(".button2").click(function() {
        $("p").show();
    });
});