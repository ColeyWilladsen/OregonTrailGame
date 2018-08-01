$(document).ready(function () {
  var userSearch = $("#loginUser");
  var passwordSearch = $("#loginPswrd")

  var userInput = $("#createUser");
  var userPassword = $("#createPswrd");


  $(document).on("click", "#add-btn", authenticateUser);
  $(document).on("click", "#add-btn2", handleUser);

  function handleUser(event) {
    event.preventDefault();
    if (!userInput.val().trim()) {
      return;
    }

    insertUser({
      user_name: userInput.val().trim(),
      password: userPassword.val().trim()
    });
  }
  function insertUser(data) {
    $.post("/api/users", data, function (response) {
      console.log(response);
      console.log(response.id);
      var userString = response.id;
      localStorage.setItem("user", userString);
      // window.location.href = "/cookbook";
    });
  }

  function authenticateUser(event) {
    event.preventDefault();
    if (!userSearch.val().trim()) {
      return;
    }

    findUser({
      user_name: userSearch.val().trim(),
      password: passwordSearch.val().trim()
    });
  }

  function findUser(data) {
    $.get("/api/users", data, function (response) {
      console.log(response);
      console.log(response.id);
      var userString = response.id;
      localStorage.setItem("user", userString);
      // window.location.href = "/cookbook";
    });
  }
});
