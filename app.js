(function () {
  var cars = window.CARS || [];
  var PH = "img/placeholder.svg";
  var $ = function (s) { return document.querySelector(s); };
  var fmt = function (n) { return n.toLocaleString("ro-RO"); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var photo = function (c, i) { return "img/" + c.slug + "/" + i + ".jpg"; };
  var priceHtml = function (c) {
    return c.price ? fmt(c.price) + " € <small>preț de vânzare</small>" : "Preț la cerere";
  };
  var fb = 'onerror="this.onerror=null;this.src=\'' + PH + '\'"';

  // Filtre
  var brands = ["Toate"].concat(cars.map(function (c) { return c.brand; }).filter(function (b, i, a) { return a.indexOf(b) === i; }));
  var current = "Toate";
  function renderFilters() {
    $("#filters").innerHTML = brands.map(function (b) {
      return '<button class="chip' + (b === current ? " on" : "") + '" data-b="' + esc(b) + '">' + esc(b) + "</button>";
    }).join("");
  }
  $("#filters").addEventListener("click", function (e) {
    var b = e.target.getAttribute("data-b");
    if (!b) return;
    current = b; renderFilters(); renderGrid();
  });

  function renderGrid() {
    var list = cars.filter(function (c) { return current === "Toate" || c.brand === current; });
    $("#grid").innerHTML = list.map(function (c) {
      return '<button class="card" data-s="' + c.slug + '">' +
        '<img src="' + photo(c, 1) + '" alt="' + esc(c.title) + '" loading="lazy" ' + fb + ">" +
        '<div class="body">' +
        "<h3>" + esc(c.title) + "</h3>" +
        '<div class="tags"><span>' + c.year + "</span><span>" + fmt(c.km) + " km</span><span>" + esc(c.fuel) + "</span><span>" + esc(c.gearbox.split(",")[0]) + "</span></div>" +
        '<div class="price">' + priceHtml(c) + "</div></div></button>";
    }).join("");
  }
  $("#grid").addEventListener("click", function (e) {
    var el = e.target.closest(".card");
    if (el) openCar(el.getAttribute("data-s"));
  });

  // Detalii
  var lastFocus = null;
  function openCar(slug) {
    var c = cars.filter(function (x) { return x.slug === slug; })[0];
    if (!c) return;
    lastFocus = document.activeElement;
    var thumbs = "";
    for (var i = 1; i <= c.photos; i++) {
      thumbs += '<img src="' + photo(c, i) + '" alt="Foto ' + i + '" data-i="' + i + '" class="' + (i === 1 ? "on" : "") + '" ' + fb + ">";
    }
    var rows = [["An", c.year], ["Kilometraj", fmt(c.km) + " km"], ["Combustibil", c.fuel], ["Cutie de viteze", c.gearbox],
      ["Putere", c.power], ["Caroserie", c.body], ["Culoare", c.color]].concat(c.specs);
    var subject = encodeURIComponent("Interes: " + c.title);
    $("#detail").innerHTML =
      '<div class="d-grid"><div class="gal"><img class="main" id="main" src="' + photo(c, 1) + '" alt="' + esc(c.title) + '" ' + fb + '>' +
      '<div class="thumbs" id="thumbs">' + thumbs + "</div></div>" +
      '<div class="d-info"><h2>' + esc(c.title) + '</h2><div class="d-price">' + priceHtml(c) + "</div>" +
      '<table class="specs">' + rows.map(function (r) { return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</table>" +
      '<div class="d-cta"><a class="btn primary" href="tel:+40762934347">Sună: 0762 934 347</a>' +
      '<a class="btn ghost" href="mailto:contact@imobicom-auto.ro?subject=' + subject + '">Scrie-ne</a></div></div></div>' +
      '<div class="d-sec"><h3>Descriere</h3><p class="desc">' + esc(c.desc) + "</p><ul>" +
      c.highlights.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="d-sec"><h3>Dotări și echipamente</h3><div class="eq">' +
      c.equipment.map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + "</div></div>" +
      '<p class="fine">Raport de inspecție și informații suplimentare disponibile la cerere. Vizionări la sediu, pe bază de programare la 0762 934 347.</p>';
    $("#thumbs").addEventListener("click", function (e) {
      var i = e.target.getAttribute("data-i");
      if (!i) return;
      $("#main").src = photo(c, i);
      Array.prototype.forEach.call(this.children, function (t) { t.classList.toggle("on", t === e.target); });
    });
    $("#modal").hidden = false;
    document.body.style.overflow = "hidden";
    $("#close").focus();
    history.replaceState(null, "", "#" + slug);
  }
  function closeCar() {
    $("#modal").hidden = true;
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + "#stoc");
    if (lastFocus) lastFocus.focus();
  }
  $("#close").addEventListener("click", closeCar);
  $("#modal").addEventListener("click", function (e) { if (e.target === this) closeCar(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !$("#modal").hidden) closeCar(); });

  // Meniu mobil
  $("#burger").addEventListener("click", function () {
    var o = $("#nav").classList.toggle("open");
    this.setAttribute("aria-expanded", o);
  });
  $("#nav").addEventListener("click", function () { this.classList.remove("open"); });

  // Formular -> mailto
  $("#form").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = new FormData(this);
    var body = "Nume: " + f.get("nume") + "\nTelefon: " + f.get("telefon") + "\n\n" + (f.get("mesaj") || "");
    location.href = "mailto:contact@imobicom-auto.ro?subject=" + encodeURIComponent("Mesaj de pe imobicom-auto.ro") + "&body=" + encodeURIComponent(body);
  });

  $("#yr").textContent = new Date().getFullYear();
  renderFilters();
  renderGrid();
  var h = location.hash.slice(1);
  if (h && cars.some(function (c) { return c.slug === h; })) openCar(h);
})();
