let selectChoices = document.querySelector(".select-choices");
console.log(selectChoices);

let socialMedia = document.querySelector(".social-media");

selectChoices.addEventListener("click", select);

function select() {
  socialMedia.classList.toggle("scale");
  selectChoices.children[1].classList.toggle("rotate");
}

for (let i = 0; i < socialMedia.childElementCount; i++) {
  socialMedia.children[i].addEventListener("click", () => {
    selectChoices.children[0].textContent =
      socialMedia.children[i].children[1].textContent;
    socialMedia.classList.toggle("scale");
    selectChoices.children[1].classList.toggle("rotate");
  });
}
