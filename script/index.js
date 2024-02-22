import { getData } from "./function.js";
const name = document.getElementById("name");
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");

let fullUrl = window.location.href;
let index = fullUrl.search("index");
let baseUrl = fullUrl.substring(0, index);

document.addEventListener("DOMContentLoaded", function () {
  let users = getData();
  let activeUser = localStorage.getItem("activeUser");
  if (activeUser) {
    let user = users.find((el) => {
      return el.username == activeUser;
    });
    name.innerHTML = user.name;
    username.innerHTML = user.username;
    age.innerHTML = user.age;
    email.innerHTML = user.email;
    password.innerHTML = user.password;
  } else {
    window.location.assign(`${baseUrl}/pages/login.html`);
  }
});
checkbox &&
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("shadow");
  });
