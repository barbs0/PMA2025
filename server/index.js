const express = require('express');
const cors = require('cors'); // 🔥 Add this

const app = express();
const port = 3000;

app.use(cors()); // 🔥 Add this line to allow any frontend
app.use(express.json());

const users = [
  { username: "barbara", password: "1234" }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Add this GET /login route for debugging
app.get("/login", (req, res) => {
  console.log("GET /login received");
  res.status(404).send("GET /login not supported");
});
//-----------------------------------------------------

app.listen(port, () => {
  console.log("Server pokrenut na http://localhost:3000");
});
