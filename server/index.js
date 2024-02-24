const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root', 
  host: 'localhost',
  password: 'wK258t^hjan5g',
  database: 'employeeSystem',
});

app.post('/create', (req, res) => {
  const comment = req.body.comment;

  db.query('INSERT INTO employees (comment) VALUES (?)', [comment], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send("Values Inserted")
    }
  }
  );
});

app.get('/employees', (req, res) => {
   db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
   })
})

app.put('/update', (req, res) => {
  const id = req.body.id;
  const comment = req.body.comment;
  db.query(
    "UPDATE employees SET comment = ? WHERE id = ?",
    [comment, id], 
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});

