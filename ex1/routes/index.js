var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')



router.get('/plantas/freguesias', function(req, res, next) {
  Planta.listFreguesias()
  .then(fregs => res.status(200).json(fregs))
  .catch(erro => res.status(524).json({erro: erro, mensagem: "Erro na obtenção das freguesias."}))
});


router.get('/plantas/especies', function(req, res, next) {
  Planta.listEspecies()
  .then(esps => res.status(200).json(esps))
  .catch(erro => res.status(525).json({erro: erro, mensagem: "Erro na obtenção das espécies."}))
});


router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
  .then(plantas => res.status(200).json(plantas))
  .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro na obtenção da planta: " + req.params.id}))
});

router.get('/plantas', function(req, res) {
  if(req.query && (req.query.especie || req.query.implant)) {
    if(req.query.especie) {
      Planta.listBySpecies(req.query.especie)
        .then(plantas => res.status(200).json(plantas))
        .catch(erro => res.status(522).json({erro: erro, mensagem: "Erro na obtenção da lista de plantas da espécie " + req.query.especie}))
    }
    else 
      if(req.query.implant)
          Planta.listByImplantacao(req.query.implant)
          .then(plantas => res.status(200).json(plantas))
          .catch(erro => res.status(523).json({erro: erro, mensagem: "Erro na obtenção da lista de plantas com implantação " + req.query.implant}))
  }
  else {
    Planta.list()
    .then(plantas => res.status(200).json(plantas))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na obtenção da lista de plantas"}))
  }
});



router.post('/plantas', function(req, res, next) {
  Planta.addPlanta(req.body)
  .then(planta => res.status(201).json(req.body))
  .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro a adicionar planta: " + req.body}))
});

router.put('/plantas/:id', function(req, res, next) {
  Planta.updatePlanta(req.body)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(527).json({erro: erro, mensagem: "Erro a alterar Planta"}))
});

router.delete('/plantas/:id', function(req, res, next) {
  Planta.deletePlanta(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(528).json({erro: erro, mensagem: "Erro a apagar Planta"}))
});

module.exports = router;
