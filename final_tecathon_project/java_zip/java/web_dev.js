
// ---------------------------------------GSAP

gsap.from("#web_heading",{
    y:-200,
    duration:0.7,
    opacity:0,
    
})

// ------------------------------------------------------------

let usersection = document.querySelector(".toggle_container");

function showhideuser(){
    usersection.classList.toggle("hide");
}
// ------------------------------------------------------------
let a2 = document.querySelector(".toggle2")
function showhideuser1(){
    a2.classList.toggle("hide");
}
// ------------------------------------------------------------

let a3 = document.querySelector(".toggle3")
function showhideuser2(){
    a3.classList.toggle("hide");
}

// ------------------------------------------------------------

let a4 = document.querySelector(".toggle4")
function showhideuser3(){
    a4.classList.toggle("hide");
}