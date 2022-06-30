const travels = document.getElementById("travels");
const track = document.getElementById("track");
// const data = [
//   {
//     id: 1,
//     name: "Misiones",
//     desciption: "Nuestro primer viaje por la mesopotamia argentina",
//     img: "/img/galeria/Misiones.JPG",
//   },
//   {
//     id: 2,
//     name: "Buenos Aires",
//     desciption: "Un viaje en familia a la costa",
//     img: "/img/galeria/Merlo-san-Luis.JPG",
//   },
//   {
//     id: 3,
//     name: "Merlo",
//     desciption: "Visitando a la familia y paseando por las sierras de Cordoba",
//     img: "/img/galeria/Merlo-san-Luis.JPG",
//   },
//   {
//     id: 4,
//     name: "Pataginia Argentina",
//     desciption:
//       "Nuestro segundo viaje largo en moto conociendo la Patagonia desde Cordoba hasta Santa Cruz",
//     img: "/img/galeria/bariloche-rio-negro.JPG",
//   },
// ];

const galery = [
  "itati.webp",
  "corrientes1.webp",
  "merlo6.webp",
  "cuevaDeLasManos.webp",
  "merlos.webp",
  "loncopue.webp",
  "cuevaDeLasManos1.webp",
  "misiones.webp",
  "altasCumbres.webp",
  "diamante.webp",
  "misiones2.webp",
  "altasCumbres1.webp",
  "elBolson.webp",
  "monteCaseros.webp",
  "bariloche.webp",
  "elSobervio.webp",
  "parqueSaltoEncantado.webp",
  "bariloche2.webp",
  "federacion.webp",
  "pasarella.webp",
  "bariloche3.webp",
  "hitoTresFronteras.webp",
  "peritoMoreno.webp",
  "cataratasDeIguazu.webp",
  "laPunilla.webp",
  "pinoHachado.webp",
  "caviahue.webp",
  "lasGrutas.webp",
  "pinoHachado2.webp",
  "cañonDeAtuel.webp",
  "loncopue1.webp",
  "rioPinturas.webp",
  "cañonDeAtuel1.webp",
  "losAntiguos.webp",
  "saladeroCabal.webp",
  "cañonDeAtuel2.webp",
  "losAntiguos1.webp",
  "saltoDelAgrio.webp",
  "cañonDeAtuel4.webp",
  "losAntiguos2.webp",
  "saltosDelMocona.webp",
  "cañonDeAtuel6.webp",
  "losAntiguos3.webp",
  "sanLorenzo.webp",
  "cañonDeAtuelMendoza5.webp",
  "malargue.webp",
  "sanLuis.webp",
  "chubut.webp",
  "malargue1.webp",
  "sanMartinDeLosAndes.webp",
  "chubut1.webp",
  "mendoza.webp",
  "sanMartinDeLosAndes2.webp",
  "comodoroRivadavia.webp",
  "merlo.webp",
  "santaRosa.webp",
  "concordia.webp",
  "merlo1.webp",
  "sarmiento.webp",
  "concordia2.webp",
  "merlo2.webp",
  "traslasierra.webp",
  "corcovado.webp",
  "merlo3.webp",
  "villaMaria.webp",
  "cordoba.webp",
  "merlo4.webp",
  "villaPehueña.webp",
  "corrientes.webp",
  "merlo5.webp",
];

const getImgGalery = () => {
  galery.map((item) => {
    const element = `<img
              src="img/galery/${item}"
              alt="${item}"
              class="img-galeria slick"
            />`;
    track.innerHTML += element;
  });
};
getImgGalery();

const getTravelCards = () => {
  json.map((item) => {
    const element = `<div class="card" key=${item.id}>
      <a href="./Misiones.html">
        <div class="cardTitle">
          <img src=${item.img} alt=${item.name} />
        </div>
        <div class="cardBody">
          <p class="n-destino">${item.name}</p>
          <p>${item.desciption}</p>
        </div>
      </a>
    </div>`;
    var z = document.createElement("div"); // is a node
    z.innerHTML += element;
    travels.appendChild(z);
  });
};

let json;
const data = fetch("../static/data.json")
  .then((response) => response.json())
  .then((data) => (json = data))
  .then(() => getTravelCards());
