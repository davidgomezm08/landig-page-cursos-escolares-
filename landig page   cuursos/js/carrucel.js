  const carrusel = document.getElementById('carrusel');
    let desplazamiento = 0;

    function moverCarrusel(direccion) {
      const anchoTarjeta = 320;
      const maxDesplazamiento = carrusel.scrollWidth - carrusel.clientWidth;

      desplazamiento += direccion * anchoTarjeta;

      if (desplazamiento < 0) desplazamiento = 0;
      if (desplazamiento > maxDesplazamiento) desplazamiento = maxDesplazamiento;

      carrusel.style.transform = `translateX(-${desplazamiento}px)`;
    }