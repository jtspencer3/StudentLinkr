// Requiring module
const express = require('express');

// Port Number
const PORT = process.env.PORT || 3001;

// Creating express object
const app = express();

// Handling GET request
// app.get('/', (req, res) => {
// 	res.send('A simple Node App is '
// 		+ 'running on this server')
// 	res.end()
// });

// Testing connection with React
app.get("/api", (req, res) => {
	res.json({ message: "Hello from Express!"});
});

// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));

// app.get('/express_backend', (req, res) => {
// 	res.send( { express: 'Your express backend is connected to react.' });
// });



