// javascript
setInterval(countDown,1000)
function countDown(){
    const countDate=new Date("Dec 21, 2022 00:00:00").getTime();
    const now=new Date().getTime();

    const gap=countDate-now;

    const seconds=1000
    const minutes=seconds * 60
    const hours= minutes * 60
    const days = hours * 24

    const textDay= Math.floor(gap/days)
    const textHour=Math.floor((gap % days)/hours)
    const textMinute=Math.floor((gap % hours)/minutes)
    const textSecond=Math.floor((gap % minutes)/seconds)

    if(gap>0){
    if(textDay<10)
    document.querySelector(".day").textContent="0"+textDay
    else
    document.querySelector(".day").textContent=textDay

    if(textHour<10)
    document.querySelector(".hour").textContent="0"+textHour
    else
    document.querySelector(".hour").textContent=textHour

    if(textMinute<10)
    document.querySelector(".minute").textContent="0"+textMinute
    else
    document.querySelector(".minute").textContent=textMinute

    if(textSecond<10)
    document.querySelector(".second").textContent="0"+textSecond
    else
    document.querySelector(".second").textContent=textSecond
    }
    else
    {
        document.querySelector(".day").textContent="00"
        document.querySelector(".hour").textContent="00"
        document.querySelector(".minute").textContent="00"
        document.querySelector(".second").textContent="00"
    }

}
countDown()
