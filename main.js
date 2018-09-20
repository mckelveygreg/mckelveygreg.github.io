

// var projectTilesLink = document.querySelectorAll('#project-grid a');

// projectTilesLink.forEach(tile => {
//   //  touchEventAdd(tile);
// });

// var projectTilesText = document.querySelectorAll('#project-grid a p');

// projectTilesText.forEach(tile => {
//     touchEventAdd(tile);    
// });

var mobileText = document.querySelector('#mobileText');
function clearScreen() {
    mobileText.style.display = 'none';
    mobileText.removeEventListener('click', clearScreen, false);
}
mobileText.addEventListener('click', clearScreen, false);

// // Solution found at https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d
// // It was the final rendition of this

// let pageWidth = window.innerWidth || document.body.clientWidth;
// let treshold = Math.max(1,Math.floor(0.01 * (pageWidth)));
// let touchstartX = 0;
// let touchstartY = 0;
// let touchendX = 0;
// let touchendY = 0;

// const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
// //const gestureZone = document.getElementById('mobileText');

// // I put the gestureZones in a function that is the callback for the event listeners
// function touchEventAdd (gestureZone) {
//     gestureZone.addEventListener('touchstart', function(event) {
//         touchstartX = event.changedTouches[0].screenX;
//         touchstartY = event.changedTouches[0].screenY;
//     }, false);
    
//     gestureZone.addEventListener('touchend', function(event) {
//         touchendX = event.changedTouches[0].screenX;
//         touchendY = event.changedTouches[0].screenY;
//         handleGesture(event);
//     }, false);
    
// }

// function handleGesture(e) {
//     let box = e.target;
//     let x = touchendX - touchstartX;
//     let y = touchendY - touchstartY;
//     let xy = Math.abs(x / y);
//     let yx = Math.abs(y / x);
//     if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
//         if (yx <= limit) {
//             if (x < 0) {
//                 console.log("left");
//             } else {
//                 console.log("right");
//             }
//             //I only care if it is left or right.
//             // Swipe classes are added to let hover effects show
//             if (box.getAttribute('class') == 'swiped') {
//                 box.removeAttribute('class', 'swiped');
//             } else {
//                 box.setAttribute('class', 'swiped');
//             } 
//         }
//         if (xy <= limit) {
//             if (y < 0) {
//                 console.log("top");
//             } else {
//                 console.log("bottom");
//             }
//         }
//     } else {
//         console.log("tap");
//     }
// }