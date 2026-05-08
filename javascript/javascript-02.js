// let b1 = document.getElementById("b1")
// let b2 = document.getElementById("b2")
// let b3 = document.getElementById("b3")
// let b4 = document.getElementById("b4")
// let b5 = document.getElementById("b5")
// let b6 = document.getElementById("b6")
// let b7 = document.getElementById("b7")
// let b8 = document.getElementById("b8")
// let b9 = document.getElementById("b9")
// let b0 = document.getElementById("b0")

let resultado = document.getElementById("resultado");
let botones = document.getElementsByTagName("button");
let prm1 = "";
let operador = "";

for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    
    if (boton.className !== "operadores") {
        // Es un número
        boton.addEventListener("click", escribirNumero);
    } else {
        // Operador o función especial
        boton.addEventListener("click", manejarOperador);
    }
}

function escribirNumero(e) {
    // sen concatena el valor actual con el nuevo número presionado
    resultado.value += e.target.innerText;
}

function manejarOperador(e) {
    const textoBoton = e.target.innerText;

    if (textoBoton === "Limpiar") {
        limpiar();
    } else if (textoBoton === "Igual") {
        calcular();
    } else {
        // Es +, -, *, /
        prm1 = resultado.value; // se guarda el primer número
        operador = textoBoton;   // se guarda qué operación haremos
        resultado.value = "";    // se guarda la pantalla para el segundo número
    }
}

function limpiar() {
    resultado.value = "";
    prm1 = "";
    operador = "";
}

function calcular() {
    let prm2 = resultado.value;
    let calculo = 0;
    
    // Convertimos a números para operar
    let num1 = parseFloat(prm1);
    let num2 = parseFloat(prm2);

    if (isNaN(num1) || isNaN(num2)) return;

    switch (operador) {
        case "+": calculo = num1 + num2; break;
        case "-": calculo = num1 - num2; break;
        case "*": calculo = num1 * num2; break;
        case "/": calculo = num1 / num2; break;
    }

    resultado.value = calculo;
}