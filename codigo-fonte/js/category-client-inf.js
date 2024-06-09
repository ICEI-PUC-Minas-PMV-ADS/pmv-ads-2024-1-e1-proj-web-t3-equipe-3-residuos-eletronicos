lucide.createIcons();

let select = document.querySelector(".select"),
    selectedValue = document.querySelector("#selected-value"),
    optionViewButton = document.querySelector("#option-view-button"),
    inputsOptions = document.querySelectorAll(".option input");

inputsOptions.forEach(input =>{
    input.addEventListener('click', event => {
        selectedValue.textContent = input.dataset.label;

        // const isMouseOrTouch =
        // event.pointerType = "mouse" ||
        // event.pointerType === "touch"
        //
        // isMouseOrTouch && optionViewButton.click()
    })
})