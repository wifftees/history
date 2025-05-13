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
        <div class="popup-title">Москва</div>
        <div class="car">
          <div class="img-wrap">
              <img src="./resources/moscow_bunin_house.jpg"
                  alt="1">
              <img src="./resources/moscow_bunin_memor.jpg"
                  alt="2">
          </div>
          <button class="btn prev">‹</button>
          <button class="btn next">›</button>
        </div>
        <div class="popup-text">
          Октябрьскую революцию 1917 года Бунин не принял решительно и категорически.
          Он был монархист по убеждениям, человек старой дворянской культуры, категорически не принял классовую ненависть и массовое насилие.

          Он писал в своих дневниках:
          <blockquote> «Россия погибла. Не в политическом смысле — духовно. Народ, отрёкшийся от Бога, творит бессмыслицу и насилие, и ему это нравится»
          </blockquote>
        </div>
      </div>
    `,
  `
      <div class="popup-content">
        <div class="popup-title">Одесса</div>
        <div class="car">
          <div class="img-wrap">
              <img src="./resources/odesa_bunin_1.jpg"
                  alt="1">
              <img src="./resources/odesa_bunin_2.jpg"
                  alt="2">
              <img src="./resources/odesa_bunin_3.jpg"
                  alt="3">
              <img src="./resources/odesa_bunin_4.jpg"
                  alt="4">
          </div>
          <button class="btn prev">‹</button>
          <button class="btn next">›</button>
        </div>
        <div class="popup-text">
          21 мая 1918 года Бунин с женой Веpой Николаевной уехали из Москвы в санитарном вагоне вместе с пленными немцами. Поезд шел с вооруженной охраной, весь затемненный, мимо таких же затемненных станций. 27 мая Бунины прибыли в Минск. От Минска до Гомеля ехали в жуткой тесноте, т. к. оказались в одном купе с 8 офицерами польского легиона. От Гомеля до Киева плыли на пароходе. В середине июня Бунин наконец достиг желанной цели — прибыл в Одессу.

          Жизнь в Одессе оказалась тяжелой. Не было денег, не хватало пропитания, зимой нечем было отапливать жилье. Время было неспокойное: погромы, грабежи, насилие, — все это происходило регулярно. В городе то и дело менялась власть. Когда Бунины летом 1918 года только прибыли в Одессу, город был занят австрийскими войсками. Весной 1919 года в Одессу вошла Красная армия, но уже в августе того же года город был взят Добровольческой армией. Однако положение было шатким, большевики наступали. Жить становилось все тяжелее, мысли об отъезде из России не покидали Буниных. Но Иван Алексеевич не хотел эмигрировать. Он долго не мог решиться. Наконец, в начале 1920 года, под влиянием жены, друзей и обстоятельств, Бунин принял окончательное решение — уезжать.
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

  map.on('popupopen', function (e) {
    
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