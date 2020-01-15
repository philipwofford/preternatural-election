// generic envs
const PORT = 8080;
const routes = require(`./routes/index`);

// express
const express = require(`express`);
const app = express();


// mongo db
const mongoose = require(`mongoose`);
const dbPort = 27017;
const dbAddress = `mongodb://127.0.0.1:${dbPort}`;
const shoppingListTable = `${dbAddress}/shoppinglist`

// attempts to connect to Mongo DB and logs a success or error message
const dbcon = (connectionString) => { 

	// for brevity and visual aid
	let connString = connectionString;

	// attempt to connect
	mongoose.connect(connString); 

	// success message
	mongoose.connection.on(`connected`, () => {
		console.log(`Mongo DB connected at: ${connString}`);
	})

	// error message
	mongoose.connection.on(`error`, (error) => {
		console.log(`Error occurred while connecting to: ${connString}`);
		console.log(error);
	})
}

const connectToShoppingListTable = () => { dbcon(shoppingListTable); }


// parse requests
const bodyparser = require(`body-parser`);


// cross-site security stuff
const cors = require(`cors`);


// add middleware to app
app.use(cors());
app.use(bodyparser.json());
app.use(`/api`, routes);


// connect to DB
connectToShoppingListTable();


// routes
app.get(`/`, (req, res) => {
	res.send(`Welcome to Preternatural Election`);
})

// server
const server = app.listen(`${PORT}`, () => {
  console.log(`Server running on port: ${server.address().port}`);
});