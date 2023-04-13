const textoEntrada = document.getElementById("textoEntrada");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const textoSalida = document.getElementById("textoSalida");
const contenedorSinDatos = document.querySelector(".cont-sin_Datos");
const contenedorConDatos = document.querySelector(".cont-con_Datos");
const btnCopy = document.getElementById("copy");
const cajaLogo = document.querySelector(".contenedor-logo");
const cajaBtns = document.querySelector(".contenedor-btn");
const aside = document.querySelector(".contenedor-derecho");
let textoEncriptado = "";
let textoDesencriptado = "";
btnEncriptar.onclick = () => {
  console.log("encriptando");
  if (textoEntrada.value) {
    let entrada = textoEntrada.value.toLowerCase();

    contenedorSinDatos.classList.add("inactive");
    contenedorConDatos.classList.remove("inactive");

    textoEncriptado = entrada
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    textoSalida.textContent = textoEncriptado;
    textoEntrada.value = "";
  } else {
    contenedorSinDatos.classList.remove("inactive");
    contenedorConDatos.classList.add("inactive");
  }
};

btnDesencriptar.onclick = () => {
  console.log("desencriptando");
  if (textoEntrada.value) {
    let entrada = textoEntrada.value.toLowerCase();

    contenedorSinDatos.classList.add("inactive");
    contenedorConDatos.classList.remove("inactive");

    textoDesencriptado = entrada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    textoSalida.textContent = textoDesencriptado;
    textoEntrada.value = "";
  } else {
    contenedorSinDatos.classList.remove("inactive");
    contenedorConDatos.classList.add("inactive");
  }
};

function copy() {
  textoEntrada.value = textoSalida.textContent;
  textoEntrada.select();
  textoEntrada.setSelectionRange(0, 99999);
  document.execCommand("copy");
  textoEntrada.value = "";
}

btnCopy.addEventListener("click", copy);

/* efectos */

btnEncriptar.onmousedown = () => {
    btnEncriptar.classList.add("click");
}

btnEncriptar.onmouseup = () => {
    btnEncriptar.classList.remove("click");
}

btnDesencriptar.onmousedown = () => {
    btnDesencriptar.classList.add("click");
}

btnDesencriptar.onmouseup = () => {
    btnDesencriptar.classList.remove("click");
}

btnCopy.onmousedown = () => {
    btnCopy.classList.add("click");
}

btnCopy.onmouseup = () => {
    btnCopy.classList.remove("click");
}

window.onload = () => {
    cajaLogo.classList.remove('start');
    cajaBtns.classList.remove('start');
    aside.classList.remove('start');
    cajaLogo.style.transition="transform .4s ease .4s";
    cajaBtns.style.transition="transform .6s ease .6s";
    aside.style.transition="transform 1s ease 1s";
}