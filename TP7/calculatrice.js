function calculate(operator) {
    // Récupérer les valeurs des deux numéros
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = 0;

    // Effectuer l'opération en fonction de l'opérateur
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Erreur (division par 0)';
            }
            break;
    }

    // Afficher le résultat
    document.getElementById('result').textContent = result;
}

function checkParity() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    // Vérifier la parité de chaque nombre
    let parity1 = num1 % 2 === 0 ? 'Pair' : 'Impair';
    let parity2 = num2 % 2 === 0 ? 'Pair' : 'Impair';

    // Afficher les résultats
    alert(`Le numéro 1 est ${parity1} et le numéro 2 est ${parity2}`);
}

function swapNumbers() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    // Permuter les valeurs
    document.getElementById('num1').value = num2;
    document.getElementById('num2').value = num1;
}
