const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            calculateHeight:true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
