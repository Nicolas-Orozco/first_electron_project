const count = document.querySelector("#count");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  count.innerHTML = +count.innerText + 1;
});
