let cartes = document.querySelectorAll(".carte");
let nbrHidden = 0;
let nbrEssai = document.querySelector(".nbrEssai span");
let tab = [];

for (const carte of cartes) {
  carte.addEventListener("click", () => {
    // alert(carte.innerHTML);
    carte.classList.toggle("fond");
    carte.classList.toggle("face");

    tab.push(carte.innerHTML);
    // console.log(carte.dataset.animal);
    if (tab.length > 1) {
      verification(tab);
      nbrEssai.innerHTML = Number(nbrEssai.innerHTML) + 1;
    }
    if (nbrHidden == cartes.length) {
      setTimeout(() => {
        score();
      }, 1000);
    }
  });
}

//FCT de verification des cartes retournées
let verification = (tableau) => {
  if (tableau[0] == tableau[1]) {
    //si les 2 cartes retournées sont = alors on leur rajoute la classe check (visibility hidden);
    for (const carte of cartes) {
      if ((tableau[0] == carte.innerHTML || tableau[1] == carte.innerHTML) && carte.classList.contains("face")) {
        carte.classList.add("check");
      }
    }
    nbrHidden += 2;
  } else {
    //si les 2 cartes sont != alors on les retournes
    for (const carte of cartes) {
      if ((tableau[0] == carte.innerHTML || tableau[1] == carte.innerHTML) && carte.classList.contains("face")) {
        setTimeout(() => {
          carte.classList.toggle("fond");
          carte.classList.toggle("face");
        }, 800);
      }
    }
  }
  tab = []; // on vide le tableau pour réessayer a chaque fois;
};

let score = () => {
  alert(`felicitations, tu as réussi en ${nbrEssai.innerHTML} coups !`);
};
