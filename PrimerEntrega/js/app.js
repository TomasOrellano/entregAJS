function verificarPeso() {
    // Obtenemos el valor del campo de entrada
    let pesoTernero = document.getElementById("pesoTernero").value;
    pesoTernero = parseFloat(pesoTernero);

    const resultado = document.getElementById("resultado");
    
    // Verificamos si el peso es suficiente para la venta
    if (pesoTernero >= 400) {
        const claveCorrecta = "Vender";
        let claveIngresada = prompt("Ingrese la clave para autorizar la venta (Ayuda: la clave es vender)").trim();

        if (claveIngresada === claveCorrecta) {
            resultado.textContent = "Clave correcta. El ternero ha sido autorizado para la venta.";
        } else {
            resultado.textContent = "Clave incorrecta. Intente nuevamente.";
        }
    } else {
        // Si el peso es menor a 400 kg, indicamos que no está listo para la venta
        resultado.textContent = "El ternero pesa " + pesoTernero + " kg, por lo tanto, no está listo para la venta.";
    }
}
