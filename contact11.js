document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("responseText").innerText = "Thanks for contacting us! 🌊";
    this.reset();
  });
  