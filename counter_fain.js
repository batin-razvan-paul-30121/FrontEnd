// javascript
const increaseBtn=document.querySelector(".increase")
const decreaseBtn=document.querySelector(".decrease")
const resetBtn=document.querySelector(".reset")
let valueEl=document.getElementById("value")
let count=0

increaseBtn.addEventListener("click",function(){
    count++
    color()
    valueEl.textContent=count
})
decreaseBtn.addEventListener("click",function(){
    count--
    color()
    valueEl.textContent=count
})
resetBtn.addEventListener("click",function(){
    count=0
    color()
    valueEl.textContent=count
})

function color(){
    if(count > 0)
        valueEl.style.color= "#0E402D"
    else if(count < 0)
        valueEl.style.color="#8F250C"
    else
        valueEl.style.color="#32373B"

}
