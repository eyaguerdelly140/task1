//console.log('connected');
let inputX=document.querySelector('#inputX');
let inputY=document.querySelector('#inputY');
let h3=document.querySelector("h3");

//add button
let buttonAdd=document.querySelector('#add');
buttonAdd.addEventListener("click",add);
function add(){
    h3.innerHTML= parseInt(inputX.value) + parseInt(inputY.value);
}


// multiplcation button
let buttonMul=document.querySelector("#mul");
buttonMul.addEventListener("click",mul);
function mul(){
    h3.innerHTML= parseInt(inputX.value) * parseInt(inputY.value);
}

// substraction button
let buttonSubs=document.querySelector("#subs");
buttonSubs.addEventListener("click",subs);
function subs(){
    h3.innerHTML= parseInt(inputX.value) - parseInt(inputY.value);
}


//division button
let buttonDivi=document.querySelector("#divi");
buttonDivi.addEventListener("click",divi);
function divi(){
    h3.innerHTML= parseInt(inputX.value) / parseInt(inputY.value);
}
