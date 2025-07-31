// test.js - intentionally includes bugs for AI review testing

const express = require('express')
const app = express()
const PORT = 3000

// Unused variable
const unused = "I am not used"

// No input validation
app.get('/user', (req, res) => {
  const userId = req.query.id
  const query = `SELECT * FROM users WHERE id = '${userId}'` // SQL Injection risk
  console.log("Running query: " + query)

  // Missing database connection and try-catch
  db.execute(query, (err, result) => {
    if (err) {
      res.send("Something went wrong") // Unclear error message
    } else {
      res.send(result)
    }
  })
})

// Bad async handling
app.get('/delay', async (req, res) => {
  setTimeout(() => {
    res.send("Done after delay") // This won't wait correctly if using async
  }, 1000)
})

// Inconsistent naming
function GetUserName(id) {
  return "User_" + id
}

// Logic bug
function isEven(num) {
  return num % 2 === 1 // Should be 0
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
