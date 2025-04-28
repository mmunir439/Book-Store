let UserNameEl = document.querySelector("#username");
let PasswordEl = document.querySelector("#password");
let loginEl = document.querySelector("#login");
loginEl.addEventListener("click", () => {
  if (
    UserNameEl.value === "Muhammad Munir" &&
    PasswordEl.value === "Munir4567@"
  ) {
    alert("login successful");
    updateInputs();
  } else if (
    UserNameEl.value === "Muhammad Munir" ||
    UserNameEl.value != "Muhammad Munir" ||
    PasswordEl.value === "Munir4567@" ||
    PasswordEl.value != "Munir4567@"
  ) {
    if (PasswordEl.value === "Munir4567@") {
      alert("please enter valid username and password");
      updateInputs();
    } else {
      alert("please enter valid username and password");
      updateInputs();
    }
  } else {
    updateInputs();
    alert("you don't have an account please create an account first");
  }
});
let updateInputs = () => {
  UserNameEl.value = "";
  PasswordEl.value = "";
};
