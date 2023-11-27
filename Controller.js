// import Cripto from './assets/functions/requisicoes.js';

const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let user=models.User;
let favorito=models.Favorito;


app.post('/login', async (req, res)=>{
	let response = await user.findOne({
		where:{email: req.body.email, password: req.body.password}
	});
	if(response === null){
		res.send(JSON.stringify('error'));
	}else{
		res.send(response);
	}
})


app.get('/createUser', async (req, res)=>{
	let create = await user.create({
		firstName: 'aleff',
		lastName: 'araújo',
		email: 'aleff@aleff',
		password: '123',
		createdAt: new Date(),
		updatedAt: new Date()
	});
	res.send('Usuario criado com sucesso!');
});

app.get('/createFav', async (req, res)=>{
	let create = await favorito.create({
		de: 'carro',
		para: 'moto',
		conv: 1.2,
		userID: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	});
	res.send('favorito criado com sucesso!');
});

// app.get('/read', async (req, res)=>{
// 	let read = await user.findAll({
// 		raw: true
// 	});
// 	console.log(read);
// });

// app.get('/update', async (req, res)=>{
// 	let update = await user.findByPk(3)
// 	update.Name='joao';
// 	update.password='223';
// 	let save=await update.save();
// 	console.log(save);
// });

// app.get('/delete', async (req, res)=>{
// 	let del = await user.findByPk(3)
// 	let save=await del.destroy();
// 	console.log(save);
// });




const apiCripto = 'https://api.binance.com/api/v3/ticker/price?symbol='

async function getCriptoCot(de, para) {
	try {
	  const response = await fetch(apiCripto+de+para);
  
	  if (!response.ok) {
		throw new Error(`Erro de rede: ${response.status}`);
	  }
  
	  const data = await response.json();
	  console.log(data);
	} catch (error) {
	  console.error('Erro durante a requisição:', error);
	}
  }

app.get('/apiCrip', async (req, res)=>{
	getCriptoCot('BTC', 'USDT');
});



const apiMoedas = 'https://economia.awesomeapi.com.br/last/'

async function getMoneyCot(de, para) {
	console.log(apiMoedas+de+'-'+para);
	try {
	  const response = await fetch(apiMoedas+de+'-'+para);
  
	  if (!response.ok) {
		throw new Error(`Erro de rede: ${response.status}`);
	  }
  
	  const data = await response.json();
	  var cota = de+para;
	  console.log(data[de+para].bid);
	} catch (error) {
	  console.error('Erro durante a requisição:', error);
	}
  }

// app.get('/apiMoney', async (req, res)=>{
// 	getMoneyCot('USD', 'BRL');
// });


let port=process.env.PORT || 3000;
app.listen(port,(req, res)=>{
	console.log('Servidor rodando na porta '+port);
});


function carregarJsonLocal() {
	let meuJSON = require('./assets/json/conversoesMedidas.json')
	console.log(meuJSON);
}


//   app.get('/testeJson', async (req, res)=>{
// 	carregarJsonLocal();
// });