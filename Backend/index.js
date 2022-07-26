const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "fomagran",
  host: "localhost",
  password: "1234",
  database: "todolistSystem",
});

app.post("/create", (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const content = req.body.content;
  const priority = req.body.priority;

  db.query(
    "INSERT INTO todolistSystem.todos (author,title,content,priority) VALUES (?,?,?,?)",
    [author, title, content, priority],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserted values successfully!");
      }
    }
  );
});

app.get("/todos", (req, res) => {
  db.query("SELECT * FROM todolistSystem.todos", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/todos", (req, res) => {
  const todoid = req.body.todoid;
  const author = req.body.author;
  const title = req.body.title;
  const content = req.body.content;
  const priority = req.body.priority;

  db.query(
    "UPDATE todolistSystem.todos SET author = ?, title = ?, content = ?, priority = ? WHERE todoid = ?;",
    [author, title, content, priority, todoid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(`Inserted values successfully! ${req.body.title}`);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
