let UserNameEl = document.querySelector("#username");
let emailEl = document.querySelector("#email");
let PasswordEl = document.querySelector("#password");
let loginEl = document.querySelector("#login");
let signupEl = document.querySelector("#signup");
let signupswitchingtologininterface = document.querySelector(
  "#signupswitchingtologininterface"
);
let loginswitchingtosignupterface = document.querySelector(
  "#loginswitchingtosignupterface"
);
let loginSection = document.querySelector("#loginSection");
let signupSection = document.querySelector("#signupSection");
signupswitchingtologininterface.addEventListener("click", () => {
  signupSection.style.display = "none";
  loginSection.style.display = "block";
});
loginswitchingtosignupterface.addEventListener("click", () => {
  loginSection.style.display = "none";
  signupSection.style.display = "block";
});
// signupvalidation
signupEl.addEventListener("click", () => {
  signupvalidation();
  UserNameEl.value = "";
  PasswordEl.value = "";
  emailEl.value = "";
});
let signupvalidation = () => {
  if (
    UserNameEl.value.trim() === "" ||
    emailEl.value.trim() === "" ||
    PasswordEl.value.trim() === ""
  ) {
    alert("Complete all required fields");
  } else {
    alert("Account created Successfully");
  }
};
// login validatin
loginEl.addEventListener("click", () => {
  loginvalidation();
  UserNameEl.value = "";
  PasswordEl.value = "";
});
let loginvalidation = () => {
  if (
    UserNameEl.value === "Muhammad Munir" &&
    PasswordEl.value === "Munir4567@"
  ) {
    alert("Login Successfull");
  } else {
    alert("Invalid username or password");
  }
};
