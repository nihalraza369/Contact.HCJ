document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const response = document.getElementById("responseText");
  
    if (name) {
      response.innerText = `Thanks ${name}, we’ll contact you soon!`;
      this.reset();
    } else {
      response.innerText = "Please fill all fields.";
    }
  });
  