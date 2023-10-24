const form = document.getElementById("form");
const errorImage = document.querySelectorAll(".form__img");
const errorBorder = document.querySelectorAll(".form__input-holder");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const ferror = document.getElementById("fname-error");
const lerror = document.getElementById("lname-error");
const eerror = document.getElementById("email-error");
const perror = document.getElementById("password-error");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const btn = document.querySelector(".submit");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Test");
  if (
    fname.value === "" ||
    lname.value === "" ||
    email.value === "" ||
    password.value === "" ||
    !RegEmail.test(email.value.trim())
  ) {
    if (fname.value === "") {
      errorImage[0].style.visibility = "visible";
      errorBorder[0].classList.add("error-line");
      ferror.style.visibility = "visible";
      ferror.textContent = "First Name Cannot be left empty";
    } else {
      errorImage[0].style.visibility = "hidden";
      errorBorder[0].classList.remove("error-line");
      ferror.textContent = "";
    }

    if (lname.value === "") {
      errorImage[1].style.visibility = "visible";
      errorBorder[1].classList.add("error-line");
      lerror.style.visibility = "visible";
      lerror.textContent = "Last Name Cannot be left empty";
    } else {
      errorImage[1].style.visibility = "hidden";
      errorBorder[1].classList.remove("error-line");
      lerror.textContent = "";
    }

    if (email.value === "") {
      errorImage[2].style.visibility = "visible";
      errorBorder[2].classList.add("error-line");
      eerror.style.visibility = "visible";
      eerror.textContent = "Email Cannot be left empty";
    } else if (!RegEmail.test(email.value.trim())) {
      errorImage[2].style.visibility = "visible";
      errorBorder[2].classList.add("error-line");
      eerror.textContent = "Please enter a valid email address";
    } else {
      errorImage[2].style.visibility = "hidden";
      errorBorder[2].classList.remove("error-line");
      eerror.textContent = "";
    }

    if (password.value === "") {
      errorImage[3].style.visibility = "visible";
      errorBorder[3].classList.add("error-line");
      perror.style.visibility = "visible";
      perror.textContent = "Password Cannot be left empty";
    } else {
      errorImage[3].style.visibility = "hidden";
      errorBorder[3].classList.remove("error-line");
      perror.textContent = "";
    }
  } else {
    alert("Thank You");
  }
});
