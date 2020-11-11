// bring express into your project
// you will need to `npm init` and `npm install express` first
// express is a function
const express = require('express');

// bring in body parser which will help us parse incoming data
const bodyParser = require('body-parser');

// create your express app
// create an instance of the express webserver, we'll call it app
const app = express();

// we'll use this port later, it's like a box number at the post office
// where our server will get/send mail/messages
const port = 5000;

// Tell express where to find static files that it can send on request
app.use(express.static('server/public'));

// tell express how to parse incoming data
app.use(bodyParser.urlencoded({ extended: true }));

// This is your array of trains
const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' }
];

// -------- BASE -----//

// Create your `/train` route here
// when a user visits localhost:5000/train
// this route should return the array of trains

// route to GET the cats
app.get('/train', (req, res) => {
    console.log('Sending train data...');
    res.send(trains);
})


// Create your `/first-train` route here
// when a user visits localhost:5000/first-train
// this route should return the first train in the array
app.get('/first-train', (req, res) => {
    console.log('Sending train data...');
    res.send(trains[0]);
})


// Create your `/last-train` route here
// when a user visits localhost:5000/last-train
// this route should return the last train in the array
app.get('/last-train', (req, res) => {
    console.log('Sending train data...');
    res.send(trains[trains.length - 1]);
})



// -------- STRETCH -----//

// Create your `/count` route here
// when a user visits localhost:5000/count
// this route should return the number of trains in the array
// NOTE: express doesn't like it when you return numbers
// instead, return an object like { totalCount: 4 }
app.get('/count', (req, res) => {
    console.log('Sending train data...');
    // make a new object to hold the train count
    let trainCount = { numberOfTrains: trains.length };
    res.send(trainCount);
})


// Create your `/random` route here
// when a user visits localhost:5000/random
// this route should return a single train at random
app.get('/random', (req, res) => {
    console.log('Sending train data...');
    // random person generator function from 'Guess Who' game
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    // make a random number within the rang of the trains array
    let randomTrainNumber = randomNumber(0, trains.length - 1)
    console.log(randomTrainNumber);
    res.send(trains[randomTrainNumber]);
})


// -------- BASE -----//

// Don't forget to start your app by running `.listen()`

// Tell server to listen on our port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})