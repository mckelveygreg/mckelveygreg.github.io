

var projectTilesLink = document.querySelectorAll('#project-grid a');

projectTilesLink.forEach(tile => {
    tile.setAttribute('class', 'hoverontouch');
});

var projectTilesText = document.querySelectorAll('#project-grid a p');

projectTilesText.forEach(tile => {
    tile.setAttribute('class', 'hoverontouch');
});

var mobileText = document.querySelector('#mobileText');
function clearScreen() {
    mobileText.style.display = 'none';
}
mobileText.addEventListener('click', clearScreen, false);