let clock = document.getElementById('clock');

// Fonction pour mettre à jour l'horloge
function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    clock.innerText = formattedTime;
}

// Mettre à jour l'horloge immédiatement
updateClock();

// Mettre à jour l'horloge toutes les secondes
setInterval(updateClock, 1000);
