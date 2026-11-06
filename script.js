const page = document.querySelector(".page");

const textButton = document.getElementById("addText")

let selectedElement = null;
const sizeSlider = document.getElementById("sizeSlider");

const stickerOptions = document.querySelectorAll(".sticker-option");

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

stickerOptions.forEach(function(sticker) {
    sticker.addEventListener("click", function() {
        const newSticker = sticker.cloneNode(true);

        newSticker.classList.remove("sticker-option");
        newSticker.classList.add("draggable");

        page.appendChild(newSticker);

        positionSticker(newSticker);
        makeDraggable(newSticker);
    })
})

textButton.addEventListener("click", function() {
    const newText = document.createElement("textarea");
    newText.value = "Type something here";
    newText.classList.add("draggable");
    page.appendChild(newText);
    positionSticker(newText);
    makeDraggable(newText);
})

sizeSlider.addEventListener("input", function() {
    if (selectedElement !== null) {
        selectedElement.style.width = sizeSlider.value + "px";
    }
})
