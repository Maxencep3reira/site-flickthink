document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("open");
  });
});
