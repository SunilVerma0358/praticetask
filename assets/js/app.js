let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let number = document.getElementById("number");
let Password = document.getElementById("Password");
let errorName = document.getElementById("error");
let errorEmail = document.getElementById("errorEmail");
let errorNumber = document.getElementById("errorNumber");
let errorPassword = document.getElementById("errorPassword");
const regex = {
  name: /^[a-zA-Z\s]+$/,
  numbe: /^\d{10}$/,
  email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!regex.name.test(Name.value)) {
    errorName.innerHTML = "Invaild Name";
  } else {
    errorName.innerHTML = "";
  }

  if (!regex.email.test(Email.value)) {
    errorEmail.innerHTML = "Invaild Email";
  } else {
    errorEmail.innerHTML = "";
  }
  if (!regex.numbe.test(number.value)) {
    errorNumber.innerHTML = "Invaild Number";
  } else {
    errorNumber.innerHTML = "";
  }
  if (!regex.password.test(Password.value)) {
    errorPassword.innerHTML = "Invaild Password";
  } else {
    errorPassword.innerHTML = "";
  }
  if (
    Name.value !== "" &&
    Email.value !== "" &&
    number.value !== "" &&
    Password.value !== ""
  ) {
    console.log(Name.value);
    console.log(Email.value);
    console.log(number.value);
    console.log(Password.value);
    alert("from submit by user");
    this.reset();
  }
});
document.getElementById("toggleButton").addEventListener("click", function () {
  const type =
    Password.getAttribute("type") === "password" ? "text" : "password";
  Password.setAttribute("type", type);
});
document.getElementById("toogle-theme").addEventListener("click", function () {
  if (document.documentElement.getAttribute("mode") === "light") {
    document.documentElement.setAttribute("mode", "dark");
  } else if (document.documentElement.getAttribute("mode") === "dark") {
    document.documentElement.setAttribute("mode", "orange");
  } else {
    document.documentElement.setAttribute("mode", "light");
  }
});
