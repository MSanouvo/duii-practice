import "./style.css";
import { addDropdown } from "./dropdown";
import { imageCarousel } from "./carousel";

const dropdownMenu = document.querySelector('.drop-menu')
const itemList = document.querySelector('#item-container')

addDropdown(dropdownMenu, itemList)
imageCarousel()
