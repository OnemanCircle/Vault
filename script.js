// Section click: opens inner catalogue
document.querySelectorAll(".section").forEach(section => {
section.addEventListener("click", () => {
const target = section.getAttribute("data-target");
document.querySelectorAll(".catalogue").forEach(c => [c.style](http://c.style).display = "none");
document.getElementById(target).style.display = "block";
});
});
// Inner section click: loads image gallery
document.querySelectorAll(".inner-section").forEach(item => {
item.addEventListener("click", () => {
const name = item.innerText.toLowerCase().replace(/ /g, "-");
const parentId = item.closest("section").id;
const path = `images/${parentId}/${name}/`;
const existingGallery = item.parentNode.querySelector(".gallery");
if (existingGallery) existingGallery.remove(); // remove if already there
const gallery = document.createElement("div");
gallery.className = "gallery";
for (let i = 1; i <= 50; i++) {
const img = document.createElement("img");
img.src = `${path}${i}.jpg`;
img.alt = `${name} ${i}`;
gallery.appendChild(img);
}
item.parentNode.appendChild(gallery);
});
});