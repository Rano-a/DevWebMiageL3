const burger = document.querySelector('.burger');
const menu = document.querySelector('.navbardroite');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }
  
  lastScrollTop = scrollTop;
});

const focusBtn = document.getElementById('focus-btn');

focusBtn.addEventListener('click', () => {
    document.body.classList.toggle('focus-mode');

    if (document.body.classList.contains('focus-mode')) {
        focusBtn.innerHTML = "Stop Focus";
        focusBtn.style.backgroundColor = "#e74c3c";
        focusBtn.style.borderColor = "#e74c3c";
        focusBtn.style.color = "white";
    } else {
        focusBtn.innerHTML = "Mode Focus";
        focusBtn.style.backgroundColor = "transparent";
        focusBtn.style.borderColor = "#27ae60";
        focusBtn.style.color = "#27ae60";
    }
});