const btn1 = document.getElementById("btn");
console.log(btn1);

const result = document.getElementById("result");
console.log(result);

const divCouleur = document.querySelector(".changeCouleur");
console.log(divCouleur);

const colorTab = [
  "lightred",
  "lightgreen",
  "lightcoral",
  "lightgoldenrodyellow",
  "lightpink",
  "lightseagreen",
  "lightgray",
  "lightcyan",
  "lightyellow",
  "lightsalmon",
  "lightblue",
  "lightsteelblue",
  "lightturquoise",
  "lightviolet",
  "lightkhaki",
  "lightorchid",
  "lightmagenta",
  "lightlime",
  "lightmaroon",
  "lightnavy",
  "lightolive",
  "lightteal",
  "lightindigo",
  "lightplum",
  "lighttan",
];

const zoneSouris = document.querySelector(".mousePosition");
console.log(zoneSouris);

const xCoords = document.getElementById("posX");
const yCoords = document.getElementById("posY");

console.log(xCoords, yCoords);

zoneSouris.addEventListener("mousemove", (event) => {
  xCoords.textContent = `${event.clientX - zoneSouris.offsetLeft}`;
  yCoords.textContent = `${event.clientY - zoneSouris.offsetTop}`;
});

btn1.addEventListener("click", () => {  
  result.textContent = "JavaScript côté client 🚀";
});

divCouleur.addEventListener("click", () => {
  divCouleur.style.backgroundColor =
    colorTab[Math.floor(Math.random() * colorTab.length)];
});
