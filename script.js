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

function randomHex(){
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);
    r = (r.length === 2) ? r : '0' + r;
    g = (g.length === 2) ? g : '0' + g;
    b = (b.length === 2) ? b : '0' + b;
    let newHexColor = `#${r}${g}${b}`;
    return newHexColor;
}

generateBtn.addEventListener('click', () => {
    let color = randomRgb();
    rgbColor.innerText = color;
    colorPallate.style.backgroundColor = color;
})

secondBtn.addEventListener('click', () => {
    let hexCol = randomHex();
    hexColor.innerText = hexCol;
    colorPallate.style.backgroundColor = hexCol;
})



