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
const color = document.querySelector(".paiement")
const carteBleue = document.querySelector(".popup")



compagnie.addEventListener("change", function (event) {
    france.style.display = "none"
    canada.style.display = "none"
    senior.style.display = "none"
    color.style.backgroundColor = "rgb(228, 227, 227)";

    // senior.style.display = "none"

    if (event.target.value === "airFrance") {
        france.style.display = "block";
        color.style.backgroundColor = "black";
    } else if (event.target.value === "airCanada") {
        canada.style.display = "block";
        color.style.backgroundColor = "black"
    } else if (event.target.value === "seniors") {
        senior.style.display = "block";
        color.style.backgroundColor = "black"
    }
})

color.addEventListener("click", function(){
    alert("Il ya un problème avec votre carte bleue. ")
    carteBleue.style.display = "block"
})

const planB = document.getElementById("planB")

planB.addEventListener("click", function(){
    location.href = "./anais.html"
}
)