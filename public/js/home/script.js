const CarouselHTML = document.getElementById('carousel');

function Slide(){
    CarouselHTML.style.backgroundImage = "url('/image/carroussel01.jpg')";
    setTimeout(() => {
        CarouselHTML.style.backgroundImage = "url('/image/carroussel02.jpg')";
        setTimeout(() => {
            CarouselHTML.style.backgroundImage = "url('/image/carroussel03.jpg')";
            setTimeout(Slide(), 5000)
        }, 5000)
    }, 5000)
}

setInterval(Slide(), 5000);