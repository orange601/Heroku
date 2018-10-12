module.exports = {
  publicService : function(){
    const express = require('express');
    const router = express.Router();
    const httpClienctServicePath = "../services/hpptCliecntService.js";
    const options = {
      host: "www.eyacoin.com",
      port: "80",
      path:"/API/ExchangeRate.aspx?lang=eng",
      //json: true,
      //headers: {
        //'Content-Type': 'application/json',
      //}
    };
    router.get('/exchangeRate', function(req, res){
      var httpCliecntService = require(httpClienctServicePath);
      res.setHeader('content-type', 'application/json');
      httpCliecntService.httpClientService(options, function(statusCode, resultData){
        res.send(resultData);
      });
    });

    router.get('/exchangeRate/:currency', function(req, res, next){
      var httpCliecntService = require(httpClienctServicePath);
      httpCliecntService.httpClientService(options, function(statusCode, resultData){
        console.log("statusCode :", statusCode);
        var currencyKey = req.params.currency;
        var result = "";
        try{
          var exchangeRateDataJson = JSON.parse(resultData);
          var result = exchangeRateDataJson[currencyKey.toUpperCase()];
          console.log(result);
        }  catch (e) {
          console.error(e);
        };
        res.setHeader('content-type', 'application/json');
        res.send(result);
      });
    });

    return router;
  }//exchnageRate OFF

  ,privateService : function(){
    const express = require('express');
    const router = express.Router();
    router.get('/test', function(req, res){
      res.setHeader('content-type', 'application/json');
      res.send("TEST Success!");
    });
    return router;
  }
}
