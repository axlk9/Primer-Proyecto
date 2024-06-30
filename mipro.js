function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    let imc = peso / (altura * altura);
    document.getElementById('resultado').textContent = `Tu índice de masa corporal (IMC) es: ${imc.toFixed(2)}`;
    return imc;
}
