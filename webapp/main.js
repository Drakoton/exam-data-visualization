document.addEventListener('DOMContentLoaded', (event) => {
    const counterDisplay = document.getElementById('counter-display');
    const Btn_decrease = document.getElementById('decrease');
    const Btn_reset = document.getElementById('reset');
    const Btn_increase = document.getElementById('increase');

    let counter = 0;

    function updateDisplay() {
        counterDisplay.textContent = counter;
    }

    increaseBtn.addEventListener('click', () => {
        counter++;
        updateDisplay();
    });

    decreaseBtn.addEventListener('click', () => {
        counter--;
        updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
        counter = 0;
        updateDisplay();
    });

    updateDisplay();
});
