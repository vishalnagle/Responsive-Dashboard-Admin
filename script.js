const sideMenu = document.querySelector("aside")
const closeBtn = document.querySelector("#close-btn")
const menuBtn = document.querySelector("#menu-btn")
const themeToggler = document.querySelector(".theme-toggler")

const recentUpdates=document.querySelector(".updates")
const msg=document.querySelector(".message")
const msgCount = document.querySelector(".message-count")

menuBtn.addEventListener("click",()=>{
    sideMenu.style.display="block"
})
closeBtn.addEventListener("click",()=>{
    sideMenu.style.display="none"
})

themeToggler.addEventListener("click",(e)=>{

    document.body.classList.toggle("dark-theme-variables")
    themeToggler.querySelector("span:nth-child(1)").classList.toggle('active')
    themeToggler.querySelector("span:nth-child(2)").classList.toggle('active')
})


// fill out the table

Orders.forEach(order=>{
    const  tr = document.createElement('tr');
    const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class=${order.shipping==="Declined" ? "danger" : order.shipping === "Pending" ? "warning" : order.shipping==="Delivered" ? "success" : 'primary'}>${order.shipping}</td>
                    <td class="primary">detail</td>
     `;
     tr.innerHTML=trContent
     document.querySelector("table tbody").appendChild(tr)
})

msg.addEventListener("click",(e)=>{
    msgCount.style.display="none"

//     recentUpdates.style.boxShadow = " 0 1rem 2rem rgba(0,0,0,0.5)"
//    setTimeout(() => {
//     recentUpdates.style.boxShadow = "var(--box-shadow)"
//    }, 1000);
  e.preventDefault()
})


