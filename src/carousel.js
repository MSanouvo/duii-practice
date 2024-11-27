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
const frame = document.querySelector('#frame')

function addImageToArray(){
    imageArray.push(florkBigHeart)
    imageArray.push(florkSmallHeart)
    imageArray.push(florkOkay)
    imageArray.push(florkPlease)
    imageArray.push(florkConfused)
    console.log(imageArray)
}

function imageCarousel(){
    addImageToArray()
    for(let i=0; i<imageArray.length; i++){
        frame.appendChild(imageArray[i])
    }
    


}


export {imageCarousel}