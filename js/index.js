const travels = document.getElementById("travels");
const data = [
  {
    id: 1,
    name: "Misiones",
    desciption: "Nuestro primer viaje por la mesopotamia argentina",
    img: "/img/galeria/Misiones.JPG",
  },
  {
    id: 2,
    name: "Buenos Aires",
    desciption: "Un viaje en familia a la costa",
    img: "/img/galeria/Merlo-san-Luis.JPG",
  },
  {
    id: 3,
    name: "Merlo",
    desciption: "Visitando a la familia y paseando por las sierras de Cordoba",
    img: "/img/galeria/Merlo-san-Luis.JPG",
  },
  {
    id: 4,
    name: "Pataginia Argentina",
    desciption:
      "Nuestro segundo viaje largo en moto conociendo la Patagonia desde Cordoba hasta Santa Cruz",
    img: "/img/galeria/bariloche-rio-negro.JPG",
  },
];

const getTravelCards = () => {
  console.log("helo");

  const travelCards = document.createElement("div");
  data.map((item) => {
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

getTravelCards();
