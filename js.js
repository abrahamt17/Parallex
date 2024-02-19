let textt = document.querySelector('.text1')
let scroll = document.querySelector('.scroll')
let text = document.querySelector('.text2')
let moonp = document.querySelector('.moon.purple')
let moon = document.querySelector('.moon.purple')
let moon1 = document.querySelector('.moon1')
let page2 = document.querySelector('.page2')
let mountain = document.querySelector('.mountains')
const men = document.querySelector('.men')
let glass = document.querySelector('.glasses ')
let boy = document.querySelector('.men')
let girl = document.querySelector('.women')

//page2

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let texttt = 'lorem ipsum'
    let tex = 'A TAIL OF TWO DUMBS '
    let rightin = 38;
    console.log(value)

    //    rightt.style.left = rightin + value * -1.5 + `px `;






    moon.style.left = value * -1.5 + `px `;
    moon1.style.left = value * 1.5 + `px `;
    let mt = value / 10

    // mountain.style.top = mt / 10 + px `;

    //textt.style.top = value * 0.1 + 'px';
    //  text.style.marginTop = value * -0.8 + 'px';

    console.log(textt.style.left)

    //dont

    if (value > 147) {
        textt.innerHTML = texttt
        textt.style.opacity = value * 0;
    } else {
        textt.innerHTML = tex
        textt.style.opacity = value * 1 + 1;
    }
    if (value > 520) {

        textt.style.opacity = value * 1;
    } else {
        textt.innerHTML = tex

    }

    //scroll
    scroll.style.marginTop = value * 1.2 + 'px';
    // console.log(scroll.style.marginTop)
    let z = 1;
    if (value > 182) {
        scroll.innerHTML = 'Read now'

    } else { scroll.innerHTML = 'Scroll' }
    // if (value > 238) {
    //     scroll.style.marginTop = 355 + 'px'
    // }
    if (value > 300) {
        scroll.innerHTML = 'Keep Reading';

        console.log(scroll)

    }

    if (value > 200) {
        mountain.style.opacity = 0
    } else {

        mountain.style.opacity = 1;

    }


    if (value > 480) {
        mountain.classList.remove('width')
        moon.style.left = value * 0 + `px `;
        moon1.style.left = value * 0 + `px `;
    } else {
        mountain.classList.add('width')
        moon.style.left = value * -1.5 + `px `;
        moon1.style.left = value * 1.5 + `px `;
    }

})