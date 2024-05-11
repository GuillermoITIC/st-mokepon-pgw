document.addEventListener('DOMContentLoaded', function() {
    const botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    const botonFuego = document.getElementById('boton-fuego');
    const botonAgua = document.getElementById('boton-agua');
    const botonTierra = document.getElementById('boton-tierra');

    botonFuego.addEventListener('click', () => seleccionarAtaqueJugador('Fuego'));
    botonAgua.addEventListener('click', () => seleccionarAtaqueJugador('Agua'));
    botonTierra.addEventListener('click', () => seleccionarAtaqueJugador('Tierra'));
});

function seleccionarMascotaJugador() {
    const inputHipodoge = document.getElementById('hipodoge');
    const inputCapipepo = document.getElementById('Capipepo');
    const inputRatigueya = document.getElementById('Ratigueya');

    if (inputHipodoge.checked || inputCapipepo.checked || inputRatigueya.checked) {
        document.getElementById('Seleccionar-ataque').style.display = 'block';
        const mensaje = document.getElementById('mensajes').firstElementChild;
        mensaje.textContent = '¡Mascota seleccionada! Ahora elige tu ataque.';
    } else {
        alert('Selecciona a una mascota');
    }
}

function seleccionarAtaqueJugador(ataqueJugador) {
    const ataqueEnemigo = ataqueAleatorioEnemigo();
    mostrarResultado(ataqueJugador, ataqueEnemigo);
}

function ataqueAleatorioEnemigo() {
    const ataques = ['Fuego', 'Agua', 'Tierra'];
    const indiceAleatorio = Math.floor(Math.random() * ataques.length);
    return ataques[indiceAleatorio];
}

function mostrarResultado(ataqueJugador, ataqueEnemigo) {
    const resultado = document.getElementById('mensajes').firstElementChild;
    resultado.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo}`;
}
