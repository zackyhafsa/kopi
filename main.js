// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik humberger menu untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
