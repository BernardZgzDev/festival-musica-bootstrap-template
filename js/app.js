// Scroll Y for change background color to navbar
window.onscroll = function( e ) {

    const scrollApplied = window.scrollY;
    const navBar        = document.querySelector('#navegacion-principal');

    if( scrollApplied > 300 ) {
        navBar.classList.add('bg-success');        
    } else {
        navBar.classList.remove('bg-success');        
    }
}

// Smooth Scroll
document.querySelectorAll('#navegacion-principal .nav-link').forEach( enlace => {

    enlace.addEventListener('click', event => {

        event.preventDefault();

        document.querySelector(enlace.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });    
});

// jQuery countdown plugin
$(document).ready(function() {

    $('#fecha').countdown( '2021/12/31', function( event ) {

        $(this).html( event.strftime('<span>%D</span> días <span>%H</span> horas <span>%M</span> minutos <span>%S</span> segundos') );
    });
});