
let divNum = 25
let divNum1 = 25
let color = 'white'
createDivs(divNum * divNum1)
let theDivs1 = document.querySelectorAll('#theDivs')

function colorChoose(){
    
    theDivs1 = document.querySelectorAll('#theDivs')
    
    theDivs1.forEach((d) =>{
        d.addEventListener('mouseenter', (d) =>{
            color = document.getElementById('color').value;
            d.target.style.backgroundColor = color
        })}
        )
   }

function randomRGB(){
let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`;
return rgb
}

function rgbON(){
theDivs1 = document.querySelectorAll('#theDivs')
    theDivs1.forEach((d) =>{
        d.addEventListener('mouseenter', (d) =>{
            color = randomRGB() 
            d.target.style.backgroundColor = color
        })
    })
}

function colorRed(){
    theDivs1 = document.querySelectorAll('#theDivs')
        theDivs1.forEach((d) =>{
            d.addEventListener('mouseenter', (d) =>{
                d.target.style.backgroundColor = 'red'
            })
        })
    }

function colorWhite(){
    theDivs1 = document.querySelectorAll('#theDivs')
        theDivs1.forEach((d) =>{
            d.addEventListener('mouseenter', (d) =>{
                d.target.style.backgroundColor = 'white'
            })
        })
    }

function colorBlue(){
    theDivs1 = document.querySelectorAll('#theDivs')
        theDivs1.forEach((d) =>{
            d.addEventListener('mouseenter', (d) =>{
                d.target.style.backgroundColor = '#0000ff'
            })
        })
    }
    
function colorPink(){
    theDivs1 = document.querySelectorAll('#theDivs')
        theDivs1.forEach((d) =>{
            d.addEventListener('mouseenter', (d) =>{
                d.target.style.backgroundColor = '#ff0066'
            })
        })
    }


function colorGreen(){
    theDivs1 = document.querySelectorAll('#theDivs')
        theDivs1.forEach((d) =>{
            d.addEventListener('mouseenter', (d) =>{
                d.target.style.backgroundColor = '#00cc00'
            })
        })
    }

function createDivs(numX = divNum * divNum1, className = 'theDivs'){
    const container = document.querySelector('#container')
    
    container.innerHTML = ''
  
    for (i = 0; i < numX; i++){
        const theDiv = document.createElement('div')
        container.appendChild(theDiv)
        theDiv.setAttribute('id', 'theDivs')
    }
}


function resetTable(){
    theDivs1.forEach((d) =>{
        d.style.backgroundColor = 'black'
        color = 'white'
    })
}

theDivs1.forEach((d) =>{
    d.addEventListener('mouseenter', (d) =>{
        d.target.style.backgroundColor = color
    })
})

const slider = document.querySelector('#slider')

const screenVal = document.querySelector('.value');

slider.addEventListener('input', function(){
    let num1 = document.getElementById('slider').value;
    screenVal.textContent = num1;
    divNum = num1 * num1
    createDivs(divNum)
    theDivs1 = document.querySelectorAll('#theDivs')
    theDivs1.forEach((d) =>{
        d.addEventListener('mouseenter', (d) =>{
            d.target.style.backgroundColor = color
        })
    })
    container.setAttribute('style', `grid-template-columns: repeat(${num1}, 1rem); grid-template-rows: repeat(${num1}, 1rem);`);
    color = 'white'
});





