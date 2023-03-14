//initialize an empty array to store the clicked element IDs
let selected = []
const password = ['bull', 'bear', 'mandarin']
//select all photos with class 'grid-item'
const photos = document.querySelectorAll('.grid-item')
//circle indicators
const indicator = document.querySelector('#indicator')
const circles = document.querySelectorAll('.circle')
let i = 0

//check if password is valid
function checkValid(selected, password) {
    if (JSON.stringify(selected) === JSON.stringify(password)) {
        console.log('Correct Combination!')
        //redirect
        //window.location.replace(url);
    } else {
        //empty the password
        console.log('Invalid Password')
        setTimeout(clearCircles, 200)
        clearPassword()
        shuffleImage()
    }
}

function clearCircles() {
    for (i = 2; i > -1; i--) {
        circles[i].classList.remove('light-up')
    }
    i = 0;
    indicator.classList.add('sway')
}

function clearPassword() {
    while (selected.length > 0) {
        selected.pop()
    }
    indicator.classList.remove('sway')
}

//Shuffle Image Position
function shuffleImage() {
    const container = document.querySelector('.grid-container')
    let photos = Array.from(container.children)
    shuffleArray(photos)
    photos.forEach(function(photo, index) {
        photo.style.gridRow = Math.floor(index / 3) + 1;
        photo.style.gridColumn = (index % 3) + 1;
    });
}

//Randomize array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
} 

// add a click event listener to each photo
photos.forEach(photo => {
  photo.addEventListener('click', () => {
    // add the clicked element's ID to the clickedIds array
    const img = photo.querySelector('img')
    selected.push(img.id)
    // log the updated array to the console
    console.log(selected)
    circles[i++].classList.add('light-up')
    if (selected.length === 3) {
        checkValid(selected, password)
    }
  });
});