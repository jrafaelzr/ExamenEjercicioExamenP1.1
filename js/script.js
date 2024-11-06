function calculate() {
    let product1 = document.getElementById('product1').value;
    let product2 = document.getElementById('product2').value;
    let product3 = document.getElementById('product3').value;
    let product4 = document.getElementById('product4').value;
    let product5 = document.getElementById('product5').value;

    
    if (!product1 || !product2 || !product3 || !product4 || !product5) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores en todos los campos de productos.',
        });
        return;
    }


    product1 = parseFloat(product1);
    product2 = parseFloat(product2);
    product3 = parseFloat(product3);
    product4 = parseFloat(product4);
    product5 = parseFloat(product5);

    let subtotal = product1 + product2 + product3 + product4 + product5;
    document.getElementById('subtotal').value = 'L' + subtotal.toFixed(2);

    let discountRate = 0;
    if (subtotal >= 1000 && subtotal <= 4999.99) {
        discountRate = 0.10;
    } else if (subtotal >= 5000 && subtotal <= 8999.99) {
        discountRate = 0.20;
    } else if (subtotal >= 9000 && subtotal <= 12999.99) {
        discountRate = 0.30;
    } else if (subtotal >= 13000) {
        discountRate = 0.40;
    }

    let discountAmount = subtotal * discountRate;
    let total = subtotal - discountAmount;

    document.getElementById('discount').value = 'L' + discountAmount.toFixed(2);
    document.getElementById('total').value = 'L' + total.toFixed(2);

    document.getElementById('discountLabel').textContent = `Descuento ${discountRate * 100}%`;
}

function clearFields() {
    document.getElementById('discountLabel').textContent = 'Descuento 0%';
    document.getElementById('subtotal').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('total').value = '';
}