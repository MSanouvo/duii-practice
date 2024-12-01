import Confused from "./images/flork-confused.png"
import BigHeart from "./images/flork-heart.png"
import SmallHeart from "./images/flork-small-heart.png"
import Please from "./images/flork-pwease.png"
import Okay from "./images/flork-okay.png"

const florkConfused = document.createElement('img')
florkConfused.src = Confused
const florkBigHeart = document.createElement('img')
florkBigHeart.src = BigHeart
const florkSmallHeart = document.createElement('img')
florkSmallHeart.src = SmallHeart
const florkPlease = document.createElement('img')
florkPlease.src = Please
const florkOkay = document.createElement('img')
florkOkay.src = Okay

const imageArray = []
let currentImage = 1

const pictureArray2 = document.querySelector('#pictures2')
const left = document.querySelector('#left2')
const right = document.querySelector('#right2')
let dots = document.getElementsByClassName('dots')

function changeButtons(){
    left.addEventListener('click', ()=>{
        changeSlide(-1)
    })
    right.addEventListener('click', ()=>{
        changeSlide(1)
    })
}

function changeSlide(n){
    renderImages(currentImage += n)
}

function currentSlide(){
    console.log(dots)
    for(let i = 0; i<dots.length; i++){
        dots[i].addEventListener('click', ()=>{
            console.log(dots)
            renderImages(currentImage = i+1)
        })
    }
}

function addImageToArray2(){
    imageArray.push(florkBigHeart)
    imageArray.push(florkSmallHeart)
    imageArray.push(florkOkay)
    imageArray.push(florkPlease)
    imageArray.push(florkConfused)
    let i = 0
    while(i<imageArray.length){
        pictureArray2.appendChild(imageArray[i])
        i++
    }
}

function renderImages(n){
    let i= 0
    
    for(i=0; i<imageArray.length; i++){
        imageArray[i].className = "normal"
    }
    if (n > imageArray.length) {currentImage = 1}
    if (n < 1) {currentImage = imageArray.length}


    for (i=0; i< dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', "")
    }
    imageArray[currentImage-1].className = 'frame'
    dots[currentImage-1].className += " active"

}

export {renderImages, changeButtons, currentSlide, addImageToArray2}