/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

        const changeLogo = document.body.querySelector('#logo-web');
        if (!changeLogo) {
            return;
        }
        if (window.scrollY === 0) {
            changeLogo.classList.remove('logo-id')
        } else {
            changeLogo.classList.add('logo-id')
        }

        const changeLogoAlt = document.body.querySelector('#logo-web-alt');
        if (!changeLogoAlt) {
            return;
        }
        if (window.scrollY === 0) {
            changeLogoAlt.classList.remove('logo-id-alt');
            changeLogoAlt.classList.add('logo-id-alt2');
        } else {
            changeLogoAlt.classList.add('logo-id-alt');
            changeLogoAlt.classList.remove('logo-id-alt2');
        }

        const hideSecondRow = document.body.querySelector('#second-row');
        if (!hideSecondRow) {
            return;
        }
        if (window.scrollY === 0) {
            hideSecondRow.classList.remove('secondRow')
        } else {
            hideSecondRow.classList.add('secondRow')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//Deshabilitamos el boton de envio
function disablesubmit(){
    document.getElementById("botonEnviar").disabled = false;   
}

//mostramos en año actual  
  const d = new Date();
  let year = d.getFullYear();
  document.getElementById("years").innerHTML = year;  

