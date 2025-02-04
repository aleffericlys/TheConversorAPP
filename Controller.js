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


app.post('/createUser', async (req, res)=>{

	if(req.body.firstName === undefined || req.body.lastName === undefined || req.body.email === undefined || req.body.password === undefined){
		res.send(JSON.stringify('Campos não preenchidos!'));
	}else{
		if(await user.findOne({where:{email: req.body.email}})){
			res.send(JSON.stringify('Email já cadastrado!'));
		}else{
			let create = await user.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: req.body.password,
				createdAt: new Date(),
				updatedAt: new Date()
			});
			res.send(create);
		}
	}
});

app.get('/createUsers', async (req, res)=>{
	let create = await user.create({
		// firstName: req.body.firstName,
		// lastName: req.body.lastName,
		// email: req.body.email,
		// password: req.body.password,
		firstName: 'joao',
		lastName: 'silva',
		email: 'j@ss',
		password: '1234',
		createdAt: new Date(),
		updatedAt: new Date()
	});
})	,

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




let port=process.env.PORT || 3000;
app.listen(port,(req, res)=>{
	console.log('Servidor rodando na porta '+port);
});




//   app.get('/testeJson', async (req, res)=>{
// 	carregarJsonLocal();
// });