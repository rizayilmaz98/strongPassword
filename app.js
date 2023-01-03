const password = document.getElementById("password");
const passwordControl = document.getElementById("passwordControl");
const passwordControlText = document.getElementById("passwordControlText");
const regNumber = /[0-9]/;
const regLetter = /[A-Za-z]/;
const regCharacter = /[^\w\s\']|_/;

password.addEventListener("keyup", passwordKeyup);

function passwordKeyup(e) {
  if (e.target.value === "") {
    passwordControl.className = "";
  } else {
    if (
      regNumber.test(`${e.target.value}`) ||
      regCharacter.test(`${e.target.value}`) ||
      regLetter.test(`${e.target.value}`)
    ) {
      passwordControl.className = "";
      passwordControlText.innerHTML = "Weak Password"
      passwordControl.classList.add("weakPassword");
      if (
        regNumber.test(`${e.target.value}`) &&
        regCharacter.test(`${e.target.value}`)
      ) {
        passwordControl.className = "";
        passwordControlText.innerHTML = "Medium Password (Use a-z)"
        passwordControl.classList.add("mediumPassword");
        if (
          regNumber.test(`${e.target.value}`) &&
          regCharacter.test(`${e.target.value}`) &&
          regLetter.test(`${e.target.value}`)
        ) {
          passwordControl.className = "";
          passwordControlText.innerHTML = "Strong Password"
          passwordControl.classList.add("strongPassword");
        }
      }
      if (
        regNumber.test(`${e.target.value}`) &&
        regLetter.test(`${e.target.value}`)
      ) {
        passwordControl.className = "";
        passwordControlText.innerHTML = "Medium Password (Use .,-?!=)(+-_')"
        passwordControl.classList.add("mediumPassword");
        if (
          regNumber.test(`${e.target.value}`) &&
          regCharacter.test(`${e.target.value}`) &&
          regLetter.test(`${e.target.value}`)
        ) {
          passwordControl.className = "";
          passwordControlText.innerHTML = "Strong Password"
          passwordControl.classList.add("strongPassword");
        }
      }
      if (
        regLetter.test(`${e.target.value}`) &&
        regCharacter.test(`${e.target.value}`)
      ) {
        passwordControl.className = "";
        passwordControlText.innerHTML = "Medium Password (Use 0-9)"
        passwordControl.classList.add("mediumPassword");
        if (
          regNumber.test(`${e.target.value}`) &&
          regCharacter.test(`${e.target.value}`) &&
          regLetter.test(`${e.target.value}`)
        ) {
          passwordControl.className = "";
          passwordControlText.innerHTML = "Strong Password"
          passwordControl.classList.add("strongPassword");
        }
      }
    }
  }
}
