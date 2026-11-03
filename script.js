const page = document.querySelector(".page");
const testSticker = document.getElementById("testSticker");
console.log(testSticker)

testSticker.addEventListener("pointerdown", function(event) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
    const offsetX = event.clientX - testSticker.getBoundingClientRect().left;
    const offsetY = event.clientY - testSticker.getBoundingClientRect().top;
    console.log(offsetX, offsetY);

    const pageRect = page.getBoundingClientRect();

    function moveSticker(event) {
        testSticker.style.left = (event.clientX - pageRect.left - offsetX) + "px";
        testSticker.style.top = (event.clientY - pageRect.top - offsetY) + "px";
    }

    function stopDragging() {
        document.removeEventListener("pointermove", moveSticker);
        document.removeEventListener("pointerup", stopDragging);
    }
    
    document.addEventListener("pointermove", moveSticker);
    document.addEventListener("pointerup", stopDragging);
});
