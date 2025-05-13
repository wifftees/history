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

  const buninPoints = new L.FeatureGroup();

  buninMarkers.forEach((point, i) => {
    const marker = L.marker(point)
    marker.addTo(map)
    marker.bindPopup(buninPopups[i])
    buninPoints.addLayer(marker)
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

// Extended `LayerGroup` that makes it easy
// to do the same for all layers of its members
// const pA = new L.FeatureGroup();
// const pB = new L.FeatureGroup();
// const allMarkers = new L.FeatureGroup();

// adding markers to the layer pointsA
// for (let i = 0; i < buninMarkers.length; i++) {
//   let marker = L.marker([pointsA[i][0], pointsA[i][1]]).bindPopup(pointsA[i][2]);
//   // pA.addLayer(marker);
// }

// object with layers
const overlayMaps = {};

// Create arrows between the markers
function createArrowLayer(points, layerGroup) {
  for (let i = 0; i < points.length - 1; i++) {
    const start = [points[i][0], points[i][1]];
    const end = [points[i + 1][0], points[i + 1][1]];

    // Create polyline between markers
    const line = L.polyline([start, end], {
      color: 'blue',
      weight: 2,
      opacity: 0.5,
      dashArray: '5,10'
    }).addTo(layerGroup);

    // Create arrow at the end of the line
    const arrowIcon = L.icon({
      iconUrl: './resources/odesa_bunin_1.png',
      iconSize: [15, 15],
      iconAnchor: [8, 8],
      popupAnchor: [0, -8],
    });

    L.marker(end, { icon: arrowIcon }).addTo(layerGroup);
  }
}

// Create arrow layers for pointsA and pointsB
const arrowsBunin = new L.FeatureGroup();
state = "add"

// Create arrows for each set of points
createArrowLayer(buninPoints, arrowsBunin);

// Add the arrow layers to the overlayMaps object
// overlayMaps["arrows A"] = arrowsA;
// overlayMaps["arrows B"] = arrowsB;

// centering a group of markers
map.on("layeradd layerremove", function () {
  let bounds = new L.LatLngBounds();
  map.eachLayer(function (layer) {
    if (layer instanceof L.FeatureGroup) {
      bounds.extend(layer.getBounds());
    }
  });

  if (bounds.isValid()) {
    map.flyToBounds(bounds);
  }
});

L.Control.CustomButtons = L.Control.Layers.extend({
  onAdd: function () {
    this._initLayout();
    this._addA();  // Add A button
    this._addB();  // Add B button
    this._update();
    return this._container;
  },
  
  _addA: function () {
    this.createButton("Бунин", "x", pA, arrowsA);
  },
  _addB: function () {
    this.createButton("Цветаева", "y", pB, arrowsB);
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
      
      // Add the respective layers (points + arrows)
      if (state === "add") {
        state = "remove"
        pointLayer.addTo(map);
        arrowLayer.addTo(map);
      } else {
        state = "add"
        // Remove the respective layers (points + arrows)
        pointLayer.remove(map);
        arrowLayer.remove(map);
      }
    });
  },
});

new L.Control.CustomButtons(null, overlayMaps, { collapsed: false }).addTo(map);

