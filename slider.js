let dots = document.querySelectorAll('.dot'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    slides = document.querySelectorAll('.slider-item'),
    dotsWrap = document.querySelector('.slider-dots'),

    slideIndex = 1

showSlides()
function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }
    
    slides.forEach(item => item.style.display = 'none')
    dots.forEach(item => item.classList.remove('dot-active'))
    slides.forEach(item => item.classList.remove('op'))
       
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].classList.add('dot-active')
    slides[slideIndex - 1].classList.add('op')
}

next.addEventListener('click', () => showSlides(slideIndex += 1))
prev.addEventListener('click', () => showSlides(slideIndex += -1))

dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < slides.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target === dots[i - 1]) {
            showSlides(slideIndex = i)
        }
    }
})