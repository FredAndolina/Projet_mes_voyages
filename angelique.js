/* Lorsque l'on clique sur un onglet
ON RETIRE la class active de l'onglet actif
j'ajoute la class active à l'onglet actuel

On retire la class active sur le contenu actif
j'ajoute la class  active sur le contenu correspondant à mon click */

let tabs = document.querySelectorAll('.tabs a')

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", function (e) {
         const li = this.parentNode
         const div = this.parentNode.parentNode.parentNode

        if(li.classList.contains('active')){
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


const blond = document.querySelector(".blond")
const brun = document.querySelector(".brun")
const choix = document.querySelector("#choix")

const buttonBlond = document.querySelector("#crl")
const buttonTrain = document.querySelector("#addOn")
const train = document.querySelector(".train")
const choixA = document.querySelector(".choixA")


buttonBlond.addEventListener("click", function(){
blond.style.display = "block";
brun.style.display = "block";
})

buttonTrain.addEventListener("click", function(){
    train.style.display = "block";
    })

    const retour = document.querySelector("#return")

    retour.addEventListener("click", function () {
        location.href = "./Vacance-a-la-carte.html"}
        )

    choix.addEventListener("click", function () {
        choixA.style.display= "block"}
            )        
