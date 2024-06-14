document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const noteSelect = document.getElementById("note");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const noteError = document.getElementById("noteError");
  const successMessage = document.getElementById("successMessage");

  function validateField(field, errorElement, minLength) {
    minLength = minLength || 0;
    if (field.value.trim() === "") {
      errorElement.textContent = "Ce champ est obligatoire.";
      return false;
    } else if (field.type === "email" && !isValidEmail(field.value)) {
      errorElement.textContent = "Veuillez entrer une adresse mail valide.";
      return false;
    } else if (field.value.length < minLength) {
      errorElement.textContent =
        "Ce champ doit contenir au moins " + minLength + " caractères.";
      return false;
    } else {
      errorElement.textContent = "";
      return true;
    }
  }

  function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
  }

  function validateForm() {
    let isFormValid = true;

    if (!validateField(nameInput, nameError, 3)) {
      isFormValid = false;
    }
    if (!validateField(emailInput, emailError)) {
      isFormValid = false;
    }
    if (!validateField(messageInput, messageError, 10)) {
      isFormValid = false;
    }
    if (!validateField(noteSelect, noteError)) {
      isFormValid = false;
    }

    return isFormValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      successMessage.textContent = "Votre feedback a été envoyé avec succès !";
      successMessage.style.display = "block";
      form.reset();
    } else {
      successMessage.style.display = "none";
    }
  });

  nameInput.addEventListener("input", function () {
    validateField(nameInput, nameError, 3);
  });

  emailInput.addEventListener("input", function () {
    validateField(emailInput, emailError);
  });

  messageInput.addEventListener("input", function () {
    validateField(messageInput, messageError, 10);
  });

  noteSelect.addEventListener("change", function () {
    validateField(noteSelect, noteError);
  });
});
