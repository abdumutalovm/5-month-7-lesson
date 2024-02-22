import { validateLogin, getData } from "./function.js";

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");
const form = document.getElementById("form");

checkbox &&
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validateLogin(username, password);
    if (isValid) {
      let users = getData();
      let user = users.find((el) => {
        return el.username == username.value && el.password == password.value;
      });
      if (user?.name) {
        let fullUrl = window.location.href;
        let index = fullUrl.search("pages");
        let baseUrl = fullUrl.substring(0, index);

        localStorage.setItem("activeUser", username.value);

        window.location.assign(`${baseUrl}pages/index.html`);
      } else {
        alert("The password or username was entered incorrectly");
      }
    }
  });
