import "./style.css";
import { addDropdown } from "./dropdown";
import { imageCarousel, shiftLeft, shiftRight, addImageToArray } from "./carousel";

const dropdownMenu = document.querySelector('.drop-menu')
const itemList = document.querySelector('#item-container')

addDropdown(dropdownMenu, itemList)
addImageToArray()
imageCarousel()
shiftLeft()
shiftRight()
