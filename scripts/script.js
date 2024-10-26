const started1 = document.getElementById("status")

const start1 = document.getElementById("start");
const end1 = document.getElementById("end")

start1.addEventListener("mouseover", (event) =>{
    console.log("Hovered");
    start1.style.backgroundColor = "#059b05"
    started1.innerHTML = "Game Started"
})




const bounds = document.getElementsByClassName("boundary");


for (let i = 0; i < bounds.length; i++) {
    bounds[i].addEventListener("mouseout", (event) => {
        //to stop the delay 
        event.stopPropagation();

       started1.innerHTML = "You lost"
    });
}


end1.addEventListener("mouseover", event =>{
    started1.innerHTML = "You Won"
})