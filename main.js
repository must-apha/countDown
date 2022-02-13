    let month = document.querySelector(".month");
    let day = document.querySelector(".day");
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    
function countDown(){
    const future = new Date("feb 15, 2022");
    const now = new Date();
    const dif = future - now; 

    let months = Math.floor(dif/(1000*60*60*24*30));
    let days = Math.floor(dif/(1000*60*60*24));
    let hours = Math.floor(dif/(1000*60*60));
    let minutes = Math.floor(dif/(1000*60));
    let seconds = Math.floor(dif/(1000));

    

    month.innerHTML = months;
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    
};
let start = setInterval(countDown);
// if (second.innerHTML <=0){
//     clearInterval(start);
// }


setInterval(function chnageColor(){
    color = "#";
    codes = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for(let i=0;i<6;i++){
        color+= codes[Math.floor(Math.random()*codes.length)];
    }
    month.style.color=color;
    day.style.color=color;
    hour.style.color=color;
    minute.style.color=color;
    second.style.color=color;
},1000);

    


    


