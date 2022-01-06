
let tabs = document.querySelectorAll('.tabs a')

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (e) {
        const li = this.parentNode
        const div = this.parentNode.parentNode.parentNode

        if (li.classList.contains('active')) {
            return false
        }
        // ON RETIRE la class active de l'onglet actif
        div.querySelector(".tabs .active").classList.remove("active")
        // j'ajoute la class active à l'onglet actuel
        li.classList.add("active")
        // On retire la class active sur le contenu actif
        div.querySelector(".tab-content.active").classList.remove("active")
        // j'ajoute la class  active sur le contenu correspondant à mon click */
        div.querySelector(this.getAttribute("href")).classList.add("active")
    })
}




const buttonDriver = document.querySelector("#driver")
const buttonCollation = document.querySelector("#collation")
const buttonHotel = document.querySelector("#hotel")
const buttonCovid = document.querySelector("#collier")
const buttonBleu = document.querySelector("#covidBleu")
const buttonRose = document.querySelector("#covidRose")
const buttonAutre = document.querySelector("#covidAutre")
const buttonBarbecue = document.querySelector("#barbecue")
const buttonTerre = document.querySelector("#terre")
const buttonEtiquette2 = document.querySelector("#etiquette2")
const buttonAge = document.querySelector("#age")




const travel = document.querySelector(".travel")
const driver = document.querySelector(".driver")
const collation = document.querySelector(".collation")
const hotel = document.querySelector(".hotel")
const etiquette = document.querySelector(".etiquette")
const bleu = document.querySelector(".bleu")
const rose = document.querySelector(".rose")
const autre = document.querySelector(".autre")
const barbecue = document.querySelector(".barbecue")
const terre = document.querySelector(".terre")
const etiquette2 = document.querySelector(".etiquette2")
const cadavre = document.querySelector(".cadavre")
const van = document.querySelector(".van")
const retour = document.querySelector("#return")



etiquette2.addEventListener("mouseover", function () {
    etiquette2.src = "./Images-Anais/cadavre.jpeg"
})
etiquette2.addEventListener("mouseleave", function () {
    etiquette2.src = "./Images-Anais/etiquette.jpeg";
})
buttonEtiquette2.addEventListener("click", function () {
    etiquette2.style.display = "block";
    terre.style.display = "none";
    barbecue.style.display = "none";
})
buttonTerre.addEventListener("click", function () {
    terre.style.display = "block";
    barbecue.style.display = "none";
})
buttonBarbecue.addEventListener("click", function () {
    barbecue.style.display = "block";
})

buttonBleu.addEventListener("click", function () {
    bleu.style.display = "block";
})
buttonRose.addEventListener("click", function () {
    rose.style.display = "block";
})
buttonAutre.addEventListener("click", function () {
    autre.style.display = "block";
    rose.style.display = "none";
    bleu.style.display = "none";
})


buttonCovid.addEventListener("click", function () {
    etiquette.style.display = "block";
})

const buttonTravel = document.querySelector("#travel")

buttonTravel.addEventListener("click", function () {
    
    travel.style.display = "block";
})

buttonDriver.addEventListener("click", function () {
    driver.style.display = "block";
    van.style.display = "block";
    travel.style.display = "none"
})

buttonCollation.addEventListener("click", function () {
    collation.style.display = "block";
})

buttonHotel.addEventListener("click", function () {
    hotel.style.display = "block";
})
 

buttonAge.addEventListener("click", function () {
    let age = prompt("Quel âge as-tu ma petite Anais?");
    console.log("click")
    if(age <= 13){ alert("Prépare-toi pour ton voyage")}
else{alert("Tu es trop vielle Annais je suis dans l'obligation de fermer la page");
location.href = "./page404.html"}}
)
retour.addEventListener("click", function () {
location.href = "./Vacance-a-la-carte.html"}
)

// const blond = document.querySelector(".blond")
// const brun = document.querySelector(".brun")
// // const blond = document.createElement
// const buttonBlond = document.querySelector("#crl")

// buttonBlond.addEventListener("click", function(){
// blond.style.display = "block";
// brun.style.display = "block";
// })

//Questions
const button0 = document.querySelector(".btn0")


button0.addEventListener('click', function () {
    const firstQuestion = document.querySelector(".firstQuestion")
    const newCard = document.createElement("div")
    const question1 = prompt ("Quel est ton département préféré ?")
    newCard.classList.add("first")
    newCard.textContent = "Quel est ton département préféré ? : " + question1
    firstQuestion.appendChild(newCard)
    button0.style.display ="none"
    ardennes.style.display="block"
})

const button4 = document.querySelector(".btn4")

button4.addEventListener('click', function () {
    const firstQuestion = document.querySelector(".firstQuestion")
    const newCard = document.createElement("div")
    const question1 = prompt ("Aimes-tu la solitude ?")
    newCard.classList.add("first")
    newCard.textContent = "Aimes-tu la solitude ? : " + question1
    firstQuestion.appendChild(newCard)
    button4.style.display ="none"
})

const button1 = document.querySelector(".btn1")

button1.addEventListener('click', function () {
    const firstQuestion = document.querySelector(".firstQuestion")
    const newCard = document.createElement("div")
    const question1 = prompt ("Aimes-tu les ballades en forêt ?")
    newCard.classList.add("first")
    newCard.textContent = "Aimes-tu les ballades en forêt ? : " + question1
    firstQuestion.appendChild(newCard)
    button1.style.display ="none"
})

const button2 = document.querySelector(".btn2")

button2.addEventListener('click', function () {
    const firstQuestion = document.querySelector(".firstQuestion")
    const newCard = document.createElement("div")
    const question1 = prompt ("Es-tu prêtes pour partir en vacances sans ton mari ?")
    newCard.classList.add("first")
    newCard.textContent = "Es-tu prêtes pour partir en vacances sans ton mari ? : " + question1
    firstQuestion.appendChild(newCard)
    button2.style.display ="none"
})



// const x = document.getElementById("new");
// const y = document.getElementById("demo");


// x.addEventListener("change", function(event){ 

//     if(event.target.value === "Oui")
//     y.innerHTML = event.target.value
// ;
// else if(event.target.value === "Non")
//     y.innerHTML = event.target.value
// })

const ardennes = document.querySelector(".ardennes")

ardennes.addEventListener('mouseover', function () {
    ardennes.src = "./Images-Anais/doigt.jpeg"
})
ardennes.addEventListener('mouseleave', function () {
    ardennes.src = "./Images-Anais/Carte-les-ardennes.jpeg"
})