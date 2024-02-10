let show= document.getElementById("show")
let num = Math.random()*10;
console.log(num);
function saveInput(e) {
   
   var inputElement = document.getElementById("myInput");
 var inputValue = inputElement.value;
console.log("Input value:", inputValue);
if(num === inputValue){
    show.innerHTML = document.write(`Good Work`)
}
else{
    show.innerHTML = document.write(`Not Matched`)
}
    
}

