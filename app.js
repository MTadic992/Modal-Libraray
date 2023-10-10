function showModal(text, options) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'myModal';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    if (options.size) {
        modalContent.classList.add(options.size);
    }

    if (options.animation) {
        modalContent.classList.add(options.animation);
    }

    if (options.closeButton) {
        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.id = 'closeModal';
        closeButton.innerHTML = '&times;';

        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        modalContent.appendChild(closeButton);
    }

    const modalText = document.createElement('p');
    modalText.textContent = text;

    modalContent.appendChild(modalText);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    if (options.overlayClickClose) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    modal.style.display = 'block';
}

document.getElementById('openModal').addEventListener('click', function () {
    const options = {
        animation: 'slide-in', // fade, slide-in, zoom
        size: 'large',  // small, medium, large
        closeButton: true, // will show close button if true
        overlayClickClose: true // will close modal if clicked on overlay
    };

    showModal('Hello, World!', options);
});
