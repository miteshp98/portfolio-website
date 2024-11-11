class FormValidation {
  _form = document.querySelector("form");
  _input = document.querySelectorAll("input");
  _errorMsg = document.querySelectorAll(".input-error-msg");
  _messageInput = document.querySelector("#message");

  constructor() {
    this._handleFormSubmission();
  }

  _validateUserInput() {
    const name = this._input[0].value;
    const email = this._input[1].value;
    const message = this._messageInput.value;
    const nameRegex = /^[A-Za-z\s]+$/g;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameError = this._errorMsg[0];
    const emailError = this._errorMsg[1];
    const messageError = this._errorMsg[2];

    this._errorMsg.forEach((msg) => (msg.textContent = ""));

    let isValid = true;

    // Validate Name
    if (name === "") {
      nameError.textContent = "Please fill out this field.";
      isValid = false;
    } else if (!nameRegex.test(name)) {
      nameError.textContent = "Name can only contain letters and spaces.";
      isValid = false;
    }

    // Validate email
    if (email === "") {
      emailError.textContent = "Please fill out this field.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate message
    if (message.trim() === "") {
      messageError.textContent = "Message cannot be empty.";
      isValid = false;
    }

    this._clearError();

    return isValid;
  }

  _clearInputField() {
    this._input.forEach((input) => {
      input.value = "";
    });
    this._messageInput.value = "";
  }

  _handleFormSubmission() {
    this._form.addEventListener("input", (e) => {
      this._validateUserInput();
    });
  }

  _clearError() {
    setTimeout(() => {
      this._errorMsg.forEach((error) => (error.textContent = ""));
    }, 3000);
  }
}

export default FormValidation;
