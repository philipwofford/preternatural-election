const express = require(`express`);
const app = express();

// routes
app.get(`/`, (req, res) => {
	res.send(`Welcome to Preternatural Election`);
})

// server
const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});