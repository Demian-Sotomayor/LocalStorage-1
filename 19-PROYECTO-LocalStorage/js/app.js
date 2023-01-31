/* ——————————————————————— Variables ——————————————————————— */
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

/* ———————————————————— Event listeners ———————————————————— */
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


/* ——————————————————————— Funciones ——————————————————————— */
function agregarTweet(e) {
    e.preventDefault();

    /* ---- Textarea donde el usuario escribe ---- */
    const tweet = document.querySelector('#tweet').value;

    /* ---- Validación ---- */
    if(tweet === '') {
        mostrarError('El mensaje no puede ir vacío')
        return; // Evita que se ejecuten más líneas de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet,
    }

    /* ---- Añadir al arreglo de Tweets ---- */
    tweets = [...tweets, tweetObj];

    /* ---- Creando HTML ---- */
    crearHTML();

    /* ---- Reiniciar el formulario ---- */
    formulario.reset();
}

    /* ---- Mostrar mensaje de error ---- */
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    
    /* ---- Insertarlo en el contenido ---- */
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    /* ---- Elimina la alerta tras 3 segundos ---- */
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

/* ---- Muestra un listado de los Tweets ---- */
function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // Crear HTML

            const li = document.createElement('li');
            li.innerText = tweet.tweet;

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }
}

/* ---- Limpiar el HTML ---- */
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
