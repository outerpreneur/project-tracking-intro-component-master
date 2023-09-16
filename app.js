const menuOpener = document.getElementById("menu-opener");
const mobileMenu = document.getElementById("mobile-menu");

menuOpener.addEventListener("click", (event) => {
  mobileMenu.classList.toggle("hidden");
});
