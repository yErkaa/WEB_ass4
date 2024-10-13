function sortNumbers(order) {
    const numberInput = document.getElementById('numberInput').value;
    const numbersArray = numberInput.split(',').map(Number).filter(num => !isNaN(num));

    if (order === 'asc') {
        numbersArray.sort((a, b) => a - b);
    } else {
        numbersArray.sort((a, b) => b - a);
    }

    document.getElementById('sortedNumbers').textContent = `Sorted Numbers: ${numbersArray.join(', ')}`;
}
