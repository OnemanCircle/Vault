document.addEventListener("DOMContentLoaded", () => {
const sectionButtons = document.querySelectorAll(".section-btn");
const contentContainers = document.querySelectorAll(".content-container");
sectionButtons.forEach((btn) => {
btn.addEventListener("click", () => {
const target = btn.getAttribute("data-target");
// Collapse all other content sections
contentContainers.forEach((container) => {
if ( [container.id](http://container.id) === target) {
container.classList.toggle("show");
} else {
container.classList.remove("show");
}
});
// Optional: smooth scroll into view
setTimeout(() => {
const targetSection = document.getElementById(target);
if (targetSection && targetSection.classList.contains("show")) {
targetSection.scrollIntoView({ behavior: "smooth" });
}
}, 300);
});
});
// Scroll animation
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
[entry.target](http://entry.target).classList.add("visible");
}
});
}, {
threshold: 0.1
});
document.querySelectorAll(".fade-in").forEach((el) => {
observer.observe(el);
});
});