const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Main home-name*/
const letters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
document.querySelector(".home-name").onmouseover = (x) => {
  let repetition = 0;
  let invertal = setInterval(() => {
    x.target.innerText = x.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < repetition) {
          return x.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 29)];
      })
      .join("");
    if (repetition >= x.target.dataset.value.length) clearInterval(invertal);
    repetition += 1 / 3;
  }, 30);
};

/* Remove Menu Mobil*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Main b*/
const content = document.getElementById("content");
const text = "Frontend Developer";
let idx = 1;
let speed = 100;

writeText();
function writeText() {
  content.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    content.innerText = text;
  }

  setTimeout(writeText, speed);
}
