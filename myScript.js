let wowElements = document.querySelectorAll('.hImg');

wowElements.forEach((wowElement, index) => {
    wowElement.addEventListener('click', () => {
        aniFn(`time${index + 1}.html`, wowElement);
    });
});

function aniFn(destination, clickedElement) {
    wowElements.forEach(element => {
        element.classList.remove('on');
    });

    clickedElement.classList.add('on');

    setTimeout(() => {
        redirectToPage(destination);
    }, 2000);
}

function redirectToPage(destination) {
    window.location.href = destination;
}
