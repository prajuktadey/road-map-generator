document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adding event listener for the "try me now!" button
    const tryMeButton = document.querySelector('.cta');
    if (tryMeButton) {
        tryMeButton.addEventListener('click', (event) => {
            event.preventDefault();
            openChatbox(); // Call the openChatbox function when clicked
        });
    }
});
