
function farm(distance, speed, element) {
    const yep = document.querySelector(element)
    yep.style.transform = `translateY(${distance*speed}px)`
}

window.addEventListener('scroll', () => {
    farm(window.scrollY, 0.1, '.top');
    farm(window.scrollY, -0.2, '.middle');
    farm(window.scrollY, -0.3, '.bottom');
    farm(window.scrollY, -0.9, '.sun');
})