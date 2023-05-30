var mongoose = require('mongoose')


var plantaSchema = new mongoose.Schema({
    _id: Number,
    numregisto: Number,
    codrua: Number,
    rua: String,
    local: String,
    freguesia: String,
    especie: String,
    nomecientifico: String,
    origem: String,
    dataplantacao: String,
    estado: String,
    caldeira: String,
    tutor: String,
    implantacao: String,
    gestor: String,
    dataupdate: String,
    numintervencoes: Number
});

module.exports = mongoose.model('planta', plantaSchema);