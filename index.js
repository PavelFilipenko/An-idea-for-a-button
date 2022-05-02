const btn = document.getElementById("button"); //присваиваем переменной значение элемента html
const btnOpacity = document.getElementById("button-opacity");

btnOpacity.addEventListener("click", function handleClick() {
  document.querySelector("span").style.fontSize = "100%";
  document.querySelector("#button-chrom").style.border = "5px solid #115489";
  btn.innerHTML = `<img src="instagram.png" height = 100px />`;
});

/*btnOpacity.addEventListener("click", function handleClick() {
  let initialText = `Contact <br /><span>me!</span>`;

  if (btn.textContent.toLowerCase() == initialText.toLowerCase()) {
    btn.innerHTML = `My <br /><span>instagram!</span>`;
  } else {
    btn.textContent = initialText;
  }
}); */
