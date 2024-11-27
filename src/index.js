import "./style.css";

const dropdownMenu = document.querySelector('.drop-menu')
const itemList = document.querySelector('#item-container')

addDropdown(dropdownMenu, itemList)

function addDropdown(parent, child){
    //Configure CSS so that:
    //hidden === visibility: hidden;
    //visible === visibility: visible;
    child.className = 'hidden'
    parent.addEventListener('click', ()=>{
        if(child.className === 'visible'){
            child.className = 'hidden'
        } else{
            child.className = 'visible'
        }
    })
}