document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("responseText");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
  
      if (name) {
        response.innerText = `Thank you, ${name}! Message sent successfully.`;
        form.reset();
      } else {
        response.innerText = "Please complete the form.";
      }
    });
  });
  