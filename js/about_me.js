function isElementUnderBottom(elem, triggerDiff) {
    const {
        top
    } = elem.getBoundingClientRect();
    const {
        innerHeight
    } = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }

    })

    const els = document.querySelectorAll('.show');
    els.forEach(elem => {
        if (isElementUnderBottom(elem, -600)) {
            elem.style.top = "-100%";
            // elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.top = "0px";
            // elem.style.transform = 'translateY(0px)';
        }
    })

    const one = document.querySelectorAll('.come1');
    one.forEach(elem => {
        if (isElementUnderBottom(elem, -700)) {
            elem.style.left = "-100%";
            // elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.left = "0px";
            // elem.style.transform = 'translateY(0px)';
        }
    })

    const two = document.querySelectorAll('.come2');
    two.forEach(elem => {
        if (isElementUnderBottom(elem, -600)) {
            elem.style.left = "-100%";
            // elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.left = "0px";
            // elem.style.transform = 'translateY(0px)';
        }
    })

    const three = document.querySelectorAll('.come3');
    three.forEach(elem => {
        if (isElementUnderBottom(elem, -300)) {
            elem.style.left = "-100%";
            // elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.left = "0px";
            // elem.style.transform = 'translateY(0px)';
        }
    })

    const four = document.querySelectorAll('.come4');
    four.forEach(elem => {
        if (isElementUnderBottom(elem, -100)) {
            elem.style.left = "-100%";
            // elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.left = "0px";
            // elem.style.transform = 'translateY(0px)';
        }
    })
}
window.addEventListener('scroll', handleScroll);