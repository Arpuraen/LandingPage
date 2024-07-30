document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function activateSection() {
        const hash = window.location.hash || '#home';
        sections.forEach(section => {
            if (`#${section.id}` === hash) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState({}, '', link.getAttribute('href'));
            activateSection();
        });
    });

    window.addEventListener('popstate', activateSection);

    activateSection();
});
