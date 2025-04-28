let nameEl = document.querySelector("#name");
let phoneEl = document.querySelector("#phone");
let emailEl = document.querySelector("#email");
let textareaEl = document.querySelector("#textarea");
let sendMessageEl = document.querySelector("#sendMessage");
sendMessageEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(nameEl.value.trim());
  console.log(emailEl.value.trim());
  console.log(phoneEl.value.trim());
  console.log(textareaEl.value.trim());
  //   console.log(sendMessageEl.value);
  setTimeout(() => {
    location.reload(); // it manually refresh the page
  }, 2000);
});
