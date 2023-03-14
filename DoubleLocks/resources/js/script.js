// initialize an empty array to store the clicked element IDs
let selected = []
const password = ['bull', 'bear', 'mandarin']

// select all photos with class 'grid-item'
const photos = document.querySelectorAll('.grid-item')

//check if password is valid
function checkValid(selected, password) {
    if (JSON.stringify(selected) === JSON.stringify(password)) {
        console.log('Correct Combination!')
    } else {
        //empty password
        while (selected.length > 0) {
            selected.pop()
        }
        console.log('Invalid Password')
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
    if (selected.length === 3) {
        checkValid(selected, password)
    }
  });
});