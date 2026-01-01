const texto = 
"Hay personas que llegan sin avisar...\n\n" +
"Y sin darse cuenta,\n" +
"se vuelven importantes 💖\n\n" +
"Gracias por existir y ser parte de mi 2025." +
"\n\nespero que seguias siendo la misma chica encantadora que conozco\n\n" +
"y deseo sigas brillando como siempre lo haces. 🌟";

let index = 0;

function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";
    index = 0;

    escribirTexto(mensaje);
}

function escribirTexto(elemento) {
    if (index < texto.length) {
        if (texto[index] === "\n") {
            elemento.innerHTML += "<br>";
        } else {
            elemento.innerHTML += texto[index];
        }
        index++;
        setTimeout(() => escribirTexto(elemento), 50);
    } 
}