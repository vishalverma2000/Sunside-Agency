const hamOpenBtn = document.getElementById("btnHamburger");
const hamMenu = document.getElementById("hamMenu");

hamOpenBtn.addEventListener("click", function () {
  hamOpenBtn.classList.toggle("open");

  if (hamOpenBtn.classList.contains("open")) {
    hamMenu.classList.add("fade-in");
    hamMenu.classList.remove("fade-out");
  } else {
    hamMenu.classList.remove("fade-in");
    hamMenu.classList.add("fade-out");
  }
});
