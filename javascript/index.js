const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const modal = $.querySelector(".modal");
  const body = $.querySelector("body");
  const header = $.querySelector("header");

  // Add bottom border on header when scrolling on axe Y

  $.querySelector(".formbutton").addEventListener("click", () => {
    // Display modal
    modal.classList.remove("hidden");
    // Disable scroll
    body.classList.add("disable");
  });
  $.querySelector(".icon-times").addEventListener("click", () => {
    // Hide modal
    modal.classList.add("hidden");
    // Enable scroll
    body.classList.remove("disable");
  });

  console.log("page chargée");
});
