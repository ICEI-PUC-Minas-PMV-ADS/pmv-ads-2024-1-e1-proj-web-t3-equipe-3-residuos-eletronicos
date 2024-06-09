const openModalButtonSave = document.querySelector('#save-open-modal');
const closeModalButtonSave = document.querySelector('#button-close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle('hide'));
}

[openModalButtonSave, closeModalButtonSave, fade].forEach((button) => {
    button.addEventListener('click', () => {toggleModal()});
})