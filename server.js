const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes/index');
const apiRoutes = require('./routes/apiRoutes/noteRoute');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});