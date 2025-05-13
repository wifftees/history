const map = L.map('map').setView([55.75489633973109, 37.59364994442082], 5); 

  // Подключение тайлов OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  // Добавление маркера
  const buninMarkers = [
    L.marker([55.75489633973109, 37.59364994442082]), // moscow
    L.marker([46.490053936275395, 30.72508082600243]), // odessa
    L.marker([41.030089934175614, 28.97550436805806]), // stambul
    L.marker([42.693474795488136, 23.332236740169282]), // sofia
    L.marker([48.85632371310316, 2.2726933107712055]), // paris
    L.marker([47.40956860447856, 0.9723149584896635]), // ambuas
    L.marker([43.66442869645907, 6.926837948092578]), // grass
  ]

  const buninPopups = [
    `
      <div class="popup-content">
        <div class="popup-title">Париж</div>
        <div class="car">
          <div class="img-wrap">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241228102812942963/0_ilw552fVUGbwIzbE.jpg"
                  alt="1">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241128161121752603/what-is-javascript.webp"
                  alt="2">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240829155421/Amazing-new-Javascript-features-in-ES15.webp"
                  alt="3">
          </div>
          <button class="btn prev">‹</button>
          <button class="btn next">›</button>
        </div>
        <div class="popup-text">
          Здесь жил Иван Бунин с 1922 года. Этот район был его основным пристанищем во Франции.
        </div>
      </div>
    `,
  `
    <div class="leaflet-popup-content">
      <div class="popup-header">Париж</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" class="popup-img">
      <p class="popup-text">Бунин жил здесь в эмиграции с 1923 года.</p>
      <div class="popup-footer">
        <p>История эмиграции Бунина</p>
        <button class="btn-change-info">Изменить информацию</button>
      </div>
    </div>
  `,
  `
    <div class="leaflet-popup-content">
      <div class="popup-header">Париж</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" class="popup-img">
      <p class="popup-text">Бунин жил здесь в эмиграции с 1923 года.</p>
      <div class="popup-footer">
        <p>История эмиграции Бунина</p>
        <button class="btn-change-info">Изменить информацию</button>
      </div>
    </div>
  `,
  `
    <div class="leaflet-popup-content">
      <div class="popup-header">Париж</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" class="popup-img">
      <p class="popup-text">Бунин жил здесь в эмиграции с 1923 года.</p>
      <div class="popup-footer">
        <p>История эмиграции Бунина</p>
        <button class="btn-change-info">Изменить информацию</button>
      </div>
    </div>
  `,`
    <div class="leaflet-popup-content">
      <div class="popup-header">Париж</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" class="popup-img">
      <p class="popup-text">Бунин жил здесь в эмиграции с 1923 года.</p>
      <div class="popup-footer">
        <p>История эмиграции Бунина</p>
        <button class="btn-change-info">Изменить информацию</button>
      </div>
    </div>
  `,
  `
    <div class="leaflet-popup-content">
      <div class="popup-header">Париж</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" class="popup-img">
      <p class="popup-text">Бунин жил здесь в эмиграции с 1923 года.</p>
      <div class="popup-footer">
        <p>История эмиграции Бунина</p>
        <button class="btn-change-info">Изменить информацию</button>
      </div>
    </div>
  `,
  `
    <div class="leaflet-popup-content">
      <div class="popup-header">Париж</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" class="popup-img">
      <p class="popup-text">Бунин жил здесь в эмиграции с 1923 года.</p>
      <div class="popup-footer">
        <p>История эмиграции Бунина</p>
        <button class="btn-change-info">Изменить информацию</button>
      </div>
    </div>
  `
  ]

  buninMarkers.forEach((marker, i) => {
    marker.addTo(map)
    marker.bindPopup(buninPopups[i])
  })

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const wrap = document.querySelector('.img-wrap');
  const imgs = document.querySelectorAll('.img-wrap img');

  next.addEventListener('click', () => {
    idx++;
    showImg();
});

  prev.addEventListener('click', () => {
      idx--;
      showImg();
  });

  // Содержимое попапа

  // Открытие попапа с содержимым
  // marker.bindPopup(popupContent).openPopup();

  // Добавление интерактивности на кнопку
  // document.querySelector('.btn-change-info').addEventListener('click', () => {
  //   const newText = "Бунин написал несколько своих знаменитых произведений, находясь в Париже.";
  //   const popupText = document.querySelector('.popup-text');
  //   popupText.textContent = newText;
  // });