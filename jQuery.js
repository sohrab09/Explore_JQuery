// Document select by ID 

$(document).ready(function(){
    $("#head").mouseover(function(){
        $("h1").css("color","red",);
    });
});

// Document select by Class 

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



// if we want to select all the elements in the HTML document, we can use the following syntax:

$(document).ready(function(){
    $("button").click(function() {
        $("*").hide();
    });
});