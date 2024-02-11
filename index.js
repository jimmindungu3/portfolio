window.addEventListener("load", function () {
  clearForm();
});

function clearForm() {
  const form = document.getElementById("form");
  form.reset();
}

function getDate() {
  const currentYear = new Date().getFullYear();
  const yearElement = document.querySelector(".year");
  yearElement.textContent = currentYear;
}
getDate();
