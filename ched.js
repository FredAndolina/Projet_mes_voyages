/* Lorsque l'on clique sur un onglet
ON RETIRE la class active de l'onglet actif
j'ajoute la class active à l'onglet actuel

On retire la class active sur le contenu actif
j'ajoute la class  active sur le contenu correspondant à mon click */

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

const compagnie = document.getElementById("compagnie")
const france = document.querySelector(".france")
const canada = document.querySelector(".canada")
const senior = document.querySelector(".senior")
const canadair = document.querySelector(".canadair")
const color = document.querySelector(".paiement")
const carteBleue = document.querySelector(".popup")
const return1 = document.querySelector("#return1")

return1.addEventListener("click", function () {
    location.href = "./Vacance-a-la-carte.html"
})
compagnie.addEventListener("change", function (event) {
    france.style.display = "none"
    canada.style.display = "none"
    senior.style.display = "none"
    canadair.style.display = "none"
    color.style.backgroundColor = "rgb(228, 227, 227)";


    // senior.style.display = "none"
  
    if (event.target.value === "airFrance") {
        france.style.display = "block";
        color.style.backgroundColor = "black";
        color.style.display = "block"
        price.style.display = "block"

    } else if (event.target.value === "airCanada") {
        canada.style.display = "block";
        color.style.backgroundColor = "black"
        color.style.display = "block"
        price.style.display = "block"


    } else if (event.target.value === "seniors") {
        senior.style.display = "block";
        color.style.backgroundColor = "black"
        color.style.display = "block"
        price.style.display = "block"

    } else if (event.target.value === "canadair") {
        canadair.style.display = "block";
        color.style.backgroundColor = "black"; 
        canadair.style.width = "500px"
        canadair.style.heigth = "500px"
        color.style.display = "none"
        price.style.display = "none"
    }
})

color.addEventListener("click", function () {
    alert("Il ya un problème avec votre carte bleue. ")
    carteBleue.style.display = "block"
})

const planB = document.getElementById("planB")

planB.addEventListener("click", function () {
    location.href = "./anais.html"
})

const elan = document.querySelector(".elan")
const buttonElan = document.querySelector(".buttonElan")
const image = document.querySelector(".tabs-content")

buttonElan.addEventListener("click", function () {
    baleine.style.display = "none"
    calgary.style.display = "none"
    phoques.style.display = "none"
    gael.style.display = "none"
    elan.style.display = "block"
    
})

const baleine = document.querySelector(".baleine")
const buttonBaleine = document.querySelector(".buttonBaleine")

buttonBaleine.addEventListener("click", function () {
    elan.style.display = "none"
    phoques.style.display = "none"
    gael.style.display = "none"
    calgary.style.display = "none"
    baleine.style.display = "block"
})

const phoques = document.querySelector(".phoques")
const buttonPhoques = document.querySelector(".buttonPhoques")

buttonPhoques.addEventListener("click", function () {
    elan.style.display = "none"
    baleine.style.display = "none"
    gael.style.display = "none"
    calgary.style.display = "none"
    phoques.style.display = "block"
})

const calgary = document.querySelector(".calgary")
const buttonCalgary = document.querySelector(".buttonCalgary")

buttonCalgary.addEventListener("click", function () {
    elan.style.display = "none"
    baleine.style.display = "none"
    phoques.style.display = "none"
    gael.style.display = "none"
    calgary.style.display = "block"
})

const gael = document.querySelector(".gael")
const buttonGael = document.querySelector(".buttonGael")

buttonGael.addEventListener("click", function () {
    elan.style.display = "none"
    baleine.style.display = "none"
    phoques.style.display = "none"
    calgary.style.display = "none"
    gael.style.display = "block"
   
})



//PRIX
const numberPers = document.getElementById("numberpers")
const price = document.querySelector(".price")


numberPers.addEventListener("change", function (event) {

    if (event.target.value === "one") { 
        price.innerHTML = "290 EUROS"
    } else if (event.target.value === "two") {
        price.innerHTML = "580 EUROS"
    }else if (event.target.value === "t") {
        price.innerHTML = ""
    }
})