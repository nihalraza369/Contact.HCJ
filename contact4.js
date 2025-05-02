const form = document.getElementById("contactForm");
const response = document.getElementById("formResponse");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    response.innerHTML = `Thanks <strong>${name}</strong>, we’ll get back to you soon!`;
    form.reset();
  } else {
    response.innerHTML = `<span style="color: red;">Please fill out all fields correctly.</span>`;
  }
});
