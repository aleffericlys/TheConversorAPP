import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {css} from '../assets/css/css.js';	
import CriptoNames from '../assets/json/CriptoNomes.json';
import DeParaCripto from '../assets/json/DeParaCripto.json';
import { TextInput } from 'react-native-gesture-handler';

function Label2Options(label1Value) {
	const lista = []
	DeParaCripto[label1Value].map((option) => {
		CriptoNames.map((option2) => {
			if(option === option2.value){
				lista.push({value: option, index: option2.index})
			}
		})
	})
	return lista
}


export default function Cripto() {

	const [cotacao, setCotacao] = useState(0);
	const [l1SelectedValue, setl1SelectedValue] = useState(null);
	const [l2SelectedValue, setl2SelectedValue] = useState(null);
	const [input1Value, setInput1Value] = useState('1');
	const [input2Value, setInput2Value] = useState("");
	const [label1Options, setL1Options] = useState([]);
	const [label2Options, setL2Options] = useState([{value: null, index: null}]);

	const apiCripto = 'https://api.binance.com/api/v3/ticker/price?symbol='
	const fetchData = async () => {
		try {
			// Simulando uma requisição assíncrona
			const response = await fetch(apiCripto+l1SelectedValue+l2SelectedValue);
			const data = await response.json();
			setCotacao(data.price);
		} catch (error) {
			console.error('Erro ao buscar dados:', error);
		}
	}

	useFocusEffect(
		React.useCallback(() => {
		//   
		console.log('Tela1 está em foco');
		  // Adicione sua lógica específica aqui
		  setL1Options(CriptoNames)
		  return () => {
			console.log('Tela1 não está mais em foco');
			setL1Options(CriptoNames)
			// Função de limpeza (se necessário)
		  };
		}, [])
	  );

	// Simulando um carregamento assíncrono do JSON
	// useEffect(() => {
	// 	setL1Options(CriptoNames)
	// }, []);

	useEffect(() => {
		setl1SelectedValue(CriptoNames[0].value)
		
		// setL2Options(Label2Options(l1SelectedValue))
		
	}, [label1Options]);

	useEffect(() => {
		console.log("quando altera o l1:",l1SelectedValue, l2SelectedValue)
		if (l1SelectedValue != null){
			setL2Options(Label2Options(l1SelectedValue))
		}
	}, [l1SelectedValue]);

	useEffect(() => {
		if(label2Options != []){
			setl2SelectedValue(label2Options[0].value)
		}
	}, [label2Options]);

	useEffect(() => {
		console.log("quando altera o l2:",l1SelectedValue, l2SelectedValue)
		
		fetchData();
	
	}, [l2SelectedValue]);

	useEffect(() => {
		if(input1Value === "" || input1Value === "0"){
			setInput2Value("0")
		
		}else{
			if(input1Value === "1"){
				setInput2Value(String(cotacao))
			}else{	
				setInput2Value(String(parseFloat(input1Value) * parseFloat(cotacao)))
			}
		}
	}, [input1Value]);

	useEffect(() => {
		if(input2Value === ""){
			setInput1Value("0")
		}else{	
			setInput1Value( String(parseFloat(input2Value) / parseFloat(cotacao)))
		}
	}, [input2Value]);

	useEffect(() => {
		console.log(l1SelectedValue, l2SelectedValue)
		setInput1Value('1')
	}, [cotacao]);


	return (
		
		<View style={[css.container, css.darkbg]}>
			<Text style={css.textPage}>tela de cripto Moedas</Text>
			<Text style={{marginLeft: -220, color: 'blue', fontSize: 25}}>Selecione a moeda:</Text>
			<View style={css.rowContainer}>

				<Picker
					style={css.picker}
					selectedValue={l1SelectedValue}
					onValueChange={(itemValue) => {
						setl1SelectedValue(itemValue)
					}}
				>
					{
					label1Options.map((option, index) => (
						<Picker.Item style={css.textButtonLogin} key={index} label={option.index} value={option.value} />
					))}
				</Picker>

				<TextInput
					style={css.inputConversao}
					keyboardType='numeric'
					value={input1Value}
					onChangeText={
						(text) => {
							setInput1Value(text)
					}
				
				}/>
			</View>
			<Text style={{marginLeft: -220, color: 'blue', fontSize: 25}}>Selecione a moeda:</Text>
			<View style={css.rowContainer}>
				<Picker
					style={css.picker}
					onValueChange={(itemValue) => {
						setl2SelectedValue(itemValue)
					}}
					selectedValue={l2SelectedValue}
				>
					{label2Options.map((option, index) => (
						<Picker.Item style={css.textButtonLogin} key={index} label={option.index} value={option.value} />
					))}
					

				</Picker>
				<TextInput
					style={css.inputConversao}
					keyboardType='numeric'
					value={input2Value}
					onChangeText={
						(text) => {
							setInput2Value(text)
					}}
				/>
			</View>
			<Text>texto : {input1Value} : {input2Value} : {cotacao}</Text>
		</View>
	)	
}