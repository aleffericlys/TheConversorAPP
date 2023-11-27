import { Json } from "sequelize/types/utils";

const apiCripto = 'https://api.binance.com/api/v3/ticker/price?symbol={cod}'

async function Cripto(de, para) {
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