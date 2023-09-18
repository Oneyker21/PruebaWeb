const cuadro = document.getElementById("cuadro");

cuadro.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        // Clic izquierdo para mover el cuadro
        let offsetX = e.clientX - cuadro.getBoundingClientRect().left;
        let offsetY = e.clientY - cuadro.getBoundingClientRect().top;

        document.addEventListener("mousemove", moveCuadro);

        function moveCuadro(e) {
            cuadro.style.left = e.clientX - offsetX + "px";
            cuadro.style.top = e.clientY - offsetY + "px";
        }

        cuadro.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", moveCuadro);
        });
    }
});

cuadro.addEventListener("dblclick", () => {
    // Doble clic para mostrar un cuadro de diálogo de cambio de radio de borde
    const radius = prompt("Ingrese el radio del borde (por ejemplo, '10px'):");
    if (radius !== null) {
        cuadro.style.borderRadius = radius;
    }
});