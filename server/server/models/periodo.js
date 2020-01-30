const mongoose = require('mongoose');
const { Schema } = mongoose;

const periodoSchema = new Schema({
    periodo: { type: String, required: false}
});

module.exports = mongoose.model('Periodo', periodoSchema);