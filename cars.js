// Stocul Imobicom Auto. Pentru a modifica o mașină, editează aici.
// photos = câte poze are mașina în folderul img/<slug>/ (1.jpg, 2.jpg, ...)
// price = număr în EUR, sau null pentru "Preț la cerere"
window.CARS = [
  {
    slug: "dacia-logan-2021",
    brand: "Dacia",
    title: "Dacia Logan 1.0 TCe 90 CP Essential",
    year: 2021,
    km: 51703,
    fuel: "Benzină",
    gearbox: "Manuală, 6 trepte",
    power: "90 CP",
    body: "Berlină",
    color: "Alb",
    price: 7999,
    photos: 10,
    specs: [
      ["Prima înmatriculare", "04.2021"],
      ["Tracțiune", "Față"],
      ["Culoare interior", "Negru"],
      ["Uși / locuri", "4 / 5"],
      ["Chei", "2"]
    ],
    desc: "Dacia Logan din 2021, cu doar 51.703 km la bord, motor 1.0 TCe de 90 CP și cutie manuală cu 6 trepte. O sedan spațioasă și economică, potrivită pentru oraș, familie sau activitate profesională. Îl oferim cu cele 2 chei, manualul de utilizare și certificatul de înmatriculare în original. Vă așteptăm la sediul nostru pentru vizionare și test drive.",
    highlights: ["Doar 51.703 km", "Motor 1.0 TCe, 90 CP", "Cutie manuală, 6 trepte", "Portbagaj generos", "2 chei și manual de utilizare"],
    equipment: ["Certificat de înmatriculare în original", "Manual de utilizare", "2 chei"]
  },
  {
    slug: "dacia-sandero-2022",
    brand: "Dacia",
    title: "Dacia Sandero 1.0 TCe 90 CP Comfort",
    year: 2022,
    km: 47824,
    fuel: "Benzină",
    gearbox: "Manuală, 6 trepte",
    power: "90 CP",
    body: "Hatchback",
    color: "Alb",
    price: 7499,
    photos: 9,
    specs: [
      ["Prima înmatriculare", "07.2022"],
      ["Tracțiune", "Față"],
      ["Culoare interior", "Negru"],
      ["Uși / locuri", "4 / 5"],
      ["Chei", "1"]
    ],
    desc: "Dacia Sandero din 2022, cu 47.824 km, motor 1.0 TCe de 90 CP și cutie manuală cu 6 trepte, în versiunea Comfort cu ecran multimedia. Un hatchback compact, ușor de condus și de parcat, cu costuri de întreținere mici. Oferim detalii complete la telefon și programăm vizionarea la sediu.",
    highlights: ["Sub 48.000 km", "Motor 1.0 TCe, 90 CP", "Versiune Comfort, ecran multimedia", "Cutie manuală, 6 trepte", "Consum redus, ușor de parcat"],
    equipment: ["Certificat de înmatriculare în original", "Manual de utilizare"]
  },
  {
    slug: "dacia-logan-2022-gpl",
    brand: "Dacia",
    title: "Dacia Logan 1.0 TCe 90 CP (GPL)",
    year: 2022,
    km: 121230,
    fuel: "Benzină + GPL",
    gearbox: "Manuală, 6 trepte",
    power: "90 CP",
    body: "Berlină",
    color: "Alb",
    price: 7899,
    photos: 11,
    specs: [
      ["Prima înmatriculare", "10.2022"],
      ["Tracțiune", "Față"],
      ["Tapițerie", "Pânză"],
      ["ITP valabil până la", "01.09.2027"],
      ["Anvelope", "185/65 R15"]
    ],
    desc: "Dacia Logan din 2022 cu motor 1.0 TCe de 90 CP și instalație GPL, soluția potrivită pentru cine face mulți kilometri și vrea un cost pe kilometru cât mai mic. Are faruri LED, ecran multimedia și aer condiționat funcțional, iar ITP-ul este valabil până în septembrie 2027. Vă oferim detalii și o vizionare la sediul din Sector 6.",
    highlights: ["Benzină + GPL, cost mic pe kilometru", "Motor 1.0 TCe, 90 CP", "Faruri LED și ecran multimedia", "Aer condiționat", "ITP valabil până în 09.2027"],
    equipment: ["Faruri LED", "Instalație GPL", "Roată de rezervă, cric", "Manual de utilizare, cheie de rezervă"]
  },
  {
    slug: "toyota-corolla-2021",
    brand: "Toyota",
    title: "Toyota Corolla 2.0 Hybrid GR Sport",
    year: 2021,
    km: 170000,
    fuel: "Hibrid",
    gearbox: "Automată",
    power: "180 CP",
    body: "Combi",
    color: "Roșu",
    price: 18500,
    photos: 11,
    specs: [
      ["Capacitate cilindrică", "1.987 cm³"],
      ["Generație", "XII (2018 – prezent)"],
      ["Uși / locuri", "5 / 5"],
      ["Anvelope", "Set iarnă Michelin"]
    ],
    desc: "Toyota Corolla Touring Sports 2.0 Hybrid GR Sport din 2021, în roșu cu plafon negru, cu motorizare hibridă de 180 CP și cutie automată. Pachetul GR Sport aduce jante de 18\", scaune și volan sportive, iar dotările includ Head-Up Display, sistem audio JBL, încărcare wireless, camera de marșarier și faruri full LED. O combi dinamică și economică, cu spațiu pentru toată familia. Primiți detalii complete și o vizionare la sediul nostru.",
    highlights: ["Hibrid 2.0, 180 CP, cutie automată", "Pachet GR Sport, jante 18\"", "Head-Up Display, audio JBL", "Keyless Entry & Go, portbagaj electric", "Set de anvelope de iarnă Michelin"],
    equipment: [
      "Încărcător wireless telefon", "Sistem audio JBL", "Head-Up Display", "Road Sign Assist",
      "Lane Assist, Side Assist", "Monitorizare unghi mort", "Camera marșarier", "Faruri full LED",
      "Keyless Entry & Go", "Portbagaj electric", "Scaune și volan sport GR", "Jante GR 18\""
    ]
  },
  {
    slug: "toyota-rav4-2022",
    brand: "Toyota",
    title: "Toyota RAV4 2.5 Hybrid 4x4",
    year: 2022,
    km: 92954,
    fuel: "Hibrid",
    gearbox: "Automată",
    power: "222 CP",
    body: "SUV",
    color: "Negru",
    price: 26000,
    photos: 9,
    specs: [
      ["Prima înmatriculare", "11.2022"],
      ["Capacitate cilindrică", "2.487 cm³"],
      ["Tracțiune", "4x4"],
      ["Generație", "V (2018 – prezent)"],
      ["Uși / locuri", "5 / 5"]
    ],
    desc: "Toyota RAV4 2.5 Hybrid din 2022, cu 222 CP, tracțiune integrală 4x4 și cutie automată, în negru. Un SUV fiabil și economic, cu volan din piele Nappa perforată, cameră de marșarier, Autohold, Hill Assist și Lane Assist. Are revizie recentă efectuată la reprezentanța Toyota, iar garanția Toyota este valabilă până în 2032 sau 200.000 km, conform condițiilor producătorului. Vă așteptăm la vizionare.",
    highlights: ["Hibrid 2.5, 222 CP, tracțiune 4x4", "Cutie automată", "Volan piele Nappa, cameră marșarier", "Autohold, Hill Assist, Lane Assist", "Revizie recentă la reprezentanță Toyota"],
    equipment: [
      "Volan piele Nappa perforată", "Cameră marșarier", "Autohold", "Hill Assist", "Lane Assist",
      "Ecran touch", "Sistem audio", "Port USB"
    ]
  }
];
