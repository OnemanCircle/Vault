// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
const enterBtn = document.getElementById('enterBtn');
const vaultContent = document.getElementById('vaultContent');
const themeToggle = document.getElementById('themeToggle');
// Show main site when red button clicked
enterBtn.addEventListener('click', () => {
document.getElementById('intro').classList.add('hidden');
vaultContent.classList.remove('hidden');
});
// Toggle theme
themeToggle.addEventListener('change', () => {
document.body.classList.toggle('dark');
});
// Optional: remember theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
document.body.classList.add('dark');
themeToggle.checked = true;
}
themeToggle.addEventListener('change', () => {
if (themeToggle.checked) {
document.body.classList.add('dark');
localStorage.setItem('theme', 'dark');
} else {
document.body.classList.remove('dark');
localStorage.setItem('theme', 'light');
}
});
});