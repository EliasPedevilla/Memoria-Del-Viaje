const imagenes = document.querySelectorAll(".img-galeria");
const imagenLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const close = document.querySelector(".close");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target === close || e.target !== imagenLight) {
    contenedorLight.classList.toggle("show");
    imagenLight.classList.toggle("showImage");
  }
});

const aparecerImagen = (imagen) => {
  imagenLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenLight.classList.toggle("showImage");
};
