/* Empty JS object to act as endpoint for all routes */
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

// TODO-Spin up the server
const Server = app.listen(port, listaning);

function listaning(){
    console.log(`running on localhost: ${port}`);
}

// GET route
app.get('/all', async (req, res) => {
  if(projectData){
      res.send(projectData);
  }
});

// POST an weather
app.post('/add', async (req, res) => {
    
  const info = await req.body;
  projectData = info;
  res.send(projectData);
  
});

