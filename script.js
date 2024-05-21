const contador = document.getElementById('contador');
const objeto = document.getElementById('objeto');

let tempoRestante = 10; // Segundos

const intervalo = setInterval(() => {
    contador.textContent = tempoRestante;

    if (tempoRestante === 0) {
        objeto.style.display = 'none';
        clearInterval(intervalo);
    }

    tempoRestante--;
}, 1000); // A cada segundo
