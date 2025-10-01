// ===== MENU RESPONSIVO =====

const navToggle = document.createElement("button");

navToggle.innerHTML = "☰";

navToggle.style.background = "none";

navToggle.style.border = "none";

navToggle.style.fontSize = "2rem";

navToggle.style.cursor = "pointer";

navToggle.style.color = "#fff";



const navMenu = document.querySelector("nav div");

const navBar = document.querySelector("nav");



navBar.insertBefore(navToggle, navMenu);



navToggle.addEventListener("click", () => {

  navMenu.classList.toggle("show");

});



// ===== VALIDACIÓN DE FORMULARIO =====

const form = document.querySelector("form");



if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();



    const nombre = form.nombre.value.trim();

    const email = form.email.value.trim();

    const mensaje = form.mensaje.value.trim();



    if (nombre.length < 3) {

      alert("⚠️ El nombre debe tener al menos 3 caracteres.");

      return;

    }



    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      alert("⚠️ Ingresa un email válido.");

      return;

    }



    if (mensaje.length < 10) {

      alert("⚠️ El mensaje debe tener al menos 10 caracteres.");

      return;

    }



    alert("✅ ¡Formulario enviado correctamente!");

    form.reset();

  });

}