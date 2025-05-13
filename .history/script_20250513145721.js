const map = L.map('map').setView([55.75489633973109, 37.59364994442082], 5); 

  // Подключение тайлов OpenStreetMap
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   maxZoom: 18,
  // }).addTo(map);

  // Добавление маркера
  const buninMarkers = [
    [55.75489633973109, 37.59364994442082], // moscow
    [46.490053936275395, 30.72508082600243], // odessa
    [41.030089934175614, 28.97550436805806], // stambul
    [42.693474795488136, 23.332236740169282], // sofia
    [48.85632371310316, 2.2726933107712055], // paris
    [47.40956860447856, 0.9723149584896635], // ambuas
    [43.66442869645907, 6.926837948092578], // grass
  ]

  const cvetaevaMarkers = [
    [55.754420886844, 37.58996409754572], // moscow
    [52.492704149579396, 13.327499755167734], // berlin
    [50.07498808514204, 14.389253439687312], // prague
    [48.81726740406093, 2.2761192549627722], // france
    [55.9338368932192, 37.85000006307711] // moscow
  ]
  const cvetaevaPopups = []
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
          <br>
          <br>
          Жизнь в Одессе оказалась тяжелой. Не было денег, не хватало пропитания, зимой нечем было отапливать жилье. Время было неспокойное: погромы, грабежи, насилие, — все это происходило регулярно. В городе то и дело менялась власть. Когда Бунины летом 1918 года только прибыли в Одессу, город был занят австрийскими войсками. Весной 1919 года в Одессу вошла Красная армия, но уже в августе того же года город был взят Добровольческой армией. Однако положение было шатким, большевики наступали. Жить становилось все тяжелее, мысли об отъезде из России не покидали Буниных. Но Иван Алексеевич не хотел эмигрировать. Он долго не мог решиться. Наконец, в начале 1920 года, под влиянием жены, друзей и обстоятельств, Бунин принял окончательное решение — уезжать.
        </div>
      </div>
    `,
  `
      <div class="popup-content">
        <div class="popup-title">Стамбул</div>
        <div class="car">
          <div class="img-wrap">
              <img src="./resources/stambul_bunin_1.jpeg"
                  alt="1">
              <img src="./resources/stambul_bunin_2.webp"
                  alt="2">
              <img src="./resources/stambul_bunin_3.jpg"
                  alt="3">
          </div>
          <button class="btn prev">‹</button>
          <button class="btn next">›</button>
        </div>
        <div class="popup-text">
          Иван Бунин и его жена прибыли в Константинополь на пароходе «Спарта», который столкнулся с множеством трудностей во время плавания. Погода ухудшалась, и волны угрожали разрушить судно. На пятый день плавания судно попало в минное поле, а капитан, будучи плохо знакомым с лоцией и часто пьяным, не мог избежать множества опасностей. Чудом пароход не подорвался. Войдя в Босфор, «Спарта» прошла мимо военных фортов и достигла Константинополя на седьмой день.

          <br><br>

В городе путешественников направили в холодный каменный сарай для дезинфекции, но доктор освободил Буниных от этой процедуры. Однако ночевать им пришлось в разрушенном здании, которое раньше было приютом для прокажённых. В условиях холода и скудных удобств они провели ночь среди других беженцев.
<br><br>

Утром Бунины узнали, что контрольно-паспортный пункт в Стамбуле был переполнен людьми, пытающимися получить визу для выезда в Европу. Несмотря на суматоху и напряжённую атмосферу, Бунину удалось быстро получить визы на въезд во Францию.

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
  `
  ]

  const zoom = 17;

  function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  const buninPoints = new L.FeatureGroup();
  const cvetaevaPoints = new L.FeatureGroup();

  const buninColor = randomColor()
  const cvetaevaColor = randomColor() / buninColor

  buninMarkers.forEach((point, i) => {
    const marker = L.marker(point, {
      icon: L.divIcon({
        className: "custom-icon-marker",
        iconSize: L.point(40, 40),
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker"><path fill-opacity="0.25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/><path stroke="#fff" fill="#${#c9dfee}" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/></svg>`,
        iconAnchor: [12, 24],
        popupAnchor: [9, -26],
      }),
    })
    // marker.addTo(map)
    marker.bindPopup(buninPopups[i])
    buninPoints.addLayer(marker)
  })

  cvetaevaMarkers.forEach((point, i) => {
    const marker = L.marker(point, {
      icon: L.divIcon({
        className: "custom-icon-marker",
        iconSize: L.point(30, 30),
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker"><path fill-opacity="0.25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/><path stroke="#fff" fill="#${cvetaevaColor}" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/></svg>`,
      }),
    })

    marker.bindPopup(cvetaevaPopups[i])
    cvetaevaPoints.addLayer(marker)
  })

  map.on('popupopen', function (e) {
    setTimeout(() => {
      const prev = document.querySelector('.prev');
      const next = document.querySelector('.next');
      const wrap = document.querySelector('.img-wrap');
      const imgs = document.querySelectorAll('.img-wrap img');

      let idx = 0;

      function showImg() {
          if (idx >= imgs.length) idx = 0;
          if (idx < 0) idx = imgs.length - 1;
          wrap.style.transform = `translateX(-${idx * 100}%)`;
      }

      next.addEventListener('click', () => {
        idx++;
        showImg();
      });

      prev.addEventListener('click', () => {
          idx--;
          showImg();
      });

    }, 500)
  });


// Used to load and display tile layers on the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const overlayMaps = {};

function createArrowLayer(points, layerGroup) {
  for (let i = 0; i < points.length - 1; i++) {
    const start = [points[i][0], points[i][1]];
    const end = [points[i + 1][0], points[i + 1][1]];

    const line = L.polyline([start, end], {
      color: 'blue',
      weight: 2,
      opacity: 0.5,
      dashArray: '5,10'
    })
    
    layerGroup.addLayer(line)
  }
}


const arrowsBunin = new L.FeatureGroup();
const arrowsCvetaeva = new L.FeatureGroup();
state = {
  "bunin": "add",
  "cvetaeva": "add"
}

createArrowLayer(buninMarkers, arrowsBunin);
createArrowLayer(cvetaevaMarkers, arrowsCvetaeva);

L.Control.CustomButtons = L.Control.Layers.extend({
  onAdd: function () {
    this._initLayout();
    this._addA();
    this._addB();
    this._update();
    return this._container;
  },
  
  _addA: function () {
    this.createButton("Бунин", "bunin", buninPoints, arrowsBunin);
  },
  _addB: function () {
    this.createButton("Цветаева", "cvetaeva", cvetaevaPoints, arrowsCvetaeva);
  },
  createButton: function (type, className, pointLayer, arrowLayer) {
    const elements = this._container.getElementsByClassName(
      "leaflet-control-layers-list"
    );
    const button = L.DomUtil.create(
      "button",
      `btn-markers ${className}`,
      elements[0]
    );
    button.textContent = type;

    L.DomEvent.on(button, "click", function (e) {
      const checkbox = document.querySelectorAll(
        ".leaflet-control-layers-overlays input[type=checkbox]"
      );
      
      if (state[className] === "add") {
        state[className] = "remove"
        pointLayer.addTo(map);
        arrowLayer.addTo(map);
      } else {
        state[className] = "add"
        pointLayer.remove(map);
        arrowLayer.remove(map);
      }
    });
  },
});

new L.Control.CustomButtons(null, overlayMaps, { collapsed: false }).addTo(map);

