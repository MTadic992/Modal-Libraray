function createModalElement() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'myModal';
    return modal;
}

function createModalContent(options) {
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    if (options.size) {
        modalContent.classList.add(options.size);
    }

    if (options.animation) {
        modalContent.classList.add(options.animation);
    }

    return modalContent;
}

function addModalText(modalText) {
    const modalTextElement = document.createElement('p');
    modalTextElement.textContent = modalText;
    return modalTextElement;
}

function createCloseButton(modal) {
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.id = 'closeModal';
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', function () {
        hideModal(modal);
    });

    return closeButton;
}

function hideModal(modal) {
    modal.style.display = 'none';
}

function showOverlayClickClose(modal, options) {
    if (options.overlayClickClose) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                hideModal(modal);
            }
        });
    }
}

function showModal(text, options) {
    const modal = createModalElement();
    const modalContent = createModalContent(options);
    const modalTextElement = addModalText(text);

    modalContent.appendChild(modalTextElement);

    if (options.closeButton) {
        const closeButton = createCloseButton(modal);
        modalContent.appendChild(closeButton);
    }

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = 'block';

    showOverlayClickClose(modal, options);
}


export default showModal;
