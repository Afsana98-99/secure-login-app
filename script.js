document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Login Successful!");
});

eval("alert('unsafe code')");

function logout() {
  alert("Logged Out!");
}
