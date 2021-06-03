
document.addEventListener ('DOMContentLoaded', () =>{
    const elementosCarousel = document.querySelectorAll('.carousel_mio');
    M.Carousel.init(elementosCarousel, {
        duration: 200,
        dist:-80,
        shift: 5,
        padding:5,
        numbVisible:1,
        indicators: true,
        noWrap: false,
    });
});