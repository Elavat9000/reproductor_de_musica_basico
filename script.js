// Selecciona los elementos del DOM
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeControl = document.getElementById('volumeControl');

// Función para reproducir o pausar la música
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pausar';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Reproducir';
    }
});

// Función para detener la música
stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Reproducir';
});

// Función para ajustar el volumen
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});