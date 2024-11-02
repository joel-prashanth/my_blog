document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
  });
});

document
  .getElementById("download-button")
  .addEventListener("click", function () {
    fetch("./assets/resume.pdf") // Path to your resume file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob(); // Convert the response to a Blob
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob); // Create a URL for the Blob
        const a = document.createElement("a"); // Create a temporary anchor element
        a.href = url; // Set the href to the Blob URL
        a.download = "resume.pdf"; // Filename for the downloaded file
        document.body.appendChild(a); // Append to body
        a.click(); // Programmatically click the link to trigger the download
        a.remove(); // Remove the anchor from the document
        window.URL.revokeObjectURL(url); // Free up memory
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  });
