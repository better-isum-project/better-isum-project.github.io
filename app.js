$(document).ready(function() {
  $("#submit-login").click((event) => {
    event.preventDefault();
    var data = {
      username: $("#username").val(),
      password: $("#password").val()
    };
    console.log(data);

    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:5550/login",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        if (response.success) {
          alert("Login successful!");
        } else {
          alert("Login failed. Please try again.");
        }
      },
      error: function(error) {
        alert("An error occurred. Please try again later.");
      }
    });
  });
});
