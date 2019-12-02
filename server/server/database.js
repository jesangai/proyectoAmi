const mongoose = require('mongoose');
const URI = 'mongodb://localhost/proyecto';
//const URI = 'mongodb://admin:2019@68.66.207.7:27017/proyecto';


mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;