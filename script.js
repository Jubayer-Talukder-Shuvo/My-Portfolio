function addborderGradient(className) {
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('borderGradient');
    });

    el.addEventListener('mouseleave', () => {
        el.classList.remove('borderGradient');
    });
    });
}


addborderGradient('extrainfo');
addborderGradient('skillCard');
addborderGradient('project-card');