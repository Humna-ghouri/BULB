// turn on Function

function bulbOn(){
    let bulbObject = document.querySelector(".bulboff")
    bulbObject.setAttribute("src","images/onn-img.jpg")
}


function bulbOff(){
    let bulbObject = document.querySelector(".bulboff")
    bulbObject.setAttribute("src","./images/bulb-off.jpg")
}
