// Mobile drawer controls
const drawer = document.getElementById('drawer');
function toggleMenu(){ drawer.classList.toggle('open'); }
function closeMenu(){ drawer.classList.remove('open'); }
// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
