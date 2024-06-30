// Función para calcular el índice de masa corporal (IMC)
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Ejemplo de uso
let peso = parseFloat(prompt("Ingrese su peso en kilogramos"));
let altura = parseFloat(prompt("Ingrese su altura en metros"));

let imc = calcularIMC(peso, altura);
alert(`Tu índice de masa corporal (IMC) es: ${imc.toFixed(2)}`);
