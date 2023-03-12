//troca de imagem sem o button
let time = 6000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll('.img')
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove('ativa')

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add('ativa')
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)