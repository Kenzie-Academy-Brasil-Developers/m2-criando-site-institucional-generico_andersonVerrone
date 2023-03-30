function init() {
    const btnActiveModal = document.querySelectorAll('.btn__activeModal');
    const modal = document.querySelector('.modal');
    const btnClose = document.querySelector('.close');

    setShowModal(btnActiveModal,modal);
    setCloseModal(btnClose , modal);
}

function setShowModal(buttons , modal) {
    buttons.forEach((element) => {
        element.addEventListener('click', () => {
            modal.showModal();
        })
    });
}

function setCloseModal(button , modal) {
    button.addEventListener('click', () => {
        modal.close();
    })
}

init();