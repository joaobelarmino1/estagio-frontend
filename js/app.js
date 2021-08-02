function navSlide() {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.getElementsByTagName("BODY")[0];
    const darkenBackground = document.querySelector('.darken-background');

    burguer.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        burguer.classList.toggle('toggle');
        body.classList.toggle('scroll-disabled');

        if (darkenBackground.classList.contains('disabled')) {
            darkenBackground.classList.remove('disabled');
        } else {
            darkenBackground.classList.add('disabled');
        }
    });

    



}

navSlide();