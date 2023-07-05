// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const Response = require('./ResponseSchema'); // import the response model
// const cors = require('cors'); // import cors

// const app = express();

// app.use(cors()); // use cors middleware
// app.use(bodyParser.json());

// mongoose
//     .connect('mongodb://localhost/my-portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

// // POST endpoint for creating a new response
// app.post('/api/responses', (req, res) => {
//     const newResponse = new Response({
//         liked: req.body.liked
//     });

//     newResponse
//         .save()
//         .then(response => res.json(response))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// // GET endpoint for fetching all responses
// app.get('/api/responses', (req, res) => {
//     Response.find()
//         .then(responses => res.json(responses))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// app.listen(5000, () => console.log('Server started on port 5000'));
