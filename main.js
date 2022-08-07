// function darkTheme() {
//     document.body.classList.toggle('dark');
// }

const themeButton = document.querySelector('.theme-button')
function lightTheme() {
    if (themeButton.innerHTML === 'Lightmode') {
        document.body.classList.add('light');
        themeButton.innerHTML = 'Darkmode'
    } else {
        document.body.classList.remove('light');
        themeButton.innerHTML = 'Lightmode'
    }
}


const sectionHeadings = document.querySelector('h1');


sectionHeadings.innerHTML = sectionHeadings.innerText.split('').map((letter, index) => {
    return `<span class="letter" style="--delay: ${index * 100}ms;">${letter}</span>`
}).join("");

const letters = document.querySelectorAll('.letter');
letters.forEach(letter => {
    letter.addEventListener('animationend', () => {
        letter.classList.add('show');
    })
})







// sectionHeadings.innerHTML = sectionHeadings.innerText.split('').map((e, i) => e != " " ? `<span class="letter">${e}</span>` : `<span class="space"> </span>`).join("");


// sectionHeadings.innerHTML = sectionHeadings.innerText.split('').map((letter, index) => letter != " " ? `<span class="letter" style="--delay: ${index * 100}ms;" aria-hidden="true">${letter}</span>` : `<span>\xa0</span>`).join("");