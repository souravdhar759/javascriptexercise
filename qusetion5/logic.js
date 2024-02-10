let hdate =document.querySelector("#date");
let htime =document.querySelector("#time");
let newdate = new Date()
let cdate = newdate.toLocaleDateString();
let ctime = newdate.toLocaleTimeString();
hdate.innerHTML=cdate;
htime.innerHTML=ctime;
