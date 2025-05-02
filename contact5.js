document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".glass-card", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });
  
    const form = document.getElementById("contactForm");
    const response = document.getElementById("responseText");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        response.innerHTML = `Thanks, <strong>${name}</strong>! We'll be in touch.`;
        form.reset();
      } else {
        response.innerHTML = `<span style="color: #ff5252;">Please fill all fields.</span>`;
      }
    });
  });
  