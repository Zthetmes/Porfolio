
const proyectos = document.querySelectorAll(".proyecto");

function borrarActive() {
    for (let i = 0; i < proyectos.length; i++)
        proyectos[i].classList.remove("active");
}

for (let i = 0; i < proyectos.length; i++) {
    proyectos[i].addEventListener('click', event => {
        borrarActive();
        proyectos[i].classList.add("active");
    });
}