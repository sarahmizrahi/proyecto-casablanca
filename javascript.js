

//INDEX.html

//Funcion plugin calendario reservar
$(function() {
  $("#datepicker").datepicker({
      dateFormat: 'dd/mm/yy' // Formato de fecha europeo
  });
  $("#datepicker-salida").datepicker({
      dateFormat: 'dd/mm/yy' // Formato de fecha europeo
  });
});

//Funcion CLAVE
function reservar() {
  console.log("Reservar función llamada");
  var fechaEntrada = $("#datepicker").val();
  var fechaSalida = $("#datepicker-salida").val();
  var numViajeros = $("#viajeros").val();

  if (fechaEntrada && fechaSalida && numViajeros) {
      //Convierte las fechas a objetos Date para calcular numero de noches
      var fechaEntradaObj = $.datepicker.parseDate('dd/mm/yy', fechaEntrada);
      var fechaSalidaObj = $.datepicker.parseDate('dd/mm/yy', fechaSalida);

      //Calcula numero de noches
      var diferenciaMs = fechaSalidaObj.getTime() - fechaEntradaObj.getTime();
      var numeroNoches = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

      //Guarda la infoen sessionStorage
      sessionStorage.setItem("fechaEntrada", fechaEntrada);
      sessionStorage.setItem("fechaSalida", fechaSalida);
      sessionStorage.setItem("numViajeros", numViajeros);
      sessionStorage.setItem("numeroNoches", numeroNoches);

      // Redirigir a alojamientos
      window.location.href = "alojamientos.html";
  } else {
      alert("Por favor, rellena todos los campos.");
  }
}

function reservaAhora(event) {
  var botonID = event.target.id;
  var apartamento;
  var precioPorNoche;

  if (botonID === "btnReservaAp1") {
      apartamento = "Apartamento 2 habitaciones";
      precioPorNoche = 90;
  } else if (botonID === "btnReservaAp2") {
      apartamento = "Apartamento 3 habitaciones";
      precioPorNoche = 120;
  }

  var numeroNoches = sessionStorage.getItem("numeroNoches");
  var precioTotal = precioPorNoche * numeroNoches;

  sessionStorage.setItem("apartamento", apartamento);
  sessionStorage.setItem("precioPorNoche", precioPorNoche);
  sessionStorage.setItem("precioTotal", precioTotal);

  // Redirigir a datos-reserva
  window.location.href = "datos-reserva.html";
}

$(document).ready(function() {
  var fechaEntrada = sessionStorage.getItem("fechaEntrada");
  var fechaSalida = sessionStorage.getItem("fechaSalida");
  var numViajeros = sessionStorage.getItem("numViajeros");
  var numeroNoches = sessionStorage.getItem("numeroNoches");
  var apartamento = sessionStorage.getItem("apartamento");
  var precioPorNoche = sessionStorage.getItem("precioPorNoche");
  var precioTotal = sessionStorage.getItem("precioTotal");

  // Mostrar la informacion almacenada
  $("#entrada-title").text(fechaEntrada ? "Fecha de entrada: " + fechaEntrada : "Selecciona una fecha.");
  $("#salida-title").text(fechaSalida ? "Fecha de salida: " + fechaSalida : "Selecciona una fecha.");
  $("#viajeros-title").text(numViajeros ? "Número de viajeros: " + numViajeros : "Selecciona un número de viajeros.");
  $("#numero-noches").text(numeroNoches ? "Número de noches: " + numeroNoches : "Error.");
  $("#info-reserva").text(apartamento ? " " + apartamento : "No se ha seleccionado apartamento.");
  $("#precio-noche").text(precioPorNoche ? "Precio por noche: " + precioPorNoche + "€" : "Error.");
  $("#precio-total").text(precioTotal ? "Precio total de la estancia: " + precioTotal + "€" : "Error.");

  //Mostrar precios en desglose
  $(".precio-noche").text(precioPorNoche ? "Precio por noche: " + precioPorNoche + "€" : "Error.");
  $(".precio-total").text(precioTotal ? "Total: " + precioTotal + "€" : "Error.");
});


//TODAS WEBS HTML
  //Funciones para redireccionar
      // Inicio
      function redireccionarInicio(event) {
        //Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        //Redirigir
        location.href = "index.html";
      }

      // Alojamientos
      function redireccionarAlojamientos(event) {
        //Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        //Redirigir
        location.href = "alojamientos.html";
      }

      // Mapa
      function redireccionarMapa(event) {
        //Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        //Redirigir
        location.href = "mapa.html";
      }

      // Contacto
      function redireccionarContacto(event) {
        //Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        //Redirigir
        location.href = "contacto.html";
      }

      //Pago
      function pago(event) {
        //Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        //Redirigir
        location.href = "pago.html";
      }

      
//CONTACTO.html
//Ajax para mensaje de Enviado
function enviarContacto() {
  var formData = new FormData(document.getElementById('contact-form'));

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'script.php', true);

  xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
          document.getElementById('success-message').innerText = xhr.responseText;
          document.getElementById('success-message').style.display = 'block';

          // Limpiar el formulario después del envío exitoso
          document.getElementById('contact-form').reset();
      } else {
          document.getElementById('success-message').innerText = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
          document.getElementById('success-message').style.display = 'block';
      }
  };

  xhr.onerror = function () {
      document.getElementById('success-message').innerText = 'Hubo un error de red. Inténtalo de nuevo.';
      document.getElementById('success-message').style.display = 'block';
  };

  xhr.send(formData);
}



/*Banner cookies */
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAceptadas")) {
      document.getElementById("cookie-banner").style.display = "block";
  }
});

function aceptartCookies() {
  localStorage.setItem("cookiesAceptadas", "true");
  document.getElementById("cookie-banner").style.display = "none";
}








