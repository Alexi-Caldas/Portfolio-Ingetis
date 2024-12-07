function calculateTotal() {

    let price1 = parseFloat(document.getElementById('price1').value) || 0;
    let quantity1 = parseInt(document.getElementById('quantity1').value) || 0;

    let price2 = parseFloat(document.getElementById('price2').value) || 0;
    let quantity2 = parseInt(document.getElementById('quantity2').value) || 0;

    let price3 = parseFloat(document.getElementById('price3').value) || 0;
    let quantity3 = parseInt(document.getElementById('quantity3').value) || 0;

    let total1 = price1 * quantity1;
    let total2 = price2 * quantity2;
    let total3 = price3 * quantity3;

    let grandTotal = total1 + total2 + total3;

    document.getElementById('total').textContent = grandTotal.toFixed(2) + ' €';
}
