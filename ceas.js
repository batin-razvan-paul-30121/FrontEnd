// javascript
setInterval(setTime,1000)
const hourEl=document.querySelector("[data-hour-hand]")
const minuteEl=document.querySelector("[data-minute-hand]")
const secondEl=document.querySelector("[data-second-hand]")

function setTime(){
    const currentDate=new Date();

    const secondRatio= currentDate.getSeconds() / 60
    const minuteRatio=(secondRatio + currentDate.getMinutes()) / 60
    const hourRatio=(minuteRatio + currentDate.getHours()) / 12

    setRotation(hourEl,hourRatio)
    setRotation(secondEl,secondRatio)
    setRotation(minuteEl,minuteRatio)
}

function setRotation(element,rotationRatio){
    element.style.setProperty("--rotation",rotationRatio * 360)
}
setTime()
