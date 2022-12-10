//
let hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let colorEl=document.getElementById("color-el")
let colorBtn=document.getElementById("color-btn")
let bodyEl=document.body

colorBtn.addEventListener("click",function(){
    hexColor="#"
    for( let i=0; i<6 ; i++)
    {
        hexColor += hex[Math.floor(Math.random()*hex.length)]
    }
    colorEl.textContent=hexColor
    bodyEl.style.backgroundColor=hexColor
})
