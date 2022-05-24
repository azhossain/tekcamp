// const accordion = document.getElementsByClassName('faq-item');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }

const toggles = document.querySelectorAll(".question-section")

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})