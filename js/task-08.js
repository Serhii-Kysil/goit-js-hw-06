const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = formEl.elements.email;
  const passwordInput = formEl.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Усі поля повинні бути заповнені");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
    formEl.reset();
  }
});
