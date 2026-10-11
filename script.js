// 1. Hämta knapparna och textfältet från HTML-koden
const cayoKnapp = document.getElementById('CayoKnapp');
const rånaKnapp = document.getElementById('RånaKnapp');
const snoKnapp = document.getElementById('SnoKnapp');
const resultatText = document.getElementById('resultatText');

// 2. Om man klickar på Cayo Perico Heist -> Rätt!
cayoKnapp.addEventListener('click', function() {
    resultatText.textContent = 'Rätt!';
    resultatText.style.color = 'green'; // Valfritt: Gör texten grön
});

// 3. Om man klickar på Råna butiker -> Fel!
rånaKnapp.addEventListener('click', function() {
    resultatText.textContent = 'Fel!';
    resultatText.style.color = 'red'; // Valfritt: Gör texten röd
});

// 4. Om man klickar på Sno från spelare -> Fel!
snoKnapp.addEventListener('click', function() {
    resultatText.textContent = 'Fel!';
    resultatText.style.color = 'red'; // Valfritt: Gör texten röd
});