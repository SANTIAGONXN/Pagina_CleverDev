function mostrarFecha() {
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const hoy = new Date();
  const fechaTexto = hoy.toLocaleDateString("es-ES", opciones);

  document.querySelectorAll(".fecha").forEach(el => {
    el.textContent = fechaTexto;
  });
}


mostrarFecha();
setInterval(mostrarFecha, 60000); // actualiza cada minuto





