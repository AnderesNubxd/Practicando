function AgregarTarjeta() {
    const imagen = document.createElement("img");
    imagen.src = "https://img.freepik.com/fotos-premium/gatitos-kawaii-peluche-esponjosos-hermosa-imagen-arte-generado-ai_843679-5987.jpg";
    const espacioDeTexto = document.createElement("p");
    const texto = document.createTextNode("Los gatitos hacen miau")
    espacioDeTexto.appendChild(texto)
    imagen.appendChild(espacioDeTexto)
    return imagen
}

const contenedorPrincipal = document.querySelector(".nuevasTarjetas");

function alPrecionar() {
    contenedorPrincipal.appendChild(AgregarTarjeta());
}

const botonAccion = document.querySelector("#agregar");

botonAccion.addEventListener("click", alPrecionar);