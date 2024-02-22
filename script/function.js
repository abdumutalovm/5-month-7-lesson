const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateRegister(name, username, age, email, password, repassword) {
  // name required
  if (name.value.trim().length < 3) {
    alert("Name space is empty");
    name.focus();
    return false;
  }
  if (Number(name.value)) {
    alert("The name is not written with a number");
    name.focus();
    return false;
  }

  //  username required
  if (username.value.trim().length < 5) {
    alert("Username space is empty");
    username.focus();
    return false;
  }
  // Age required
  if (!age.value) {
    alert("Age space is empty");
    age.focus();
    return false;
  }
  if (age.value < 0 || age.value > 150) {
    alert("Age entered incorrectly");
    age.focus();
    return false;
  }

  //   Email required
  if (email.value.trim().length < 3) {
    alert("Email space is empty");
    email.focus();
    return false;
  }
  if (!validateEmail(email.value)) {
    alert("Email was entered incorrectly");
    email.focus();
    return false;
  }
  //   Password reuired
  if (password.value.trim().length < 4) {
    alert("Password space is empty");
    password.focus();
    return false;
  }

  if (password.value != repassword.value) {
    alert("Passwords are not the same");
    password.focus();
    repassword.focus();
    repassword.value = "";
    return false;
  }

  let users = getData();
  if (users.length) {
    let isExist = users.some((user) => {
      return user.username == username.value;
    });

    if (isExist) {
      alert("Such a user exists");
      return false;
    }
  }

  return true;
}
function validateLogin(username, password) {
  // name required

  //  username required
  if (username.value.trim().length < 5) {
    alert("Username space is empty");
    username.focus();
    return false;
  }

  //   Password reuired
  if (password.value.trim().length < 4) {
    alert("Password space is empty");
    password.focus();
    return false;
  }

  return true;
}

function getData() {
  let data = [];
  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users"));
  }
  return data;
}
export { validateRegister, getData, validateLogin };
