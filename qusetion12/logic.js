function multification(){
    let numo = document.getElementById("first").value;
    let num1 = numo.value;
   let numt = document.getElementById("second").value;
   let num2 =numt.value;
    let show =document.getElementById("show");
    console.log(num1);
    show.innerHTML=(`multification calculation is ${num1}*${num2}`);

}
function divisition(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    let show =document.getElementById("show");
    show.innerHTML=(`divistioncalculation is ${num1}/${num2}`);

}
