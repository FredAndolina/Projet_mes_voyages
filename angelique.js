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
// const blond = document.createElement
const buttonBlond = document.querySelector("#crl")

buttonBlond.addEventListener("click", function(){
blond.style.display = "block";
brun.style.display = "block";
})


var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}

console.log(isPalindrome(affa))
