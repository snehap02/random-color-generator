const hexColor = document.querySelector('.hex');
const rgbColor = document.querySelector('.rgb');
const generateBtn = document.querySelector('.btn');
const colorPallate = document.querySelector('.color-pallate');
const colorCode = document.querySelector('.color-codes')

function randomRgb(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

function newhexColor(){
    let hexaColor = Math.floor(Math.random() * 16777215);
    let newHexColor = `#${hexaColor.toString(16)}`;
    return newHexColor;
}

generateBtn.addEventListener('click', () => {
    let color = randomRgb();
    rgbColor.innerText = color;
    colorPallate.style.backgroundColor = color;
    let nextColor = newhexColor();
    hexColor.innerText = nextColor;
})


