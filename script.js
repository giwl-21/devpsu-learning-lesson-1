

$(document).ready(function(){
    $("#something-btn").click(function(){
        $("p").text("Bloop!");
        //$("p").css("color", "green");
        //$("p").toggle();
    })
    
  
});   




// function somethingPress(){
//     var elements = document.getElementsByTagName("p");

//     for (var i = 0; i < elements.length; i++){
//         console.log(elements[i]);
//         //elements[i].innerHTML = "Bloop";
//         //elements[i].style.color = "green";
//         elements[i].setAttribute("hidden", "true");
        
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("something-btn").setAttribute("onclick", "somethingPress()");

// });