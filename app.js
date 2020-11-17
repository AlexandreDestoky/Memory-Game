let cartes = document.querySelectorAll(".carte");
let emojis = document.querySelectorAll(".carte span");

for (const carte of cartes) {
  carte.addEventListener("click",()=> {
    // alert(carte.innerHTML);
    carte.classList.remove("fond");
    carte.style.background = "white";
    carte.style.transition = "all 600ms";
    // carte.innerHTML = "";
  })
}
