const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init Middleware BodyParser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: "OK"} );
})

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contracts', require('./routes/contracts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));