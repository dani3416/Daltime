document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageEl = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita envío real

    const data = new FormData(form);
    for (const [, value] of data.entries()) {
      if (!value.trim()) {
        messageEl.textContent = "Por favor completa todos los campos obligatorios.";
        messageEl.style.color = "red";
        return;
      }
    }

    // Aquí podrías conectar con un backend si lo necesitas.
    messageEl.textContent = "Mensaje enviado con éxito.";
    messageEl.style.color = "green";
    form.reset();
  });
});