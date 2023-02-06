$(document).ready(function() {
  $("#submit-login").click((event) => {
    event.preventDefault();
    var data = {
      username: $("#username").val(),
      password: $("#password").val()
    };

    $.ajax({
      type: "POST",
      url: "https://betterisumproject.pythonanywhere.com/login",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(response) {
        if (response.success) {
          alert("Login successful!");
        } else {
          alert("Login failed. Please try again.");
        }
      },
      error: function(error) {
        alert("An error occurred. Please try again later.");
        console.log(error);
      }
    });
  });
});
