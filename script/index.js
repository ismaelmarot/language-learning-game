// Definir palabras y sus opciones
const palabras = [
    { espanol: "perro", opciones: ["dog", "cat", "house", "car", "apple", "book"] },
    { espanol: "gato", opciones: ["cat", "dog", "house", "car", "apple", "book"] },
    { espanol: "casa", opciones: ["house", "cat", "dog", "car", "apple", "book"] },
    { espanol: "coche", opciones: ["car", "house", "cat", "dog", "apple", "book"] },
    { espanol: "manzana", opciones: ["apple", "house", "car", "cat", "dog", "book"] },
    { espanol: "libro", opciones: ["book", "apple", "house", "car", "cat", "dog"] }
];

let preguntaActual = 0;
let puntaje = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

function mostrarPregunta() {
    const pregunta = palabras[preguntaActual];
    document.getElementById("pregunta").textContent = pregunta.espanol;

    const opciones = document.getElementById("opciones");
    opciones.innerHTML = "";

    // Barajar las opciones
    const opcionesRandom = [...pregunta.opciones];
    opcionesRandom.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 6; i++) {
        const opcion = opcionesRandom[i];
        const botonOpcion = document.createElement("button");
        botonOpcion.textContent = opcion;
        botonOpcion.addEventListener("click", () => verificarRespuesta(opcion));
        opciones.appendChild(botonOpcion);
    }
}

function verificarRespuesta(respuesta) {
    const pregunta = palabras[preguntaActual];
    if (respuesta === pregunta.opciones[0]) {
        puntaje++;
        respuestasCorrectas++;
    } else {
        respuestasIncorrectas++;
    }
    preguntaActual++;

    if (preguntaActual < palabras.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu puntaje es: ${puntaje} de ${palabras.length}<br>Respuestas correctas: ${respuestasCorrectas}<br>Respuestas incorrectas: ${respuestasIncorrectas}`;
    
    document.getElementById("siguiente").style.display = "none";
    document.getElementById("reiniciar").style.display = "block";
}

function reiniciarJuego() {
    preguntaActual = 0;
    puntaje = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mostrarPregunta();
    document.getElementById("reiniciar").style.display = "none";
    document.getElementById("siguiente").style.display = "block";
}

document.getElementById("siguiente").addEventListener("click", () => mostrarPregunta());
document.getElementById("reiniciar").addEventListener("click", () => reiniciarJuego());
mostrarPregunta();
