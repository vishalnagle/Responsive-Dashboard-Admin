const sideMenu = document.querySelector("aside")
const closeBtn = document.querySelector("#close-btn")
const menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener("click",()=>{
    sideMenu.style.display="block"
})
closeBtn.addEventListener("click",()=>{
    sideMenu.style.display="none"
})