//это серверная часть "Вкусно-Чайно"
//
// не забыть установить
// express:  npm install express --save
//
// mongoose: npm install mongoose --save
//
// request:  npm install request --save
// https://nodeguide.ru/doc/modules-you-should-know/request/

var myCount;


const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs');
const path = require('path');

const request2 = require('request');

const app = express();

//include("/js/block_mongo.js");
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const { errorMonitor } = require('events');
const { Console } = require('console');
const { Schema } = mongoose;




const dataBaseName = 'coffee_and_tea';

// Replace the following with values for your environment.
const username = encodeURIComponent('myadmin');
const password = encodeURIComponent('Abcd13579');
const clusterUrl = `cluster0.5f8w9.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;
//const clusterUrl = `localhost:27017/${dataBaseName}?retryWrites=true&w=majority`;

const authMechanism = "DEFAULT";

// Replace the following with your MongoDB deployment's connection string.
const uri =  `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;
//const uri =  `mongodb://${clusterUrl}/?authMechanism=${authMechanism}`;


// mongoose Schemas Documents

const schemaProductType = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productType: String,  //код типа продукта
  productName: String,
  productTypeEnable: Boolean,
  productTypeDateCreated: {
      type: Date,
      default: Date.now}
  },
  {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
  }  // этот объект исключил ошибку MongoWriteConcernError: No write concern mode named 'majority/' found in replica set configuration at MessageStream.messageHandler


);

const schemaProductCard = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'productType'
    },  //код типа продукта из справочника
    productName: String, //название продукта
    productProp: String,  // свойства продукта
    pic: String,  //ссылка на файл изображения
    productCost: Number, //цена
    productEnable: Boolean,
    productPromo: Boolean,
    productDateCreated: {
        type: Date,
        default: Date.now}
    },
    {
      writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
    }  // этот объект исключил ошибку MongoWriteConcernError: No write concern mode named 'majority/' found in replica set configuration at MessageStream.messageHandler


);

const schemaNews = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  newsTitle: String,  //код типа продукта
  newsBody: String,
  newsEnable: Boolean,
  newsDateBegin: Date,
  newsDateEnd: Date,
  newsCreated: {
      type: Date,
      default: Date.now}
  },
  {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
  }  // этот объект исключил ошибку MongoWriteConcernError: No write concern mode named 'majority/' found in replica set configuration at MessageStream.messageHandler


);

const productType = mongoose.model('productType', schemaProductType); 
const ProductCards = mongoose.model('productCards', schemaProductCard);
const News = mongoose.model('News', schemaNews);

/* 
Первый параметр в методе mongoose.model указывает на название модели. 
Mongoose затем будет автоматически искать в базе данных коллекцию, 
название которой соответствует названию модели во множественном числе. 
Например, в данном случае название модели "User". 
Во множественном числе в соответствии с правилами английского языка это "users". 
Поэтому при работе с данными модели User 
(добавлении, удалении, редактировании и получении объектов) mongoose будет обращаться
к коллекции "users". Если такая коллекция есть в бд, то с ней будет идти взаимодействие. 
Если такой коллекции в базе данных нет, то она будет создана автоматически.

https://metanit.com/web/nodejs/6.6.php

Второй параметр функции mongoose.model - собственно схема.


*/

// Function to connect to the server
async function run() {

  console.log("Цепляемся к базе")  ;
  try {
    // Connect the mongoose to the server
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } , function (err) {

        if (err){
          console.log('Bad connected to mongoose');
          console.log('uri==',uri);
          console.log('err==', err);

          throw err;
        }

        console.log('Successfully connected to mongoose');

     });
    console.log("Connected successfully to server");
    
  } finally {
    // Ensures that the mongoose will close when you finish/error
    //await mongoose.close();
  }
}

run().catch(console.dir);


//-------------------------------------------------------------------------------------------- + '/public'
// +__dirname

const serverDir = '\\src\\server';
const workDir = __dirname.replace(serverDir,'');

console.log('workDir : '+workDir);



app.use(express.static( workDir )) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(__dirname ))

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
})









app.get('/', function (request, response) {
  
  response.sendFile( 'index.html')
  //response.send(mongoose.db);
  //response.status(200).stringify(mongoose.db);
})

app.get('/news999', function (request, response) {
  
  response.send( {"testResp":"Тестовый ответ","body":'Много новостей'});
  
  console.log("Вернул много новостей");
  //response.send(mongoose.db);
  //response.status(200).stringify(mongoose.db);
})










app.get("/--", function(req, res)  {

  /* mongoose.db('CoffeeTea').collection('Coffee').find({}).toArray(function(err, tasks){
    if(err) return console.log(err);
    // res.send({ tasks });
    res.status(200).json(tasks);
    console.log("Данные отправленны",tasks);
  }) */

get2minus(ProductCards, res);


});

app.get("/----", function(req, res)  {
get2plus(ProductCards, res);
});


app.get("/addnews", function(req, res)  {
  get2news(News, res);
  });
  




app.listen(4000);






// -- начало -- эта функция просто создает N карточек продуктов.....  техническая функция вне проекта
async function get2plus(collect, res){

let docCount=0;

const prodTypes = await productType.find();
console.log('prodTypes===',prodTypes[0]._id);


/* prodTypes.forEach(item => {
  console.log('prodTypes===',item._id);
  
}); */

    
await ProductCards.find()
  .exec(function(err, Product_Cards) {

/* console.log('Product_Cards==',Product_Cards);
console.log('Product_Cards.length==',Product_Cards.length  );

console.log('ProductCards.countDocuments==',ProductCards.countDocuments() );
console.log('Product_Cards.countDocuments==',Product_Cards.proto ); */
//
    //ProductCards.estimatedDocumentCount(function (err, count) {

      if (err){
          console.log(err)
      }else{

        docCount = 0; //count;
        console.log("Estimated Count docCount= :", docCount); 

        if (docCount===0) {
          let prodCard;
          
var id ;          



          for (let i=1;i<3;i++) {

 //           id = ObjectId('619ea5069365ba31cc27cfe0');            
/* id = mongoose.Types.ObjectId('619ea5069365ba31cc27cfe0');  */         
// console.log('mongoose.Types.ObjectId(  ===  ',id);

              prodCard = new ProductCards( {
              _id: new mongoose.Types.ObjectId(),
              productType: prodTypes[i-1]._id, //код типа продукта из справочника
              productName: 'Продукт № '+i, //название продукта
              productProp: 'String'+i,  // свойства продукта
              pic: 'Pic'+i,  //ссылка на файл изображения
              productCost: 10*i, //цена
              productEnable: 1,
              productPromo: 1

            });

            prodCard.save()
              .then(function(doc){
                  console.log("Сохранен объект", doc);
              
              })
              .catch(function (err){
                  console.log('Ошибка!!!!!!!!!!!!!!!!!!!!!!!!!!   ',err);
              
              });
          }
        }


        ProductCards.find({ productName: /кофе/i  }).limit(10)
          .exec( function (err, small) {
            if (err){
                console.log('Erroo = ',err);
                return err;}
            else{ 
              res.status(200).send(small); //json
              console.log("Данные отправленны",small);
              //ProductCards.collection.drop();
            }  
          });
              
          
      }
    //});
  
          //console.log(ProductCardss);
      });
  
  
  
  
    };
// -- конец -- эта функция просто создает N карточек продуктов.....  техническая функция вне проекта  
 
// -- начало -- эта функция просто создает N карточек типов продуктов.....  техническая функция вне проекта
    async function get2minus(collect, res){
      let docCount;
             await ProductCards.find({}).exec(function(err, Product_Cards) {
             console.log(Product_Cards);
                  Product_Cards.estimatedDocumentCount(function (err, count) {
              
                  if (err){
                      console.log(err)
                  }else{
      
                      docCount = count;
                      console.log("Estimated Count docCount= :", docCount);
      
      if (docCount===0) {
          
        let prodType = new productType( {
          _id: new mongoose.Types.ObjectId(),
          productType: '0000000001',
          productName: 'Кофе',
          productTypeEnable: 0
      
        });
      
        prodType.save()
      .then(function(doc){
          console.log("Сохранен объект", doc);
          
      })
      .catch(function (err){
          console.log('Ошибка!!!!!!!!!!!!!!!!!!!!!!!!!!   ',err);
          
      });
      
      }
      
      
       /*                
                      Book.find({
                        title: /mvc/i
                    }).sort('-created')
                    .limit(5)
                    .exec(function(err, books) {
                        if (err) throw err;
                         
                        console.log(books);
                    }); */
      //.create
      /*                     
                            _id: new mongoose.Types.ObjectId(),
                            coffeeName: `Какой-то кофе № ${docCount}`,
                            coffeeRegion: new mongoose.Types.ObjectId(),
                            detail: `Много много интересного`,
                            pic: "Картинка",
                            created:   new Date()
         */
      
                        ProductCards.find({
                          productName: /кофе/i
                        }).limit(10)
                        .exec( function (err, small) {
                            if (err){
                                console.log('Erroo = ',err);
                                return err;}
                            else{  
          
                             
                              res.status(200).send(small); //json
                              console.log("Данные отправленны",small);
                              //ProductCards.collection.drop();
      
                            }  
                          });
                    
                
                  }
                });
                //console.log(ProductCardss);
            });
          };
// -- конец -- эта функция просто создает N карточек типов продуктов.....  техническая функция вне проекта        


// -- начало -- эта функция просто создает N карточек новостей.....  техническая функция вне проекта
async function get2news(collect, res){
  let docCount;
         await News.find({}).exec(function(err, News_Cards) {
         console.log(collect);
         collect.estimatedDocumentCount(function (err, count) {
          
              if (err){
                  console.log(err)
              }else{
  
                  docCount = count;
                  console.log("Estimated Count docCount News= :", docCount);
  
  if (docCount===0) {

    let newsCard;
    for (i=1;i<11;i++) {
      newsCard = new collect( {
      _id: new mongoose.Types.ObjectId(),
      newsTitle: "Новость № "+i,  //код типа продукта
      newsBody: i+") Много интересного",
      newsEnable: 1,      
      newsDateBegin: new Date()
      // newsDateEnd: Date 
  
      });  
    newsCard.save()
    .then(function(doc){
      console.log("Сохранен объект", doc);
        
    })
    .catch(function (err){
        console.log('Ошибка!!!!!!!!!!!!!!!!!!!!!!!!!!   ',err);
        
    });
  }
}
  


              News.find({
                newsTitle: /кофе/i
              }).limit(10)
              .exec( function (err, small) {
                  if (err){
                      console.log('Erroo = ',err);
                      return err;}
                  else{  

                    
                    res.status(200).send(small); //json
                    console.log("Данные отправленны",small);
                    //ProductCards.collection.drop();

                  }  
                });
                
            
              }
            });
            //console.log(ProductCardss);
        });
      };
// -- конец -- эта функция просто создает N карточек типов продуктов.....  техническая функция вне проекта        
