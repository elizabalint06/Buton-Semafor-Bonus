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
    timerDisplay.textContent = timeLeft; 
    if (timeLeft == 0) {
        changeColor(); 
        timeLeft = 10; 
    }
    --timeLeft; 
}
const timerInterval = setInterval(updateTimer, 1000); 

function handleClickEvent() {
    changeColor();
    timeLeft = 10;
}

button.addEventListener('click', handleClickEvent);

