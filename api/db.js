const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/instablog', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on('error', (error) => console.error(error));
connection.once('open', () => console.log('connected to database'));

module.exports = connection;
