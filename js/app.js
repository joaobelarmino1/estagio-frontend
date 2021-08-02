function navSlide() {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burguer.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        burguer.classList.toggle('toggle');
    });

    

}

navSlide();