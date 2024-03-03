import { Authentication } from "../controller.js";

const btnsubmit = document.getElementById("formSubmit");

// email, password có value
// email phải đúng định dạng

const submit = async (e) => {
  e.preventDefault();
  const { email, password, age, fullName } = e.target;
  const createUser = new Authentication();
  const { user } = await createUser.Register(age, fullName, email, password);
  if (user) {
    alert("success");
    window.location.href = "../login/login.html";
  }
};

btnsubmit.addEventListener("submit", submit);
/**
 * sự kiện: btn, input, a, link,...
 *
 * windown: sự kiện của web:  window.location.href = "../login/login.html";
 */
