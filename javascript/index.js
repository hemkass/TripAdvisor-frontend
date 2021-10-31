const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const modal = $.querySelector(".modal");
  const body = $.querySelector("body");
  const header = $.querySelector("header");

  // Afficher le formulaire sur le boutton connectez-vous
  $.querySelector(".formbutton").addEventListener("click", () => {
    // Display modal
    modal.classList.remove("hidden");
    // Disable scroll
    body.classList.add("disable");
  });

  $.querySelector("#rightScrollButton").addEventListener("click", (e) => {
    e.preventDefault();
    $.querySelector("nav").scrollBy(3);
  });

  // fermeture du formulaire

  $.querySelector(".icon-times").addEventListener("click", () => {
    // Hide modal
    modal.classList.add("hidden");
    // Enable scroll
    body.classList.remove("disable");
  });

  // Récupérer les infos du formulaire
  $.querySelector("#Myform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };
    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);
  });

  console.log("page chargée");
});
