"use strict";
$("#opc1").click(function(){
    $("#texto").slideToggle("slow");
});

$("#btn1").click(function(){
    $("#texto").css({
        "color":"red",
        "background-color":"yellow",
        "width":"200px"
    })
})