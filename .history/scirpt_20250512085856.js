const map = L.map('map').setView([48.8584, 2.2945], 5); // Париж

  // Подключение тайлов OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  // Добавление маркера — Париж
  L.marker([48.8584, 2.2945])
    .addTo(map)
    .bindPopup("<b>Париж</b><br>Бунин проживал здесь в эмиграции с 1923 года.")
    .openPopup();