let serachButtonEl = document.querySelector("#serachBox");
let bookshelf_oneEl = document.querySelectorAll(".bookshelf_one li a");
serachButtonEl.addEventListener("keyup", () => {
  let booktitle = serachButtonEl.value.toLowerCase();
  bookshelf_oneEl.forEach((element) => {
    let bbk = element.innerText.toLowerCase();
    if (bbk.includes(booktitle) && booktitle != "") {
      console.log(`book title: ${bbk}`);
    }
  });
});
