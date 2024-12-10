

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('meuAudio');
    audio.muted = true;
    audio.play();

    // Detecta a interação do usuário para desmutar e tocar o áudio
    document.addEventListener('click', function() {
        audio.muted = false;
        audio.play();
        audio.volume = 0.05;
    }, { once: true }); // Apenas executa uma vez
});
