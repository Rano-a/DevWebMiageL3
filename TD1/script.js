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

const header = document.querySelector("header");
console.log(header);

const scrollLevel = document.getElementById("scrollLevel");
console.log(scrollLevel);

const form = document.getElementById("myForm");
console.log(form);

btn1.addEventListener("click", () => {
  result.textContent = "JavaScript côté client 🚀";
});

divCouleur.addEventListener("click", () => {
  divCouleur.style.backgroundColor =
    colorTab[Math.floor(Math.random() * colorTab.length)];
});

zoneSouris.addEventListener("mousemove", (event) => {
  xCoords.textContent = `${event.clientX - zoneSouris.offsetLeft}`;
  yCoords.textContent = `${event.clientY - zoneSouris.offsetTop}`;

  const pointeur = document.querySelector(".pointeur");
  pointeur.style.left = `${event.clientX - 5}px`; // 5px pour centrer le pointeur
  pointeur.style.top = `${event.clientY - 5}px`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  scrollLevel.textContent = `${Math.floor(scrollY)}`;
  header.style.backgroundColor =
    colorTab[Math.floor(Math.random() * colorTab.length)];
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const nom = formData.get("nom");
  const prenom = formData.get("prenom");
  const formResult = document.getElementById("formResult");

  formResult.textContent = `Bonjour ${prenom} ${nom} !`;
});
