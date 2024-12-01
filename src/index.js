import "./style.css";
import { addDropdown } from "./dropdown";
import { imageCarousel, shiftLeft, shiftRight, addImageToArray, changeRight } from "./carousel";
import { renderImages, currentSlide, changeButtons, addImageToArray2 } from "./carouselv2";

const dropdownMenu = document.querySelector('.drop-menu')
const itemList = document.querySelector('#item-container')

addDropdown(dropdownMenu, itemList)
addImageToArray()
imageCarousel()
shiftLeft()
shiftRight()

addImageToArray2()
renderImages()
currentSlide()
changeButtons()

// setInterval(changeRight, 5000)