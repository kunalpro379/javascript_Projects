const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalId;
const startChangingColor = function() {
if(!intervalId)
intervalId=setInterval(changebgColor,500);

function changebgColor(){
    document.body.style.backgroundColor=randomColor();
};
}

const stopChangingColor = function() {
    // You can add functionality here if needed
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);