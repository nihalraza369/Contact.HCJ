const form = document.getElementById("contactForm");
const responseBox = document.getElementById("response");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    responseBox.innerHTML = `Thanks <strong>${name}</strong>, your message has been sent!`;
    form.reset();
  } else {
    responseBox.innerHTML = `<span style="color: red;">Please fill out all fields.</span>`;
  }
});
