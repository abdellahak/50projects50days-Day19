let darkButton = document.getElementById('btnDark');
let hour = document.getElementById('houres-clockwise');
let minute = document.getElementById('minutes-clockwise')
let secondes = document.getElementById('secondes-clockwise')
let time = document.querySelector('#time')
let dateElement = document.querySelector('#date')


darkButton.addEventListener('click',function(){
    let html = document.querySelector('html')
    html.classList.toggle('dark')

})
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];

let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


function getDeg(transformValue){
    let result = transformValue
    result = transformValue.replace('deg)','');
    result = result.replace('translate(-50%, -100%) rotate(','')
    return Number(result);
}

let date = new Date();
secondes.style.transform = `translate(-50%, -100%) rotate(${date.getSeconds()*6}deg)`;

function setTime(){
    let date = new Date();
    let hourTime = date.getHours()
    let minuteTime = date.getMinutes()
    let secondesTime = date.getSeconds()
    let hourMod12 = hourTime % 12


    let currentHourDeg = getDeg(hour.style.transform);
    let currentMinuteDeg = getDeg(minute.style.transform);
    let currentSecondDeg = getDeg(secondes.style.transform);

    hour.style.transform = `translate(-50%, -100%) rotate(${hourTime*15}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${minuteTime*6}deg)`;
    secondes.style.transform = `translate(-50%, -100%) rotate(${currentSecondDeg+6}deg)`;

    time.innerText = `${hourMod12< 10? "0"+hourMod12:hourMod12} : ${minuteTime< 10? "0"+minuteTime:minuteTime} ${hourTime>12 ? "PM":"AM"}`;
    dateElement.innerText = `${days[date.getDate()-1]}, ${months[date.getMonth()]}, ${date.getDate()}`;
}
setTime()

setInterval(setTime, 1000)
