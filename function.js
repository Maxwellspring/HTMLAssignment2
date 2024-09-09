// 

// function ShowStuff() {
    // var T = document.getElementById("ShowMochi");
    // T.style.display = "block";  // <-- Set it to block
// }

// function Changeletext() {



// const text = document.getElementById("JUAN")

// document.getElementById("TREE").innerText = text
// }

// function TestsFunction() {
//     var T = document.getElementById("TestsDiv");
//     T.style.display = "block";  // <-- Set it to block
// }




document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('showtrash');
    const imageContainer = document.querySelector('.trashymochi');

    button.addEventListener('click', () => {
        if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
            imageContainer.style.display = 'show';
            button.textContent = 'Hide Images';
        } else {
            imageContainer.style.display = 'none';
            button.textContent = 'Show Images';
        }
    });
});
