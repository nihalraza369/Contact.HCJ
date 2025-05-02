document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("responseText").innerText =
      "Thanks! We'll respond shortly 🚀";
    this.reset();
  });
  