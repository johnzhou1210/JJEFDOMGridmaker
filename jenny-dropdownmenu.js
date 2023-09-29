// get element for selecting color
let selectColor = document.body.querySelector("#select-color");

// when the value is chosen on click, the color value will be collected
selectColor.addEventListener("click", () => {
    console.log(selectColor.value);
});