particlesJS(
 {
   "particles": {
     "number": {
       "value": 160,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 1,
       "random": true,
       "anim": {
         "enable": true,
         "speed": 1,
         "opacity_min": 0,
         "sync": false
       }
     },
     "size": {
       "value": 2,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 4,
         "size_min": 0.3,
         "sync": false
       }
     },
     "line_linked": {
       "enable": false,
       "distance": 150,
       "color": "#ffffff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 1,
       "direction": "none",
       "random": true,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 600
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": false,
         "mode": "repulse"
       },
       "onclick": {
         "enable": false,
         "mode": "remove"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 400,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 250,
         "size": 0,
         "duration": 2,
         "opacity": 0,
         "speed": 3
       },
       "repulse": {
         "distance": 400,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 }
)

function copiarEmail(boton){
  const email = "ema.inf.dev@gmail.com";
  navigator.clipboard.writeText(email)
    .then(()=>{
      boton.classList.add("copiado");
      
      const mensaje = boton.parentElement.querySelector(".mensaje-copiado");
      mensaje.classList.add("mostrar");

      setTimeout(() => {
        mensaje.classList.remove("mostrar");
        boton.classList.remove("copiado");
      }, 1000);
    })
    .catch(err => {
      alert("Error al copiar el correo: " + err);
    });
}

const lenis = new Lenis({
  lerp: 0.1, // suavidad: valores más bajos = más suave (0.05 es bastante lento y fluido)
  duration: 1, // duración del scroll automático (1 = 1 segundo, 1.5 = 1.5 segundos, etc.)
  smooth: true,
})

function raf(time){
 lenis.raf(time);
 requestAnimationFrame(raf)
}

requestAnimationFrame(raf)