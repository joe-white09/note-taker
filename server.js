const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});