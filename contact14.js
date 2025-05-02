document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("responseText").innerText = "Message Sent Successfully! 🌟";
    this.reset();
  });
  