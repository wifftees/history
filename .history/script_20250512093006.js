const map = L.map('map').setView([48.8584, 2.2945], 5); // Париж

  // Подключение тайлов OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  // Добавление маркера
  
  const marker = L.marker([48.8584, 2.2945]).addTo(map);

  // Содержимое попапа
  const popupContent = `
    <div class="leaflet-popup-content">
      <div class="popup-header">Париж</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" class="popup-img">
      <p class="popup-text">Бунин жил здесь в эмиграции с 1923 года.</p>
      <div class="popup-footer">
        <p>История эмиграции Бунина</p>
        <button class="btn-change-info">Изменить информацию</button>
      </div>
    </div>
  `;

  // Открытие попапа с содержимым
  marker.bindPopup(popupContent).openPopup();

  // Добавление интерактивности на кнопку
  // document.querySelector('.btn-change-info').addEventListener('click', () => {
  //   const newText = "Бунин написал несколько своих знаменитых произведений, находясь в Париже.";
  //   const popupText = document.querySelector('.popup-text');
  //   popupText.textContent = newText;
  // });