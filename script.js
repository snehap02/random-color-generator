// alert("Copy Text part 'COMING SOON'");

const hexColor = document.querySelector('.hex');
const rgbColor = document.querySelector('.rgb');
const generateBtn = document.querySelector('.btn');
const secondBtn = document.querySelector('.btn1');
const colorPallate = document.querySelector('.color-pallate');
const colorCode = document.querySelector('.color-codes');

function randomRgb(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

    let red = Math.floor(Math.random() * 256).toString(16);
    let green = Math.floor(Math.random() * 256).toString(16);
    let blue = Math.floor(Math.random() * 256).toString(16);
    red = (red.length === 2) ? red : '0' + red;
    green = (green.length === 2) ? green : '0' + green;
    blue = (blue.length === 2) ? blue : '0' + blue;
    let newHexColor = `#${red}${green}${blue}`;
    console.log(newHexColor);

generateBtn.addEventListener('click', () => {
    let color = randomRgb();
    rgbColor.innerText = color;
    colorPallate.style.backgroundColor = color;
    // document.body.style.backgroundColor = color;
    // let nextColor = newhexColor();
    // hexColor.innerText = nextColor;
})



