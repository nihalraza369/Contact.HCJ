document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("responseText").innerText = "Message sent successfully! 🚀";
    this.reset();
  });
  