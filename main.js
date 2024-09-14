const navContainer = document.getElementById("nav-container");
const navLinks = document.querySelector(".nav-links-container");
const heroSection = document.querySelector("#hero");
const menuButton = document.querySelector(".menu");
const anchorTag = document.querySelectorAll("a");
const navHeight = navContainer.getBoundingClientRect().height;

anchorTag.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.preventDefault();
  })
);
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("visible");
});
const obsOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
function obsCallback(entries) {
  const [entry] = entries;
  if (document.body.getBoundingClientRect().width < 850) return;

  if (!entry.isIntersecting) {
    navLinks.classList.add("visible");
  } else {
    navLinks.classList.remove("visible");
  }
}

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(heroSection);
