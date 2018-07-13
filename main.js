

var projectTilesLink = document.querySelectorAll('#project-grid a');

projectTiles.forEach(tile => {
    tile.setAttribute('class', 'hoverontouch');
});

var projectTilesText = document.querySelectorAll('#project-grid a p');

projectTilesText.forEach(tile => {
    tile.setAttribute('class', 'hoverontouch');
});