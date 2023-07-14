// Active Menu Button //*css*/`
    let menuBtn = document.querySelector('#menu-btn');
    let menuBar = document.querySelector('.menu-bar');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('bx-x');
        menuBar.classList.toggle('active');
    }

    window.onscroll = () => {
        menuBtn.classList.remove('bx-x');
        menuBar.classList.remove('active');
    }

    // Scroll Reveal //
    ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.Home-bio h1, .About-resume', { origin: 'left'});
    ScrollReveal().reveal('.Home-bio p', { origin: 'right' });
    ScrollReveal().reveal('.Home-bio, heading', { origin: 'top' });
    ScrollReveal().reveal('.profile-pic, .About-items, .Skills-items, .Project-items, .form ', { origin: 'bottom' });

    // <!--Typing Animation -->//
    const animText = new Typed ('.animated-text', {
        strings: ['Microbiologist', 'Web Developer', 'Writer'],
        backSpeed: 100,
        typeSpeed: 100,
        backDelay: 600,
        loop: true
    });
