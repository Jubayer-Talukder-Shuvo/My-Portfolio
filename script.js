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



function navShow() {
    const navUl = document.querySelector(".nav-ul");
    navUl.classList.add("show");

}

function navClose() {
    const navUl = document.querySelector(".nav-ul");
    navUl.classList.remove("show");

}

