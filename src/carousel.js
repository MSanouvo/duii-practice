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

const carousel = document.querySelector('#carousel-container')
const pictureArray = document.querySelector('#pictures')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

function shiftLeft(){
    left.addEventListener('click', ()=>{
        const firstElement = imageArray.shift()
        imageArray.push(firstElement)
        imageCarousel()
    })
}

function shiftRight(){
    right.addEventListener('click', ()=>{
        changeRight()
    })
}

function changeRight(){
    const lastElement = imageArray.pop()
    imageArray.unshift(lastElement)
    imageCarousel()
}

function addImageToArray(){
    imageArray.push(florkBigHeart)
    imageArray.push(florkSmallHeart)
    imageArray.push(florkOkay)
    imageArray.push(florkPlease)
    imageArray.push(florkConfused)
}

function imageCarousel(){
    while(pictureArray.firstChild){
        pictureArray.removeChild(pictureArray.lastChild)
    }
    console.log(imageArray)
    let i=0
    while(i<imageArray.length){
        pictureArray.appendChild(imageArray[i])
        if(i === 2){
            imageArray[i].className = 'frame'
        } else{
            imageArray[i].className = 'normal'
        }
        i++
    }
    


}


export {imageCarousel, shiftLeft, shiftRight ,addImageToArray, changeRight}