console.log("bas itna hi baki hai");

const Btn = document.querySelector(".hint");
const Conr = document.querySelector(".bg");

Btn.addEventListener("click", () => {
  Conr.classList.toggle("on");
});

window.addEventListener("resize", () => {
  if (Conr.classList.contains("on") && window.innerWidth < 750) {
    Conr.classList.toggle("on");
  }
});
