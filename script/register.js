import { validateRegister, getData } from "./function.js";
const name = document.getElementById("name");
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const button = document.getElementById("button");
const form = document.getElementById("form");
const checkbox = document.getElementById("checkbox");

checkbox &&
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validateRegister(
      name,
      username,
      age,
      email,
      password,
      repassword
    );
    if (isValid) {
      const user = {
        name: name.value,
        username: username.value,
        age: age.value,
        email: email.value,
        password: password.value,
      };

      let users = getData();
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      form.reset();
      let index = window.location.href.search("pages");
      let baseUrl = window.location.href.substring(0, index);
      window.location.assign(`${baseUrl}pages/login.html`);
    }
  });
