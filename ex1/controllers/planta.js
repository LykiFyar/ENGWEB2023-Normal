var Planta = require('../models/planta')


module.exports.list = () => {
    return Planta.find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlanta = id => {
    return Planta.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listBySpecies = species => {
    return Planta.find({especie:species})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.listByImplantacao = imp => {
    return Planta.find({implantacao:imp})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listFreguesias = () => {
    return Planta.aggregate(
            [
                {$project:{"freguesia":1}},
                {$group:{_id:"$freguesia"}}
            ]
            ).sort({_id:1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listEspecies = () => {
    return Planta.aggregate([
            {$project:{"especie":1}},
            {$group:{_id:"$especie"}}
            ]).sort({_id:1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.addPlanta = e => {
    return Planta.create(e)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.updatePlanta = e => {
    return Planta.updateOne({_id:e._id},e)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}