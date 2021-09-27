let scrollTop = window.pageYOffset || document.documentElement.scrollTop;




document.onscroll = function mostarFlecha(){
    if((scrollTop !== 0)){
        document.querySelector(".flecha-arriba").classList.toggle("hide")
    }
}

// var item = document.getElementsByName(".header");

// function cambiarFondo(){
//     item.setAttribute("style","background-color:green;")
// }

// item.addEventListener("mouseover",cambiarFondo,false)



ScrollReveal().reveal('.ventana-uno',{delay:200, reset:false});
ScrollReveal().reveal('.ventana-dos',{delay:200,reset:false});
ScrollReveal().reveal('.ventana-tres',{delay:200,reset:false});
ScrollReveal().reveal('.ventana-zelda',{delay:200,reset:false});
ScrollReveal().reveal('.ventana-juegos',{delay:200,reset:false});
ScrollReveal().reveal('.footer',{delay:200,reset:false});