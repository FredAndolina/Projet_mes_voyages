
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

const city = document.querySelector(".city")
city.style.color = "red"


const buttonTravel = document.querySelector("#travel")
const buttonDriver = document.querySelector("#driver")
const buttonCollation = document.querySelector("#collation")
const buttonHotel = document.querySelector("#hotel")
const buttonCovid = document.querySelector("#collier")
const buttonBleu = document.querySelector("#covidBleu")
const buttonRose = document.querySelector("#covidRose")
const buttonAutre = document.querySelector("#covidAutre")




const travel = document.querySelector(".travel")
const driver = document.querySelector(".driver")
const collation = document.querySelector(".collation")
const hotel = document.querySelector(".hotel")
const etiquette = document.querySelector(".etiquette")
const bleu = document.querySelector(".bleu")
const rose = document.querySelector(".rose")
const autre = document.querySelector(".autre")


buttonBleu.addEventListener("click", function () {
    bleu.style.display = "block";
})
buttonRose.addEventListener("click", function () {
    rose.style.display = "block";
})
buttonAutre.addEventListener("click", function () {
    autre.style.display = "block";
})


buttonCovid.addEventListener("click", function () {
    etiquette.style.display = "block";
})



buttonTravel.addEventListener("click", function () {
    travel.style.display = "block";
})

buttonDriver.addEventListener("click", function () {
    driver.style.display = "block";
})

buttonCollation.addEventListener("click", function () {
    collation.style.display = "block";
})

buttonHotel.addEventListener("click", function () {
    hotel.style.display = "block";
})
// const blond = document.querySelector(".blond")
// const brun = document.querySelector(".brun")
// // const blond = document.createElement
// const buttonBlond = document.querySelector("#crl")

// buttonBlond.addEventListener("click", function(){
// blond.style.display = "block";
// brun.style.display = "block";
// })

// var isPalindrome = function (string) {
//     if (string == string.split('').reverse().join('')) {
//         alert(string + ' is palindrome.');
//     }
//     else {
//         alert(string + ' is not palindrome.');
//     }
// }

// console.log(isPalindrome(affa))