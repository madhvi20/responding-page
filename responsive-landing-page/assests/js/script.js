document.addEventListener('DOMContentLoaded', () => {
    let testimonials = document.querySelectorAll('.testimonial');
    let index = 0;

    function showNextTestimonial() {
        testimonials[index].classList.remove('visible');
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add('visible');
    }

    setInterval(showNextTestimonial, 3000); // Change testimonials every 3 seconds
});
