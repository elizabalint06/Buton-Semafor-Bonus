const button = document.getElementById('colorButton');
const colors = ['btn-danger', 'btn-warning', 'btn-success'];
const timerDisplay = document.getElementById('timer');
let colorIndex = 0;
let timeLeft = 10;
function changeColor() {
    button.classList.replace(colors[colorIndex], colors[(colorIndex + 1) % colors.length]);
    colorIndex = (colorIndex + 1) % colors.length;
}
function updateTimer() {
    timerDisplay.textContent = timeLeft; // Actualizăm textul din cronometru
    if (timeLeft === 0) {
        changeColor(); // Schimbăm culoarea butonului la fiecare 10 secunde
        timeLeft = 10; // Resetăm timpul rămas
    }
    timeLeft--; // Scădem timpul rămas
}
const timerInterval = setInterval(updateTimer, 1000); // 1000 ms = 1 secundă


button.addEventListener('click', () => {
    changeColor();
    timeLeft = 10;
});

