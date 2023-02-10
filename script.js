let checkButton = document.getElementById("checkB");
let answer = document.getElementById("answ");
checkButton.addEventListener("click", check);

function check() {
  let text = document.getElementById("fileName").value;
  let reg = /^[A-Za-z].+\.(?:jpg|png|gif)/;
  answer.innerHTML = reg.test(text);
}
