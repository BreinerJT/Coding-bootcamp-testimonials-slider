const prevBtn = document.querySelectorAll(".prev-btn")
const nextBtn = document.querySelectorAll(".next-btn")
const reviews = document.querySelectorAll(".review")


reviews.forEach((review, index) => {
    review.style.left = `${index*100}%`
})

let counter = 0

prevBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        counter--
        slideTestimonial()
    })
})

nextBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        counter--
        slideTestimonial()
    })
})

window.addEventListener("keydown", (e) => {
    let value = e.key
    if(value === 'ArrowLeft') counter--
    if(value === 'ArrowRight') counter++
    
    slideTestimonial()
})

function slideTestimonial() {
    if(  counter < 0) counter = reviews.length - 1
    if(counter > reviews.length - 1) counter = 0    

    reviews.forEach(review => {
        review.style.transform = `translateX(-${counter*100}%)`
    })
}