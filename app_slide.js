function slidesPlugin(active = 0){
    const slides = document.querySelectorAll('.slide');

    slides[active].classList.add('active_sld');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add("active_sld");
    
    
        });
    }
    function clearActiveClasses(){
        slides.forEach((slide) => {
            slide.classList.remove("active_sld");
        });
    }
        
}
slidesPlugin(1);