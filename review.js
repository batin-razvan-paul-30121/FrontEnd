// javascript
const reviews=[
    {
        id: 1,
        name: "sara jones",
        job: "web developer",
        img: "female.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ac turpis non placerat. Nunc laoreet ultrices lacinia. Sed at nisl vitae risus varius lacinia ac nec nisi."

},
{
        id: 2,
        name: "sam smith",
        job: "web designer",
        img: "male.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ac turpis non placerat. Nunc laoreet ultrices lacinia. Sed at nisl vitae risus varius lacinia ac nec nisi."

},
{
        id: 3,
        name: "adrian peter",
        job: "intern",
        img: "male.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales ac turpis non placerat. Nunc laoreet ultrices lacinia. Sed at nisl vitae risus varius lacinia ac nec nisi."

}
]

const imgEl=document.getElementById("person-img")
const authorEl=document.getElementById("author")
const jobEl=document.getElementById("job")
const infoEl=document.getElementById("info")

const prevBtn=document.querySelector(".prev-btn")
const nextBtn=document.querySelector(".next-btn")

let currentItem=0;
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem)
})

nextBtn.addEventListener("click", function(){
    currentItem++
    showPerson(currentItem)
})
prevBtn.addEventListener("click", function(){
    currentItem--
    showPerson(currentItem)
})

function showPerson(number){
    const itm=reviews[number]
    imgEl.src=itm.img
    authorEl.textContent=itm.name
    jobEl.textContent=itm.job
    infoEl.textContent=itm.text
    if(number === 0)
    prevBtn.style.visibility= 'hidden'
    else
    prevBtn.style.visibility= 'visible'

    if(number === 2)
    nextBtn.style.visibility= 'hidden'
    else
    nextBtn.style.visibility= 'visible'


}
