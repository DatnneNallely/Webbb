document.addEventListener("DOMContentLoaded", function () {
    // Animaciones al hacer scroll
    const animatedElements = document.querySelectorAll(".animate-slide-in, .animate-fade-in");
    function handleScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Menú responsive
    const menuToggle = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector(".navbar-collapse");
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });

    // Efecto en botones
    document.querySelectorAll("button, .btn").forEach(btn => {
        btn.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });
        btn.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Carrusel de imágenes
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-item");
    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex >= slides.length) slideIndex = 0;
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 3000); // Cambia cada 3 segundos
    }
    if (slides.length > 0) showSlides();

    // Modal emergente
    const modal = document.querySelector(".modal");
    const openModalBtn = document.querySelector(".open-modal");
    const closeModalBtn = document.querySelector(".close-modal");
    if (openModalBtn && modal) {
        openModalBtn.addEventListener("click", function () {
            modal.style.display = "block";
        });
        closeModalBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
        window.addEventListener("click", function (e) {
            if (e.target === modal) modal.style.display = "none";
        });
    }
});
