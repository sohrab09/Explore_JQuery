// Document select by ID 

$(document).ready(function(){
    $("#head").mouseover(function(){
        $("h1").css("color","red",);
    });
});

// Document select by Class 

$(document).ready(function(){
    $(".button1").click(function() {
        $("p").hide(1000); // 1000 is the time in milliseconds for hide button
    });
});
$(document).ready(function(){
    $(".button2").click(function() {
        $("p").show(1000); // 1000 is the time in milliseconds for show button
    });
});



// if we want to select all the elements in the HTML document, we can use the following syntax:

// $(document).ready(function(){
//     $("button").click(function() {
//         $("*").hide();
//     });
// });

// Hide text or any other elements by click function.
$(document).ready(function(){
    $("#hideExample").click(function(){
        $("h3").hide();
    });
}); 

// Mouse over, for show alert message.
$(document).ready(function(){
    $("#mouseOver").mouseover(function(){
        alert("Mouse over event");
    });
}); 

// Mouse leave, for show alert message.
$(document).ready(function(){
    $("#mouseLeave").mouseleave(function(){
        alert("Mouse leave event");
    });
}); 

// Mouse down, for show alert message.
$(document).ready(function(){
    $("#mouseDown").mousedown(function(){
        alert("Mouse down event");
    });
});

// Mouse up, for show alert message.
$(document).ready(function(){
    $("#mouseUp").mouseup(function(){
        alert("Mouse Up event");
    });
});

// Multiple events for multiple elements
$(document).ready(function(){
    $("h2").on({
        mouseenter: function(){
            $(this).css("background-color","yellow");
            $(this).css("color","blue");
        },
        mouseleave: function(){
            $(this).css("background-color","green");
            $(this).css("color","blue");
        },
        click: function(){
            $(this).css("background-color","red");
            $(this).css("color","blue");
        },
    })
});

// Document select by Class 

$(document).ready(function(){
    $("#toggle").click(function() {
        $("h3").toggle(1000); // 1000 is the time in milliseconds for toggle button
    });
});

// Animate 
$(document).ready(function(){
    $("button").click(function() {
        $("#square").animate({
            left: '250px',
            opacity: '0.5',
            height: 'toggle',
            width: '150px'
        }, 1000);
    });
});

// Round Animation 
$(document).ready(function(){
    $("button").click(function() {
        var squares = $("#squares");
        squares.animate({height: '500px', opacity: '0.5'}, 1000);
        squares.animate({width: '400px', opacity: '0.9'}, 500);
        squares.animate({height: '300px', opacity: '0.5'}, 1000);
        squares.animate({width: '200px', opacity: '0.9'}, 500);
    });
});