// Project Filter Functionality
document
  .getElementById("projectFilter")
  .addEventListener("change", function () {
    const selected = this.value;
    const projects = document.querySelectorAll("#projectList li");

    projects.forEach((project) => {
      const category = project.getAttribute("data-category");
      if (selected === "all" || category === selected) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });

// Contact Form Submission (Basic Alert for Demo)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const message = this.querySelector("textarea").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    this.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
