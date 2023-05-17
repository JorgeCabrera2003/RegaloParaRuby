const songList = [
    {
        title: "Set Fire To The Rain",
        file: "Set Fire To The Rain   Adеle.mp3",
        cover: "1.jpg"

    },
    {
        title: "make you feel my love",
        file: "19 CD 1 TRACK 9 (320).mp3",
        cover: "2.jpg"
    },
    {
        title: "All I Ask",
        file: "10 All I Ask.mp3",
        cover: "3.jpg"
    },
    {
        title: "Como antes",
        file: "1. Llane - Como Antes (128).mp3",
        cover: "4.jpg"
    },
    {
        title: "Dime como quieres",
        file: "Christian Nodal_ ngela Aguilar - Dime Cmo Quiere b0a_l1CmATA.m4a",
        cover: "5.jpg"
    },
     {
        title: "Treasure",
        file: "Treasure   Bruno Mars.mp3",
        cover: "6.jpg"
    },
]

// Canción actual
let actualSong = null

// Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)

// Escuchar el elemento AUDIO
audio.addEventListener("timeupdate", updateProgress)

// Escuchar clicks en los controles
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong()   
    } else {
        pauseSong()
    }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

// Cargar canciones y mostrar el listado
function loadSongs() {
    songList.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // Escuchar clicks
        link.addEventListener("click", () => loadSong(index))
        // Añadir a li
        li.appendChild(link)
        // Aañadir li a ul
        songs.appendChild(li)
    })
}

// Cargar canción seleccionada
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = songList[songIndex].file
        playSong()
        changeSongtitle(songIndex)
        changeCover(songIndex)
    }
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

// Actualiar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

// Reproducir canción
function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}

// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

// Cambiar el cover de la canción
function changeCover(songIndex) {
    cover.src = songList[songIndex].cover
}

// Cambiar el título de la canción
function changeSongtitle(songIndex) {
     title.innerText = songList[songIndex].title
}

// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}

// Siguiente canción
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())

// GO!
loadSongs()

function msg(){
    alert('Te hice esta pagina porque con la musica puedo expresar todos esos sentimientos que siento por ti, con simples palabras se me haria imposible, porque nunca fui tan bueno con las frase para decir ni recuerdos ni presagios sólo presente, cantando , ni silencio, ni palabras tu voz, sólo.......sólo, hablándome. ')
    alert("por eso quiero desearte lo mejor que le puedo pedir a la vida para ti, te haz vuelto una gran amiga que puedo tener, me siento bendecido por conocerte y compartir a tu lado y quisiera siempre estar a tu lado, me encata tu compañia tu amistad es tan maravillosa y de la manera de como eres nunca la cambiaria...... por eso digo: Podrá nublarse el sol eternamente; Podrá secarse en un instante el mar; Podrá romperse el eje de la Tierra Como un débil cristal. ¡Todo sucederá! Podrá la muerte Cubrirme con su fúnebre crespón; Pero jamás en mí podrá apagarse. La llama de tu amor.... Nunca Cambies Ruby te quiero mucho tu amistad es algo muy valioso")
    alert("Feliz cumpleaños RUBY eres la gema mas cara de todo el mundo eres el corazón de la mina más secreta en el silencio más hondo de esta pausa, Donde la vida se hizo eternidad, Busco tu mano y descifro la causa De querer y no creer, final, intimidad.")
}