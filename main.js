var express = require("express");
var app = express();
var html = require("html")
var ejs = require("ejs")
//// Konsola Ping Yazdırma ///

var tcpp = require('tcp-ping');
var pingarea = "google.com"
tcpp.probe(pingarea, 80, function(err, available) {
    console.log(pingarea, ' Adresine Bağlantı Testi Yapılıyor' ,available);
});

tcpp.ping({ address: pingarea }, function(err, data) {
    console.log(pingarea,' Adresine Ping Testi Yapılıyor' ,data);
});

//// Bitti ////


//// Server ////
var port = 3000
var server = app.listen(port, function(){
    console.log("Server şu anda port numarasında açılıyor:", port );
    console.log('Sunucu şu anda ', port, ' portunda ve ', port, ' adresinde çalışmaya başladı')
});

app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("index.ejs")
})

app.get("/sunucular", function(req, res){
    res.render("sunucular.ejs")
})

//// Özel Sunucular ////

app.get("/lemfamily", function(req, res){
    res.render("lemfamily.ejs")
}) //// Lem Family ////

//// Bitti ////