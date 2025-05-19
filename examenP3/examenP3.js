function calcularPropina() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);
    
    // Verificamos que los valores sean válidos
    if (isNaN(subtotal) || isNaN(porcentaje) || subtotal <= 0 || porcentaje <= 0) {
        alert("Por favor ingresa valores válidos para el subtotal y el porcentaje.");
        return;
    }

    // Calculamos la propina y el total
    const propina = subtotal * (porcentaje / 100);
    const total = subtotal + propina;

    // Mostramos los resultados
    document.getElementById('propina').textContent = `$${propina.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    
    // Mostramos la sección de resultados
    document.getElementById('resultado').style.display = 'block';
}
