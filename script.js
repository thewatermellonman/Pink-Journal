const page = document.querySelector(".page");

let selectedElement = null;
const sizeSlider = document.getElementById("sizeSlider");

const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");
const sticker3 = document.getElementById("sticker3");
const sticker4 = document.getElementById("sticker4");
const sticker5 = document.getElementById("sticker5");
const sticker6 = document.getElementById("sticker6");
const sticker7 = document.getElementById("sticker7");
const sticker8 = document.getElementById("sticker8");
const sticker9 = document.getElementById("sticker9");
const sticker10 = document.getElementById("sticker10");


function positionSticker(element) {
    element.style.left = "225px";
    element.style.top = "275px";
}

function makeDraggable(element) {
    element.addEventListener("pointerdown", function(event) {
        selectedElement = element;
        console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
        const offsetX = event.clientX - element.getBoundingClientRect().left;
        const offsetY = event.clientY - element.getBoundingClientRect().top;
        console.log(offsetX, offsetY);

        const pageRect = page.getBoundingClientRect();

        function moveSticker(event) {
            element.style.left = (event.clientX - pageRect.left - offsetX) + "px";
            element.style.top = (event.clientY - pageRect.top - offsetY) + "px";
        }

        function stopDragging() {
            document.removeEventListener("pointermove", moveSticker);
            document.removeEventListener("pointerup", stopDragging);
        }

        document.addEventListener("pointermove", moveSticker);
        document.addEventListener("pointerup", stopDragging);
    });
}

sizeSlider.addEventListener("input", function() {
    if (selectedElement !== null) {
        selectedElement.style.width = sizeSlider.value + "px";
    }
})

makeDraggable(sticker1);
makeDraggable(sticker2);
makeDraggable(sticker3);
makeDraggable(sticker4);
makeDraggable(sticker5);
makeDraggable(sticker6);
makeDraggable(sticker7);
makeDraggable(sticker8);
makeDraggable(sticker9);
makeDraggable(sticker10);