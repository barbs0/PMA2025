//console.log(document.getElementById("forma")); // should not be null


document.getElementById("forma").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      window.location.href = "profil.html";  
    } else {
      message.textContent = "Neispravni podaci!";
    }
  })
  .catch(error => {
    message.textContent = "Greška u vezi sa serverom!";
    console.error(error);
  });
});
