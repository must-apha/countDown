    let month = document.querySelector(".month");
    let day = document.querySelector(".day");
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    
function countDown(){
    const future = new Date("jun 13, 2022, 20:50:20");
    const now = new Date();
    const dif = (future - now)/1000; 
 
    let months = Math.floor(dif/(3600*24*30));
    let days = Math.floor(dif%(3600*24*30)/(3600*24));
    let hours = Math.floor((dif%(3600*24*30)%(3600*24))/3600);
    let minutes = Math.floor(((dif%(3600*24*30)%(3600*24))%3600)/60);
    let seconds = Math.floor(((dif%(3600*24*30)%(3600*24))%3600)%60);
    //STOP
    if (seconds=='0' && minutes=='0' && hours=='0' && days=='0' && months=='0'){
        clearInterval(start);
    }
    
    month.innerHTML = formatTime(months) ;
    day.innerHTML = formatTime(days) ;
    hour.innerHTML = formatTime(hours) ;
    minute.innerHTML = formatTime(minutes) ;
    second.innerHTML = formatTime(seconds);
    

};
let start = setInterval(countDown);

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

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

    


    


