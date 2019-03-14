var express = require('express');
var router = express.Router();
var clientModule= require('../modules/client.module')
 
//get all tablets
router.get('/tablets/', async (req, res, next)=> {
   res.json(await clientModule.get());
}); 
//get  tablet by id
router.get('/tablets/:id', async (req, res, next)=> {
    res.json(await clientModule.get(req.params.id)); 
}); 
//add new tablet
router.post('/tablets/', async (req, res, next)=> {
    res.json(await clientModule.save(req.body)  ); 
}); 
//delete a tablet
router.delete('/tablets/:id', async (req, res, next) => {
    res.json(await clientModule.delete(req.params.id)); 
});
 
//update
router.put('/tablets/:id', async (req, res, next) => {
    res.json(await clientModule.update(req.params.id , req.body)); 
});


module.exports = router;