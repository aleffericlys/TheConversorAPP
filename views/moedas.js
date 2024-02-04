import React, {useEffect, useState} from 'react';
import { Text, View} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {css} from '../assets/css/css.js';	
import { TextInput } from 'react-native-gesture-handler';

import CriptoNames from '../assets/json/CriptoNomes.json';
import DeParaCripto from '../assets/json/DeParaCripto.json';
import moedasNomes from '../assets/json/moedasNomes.json';
import DeParaMoedas from '../assets/json/DeParaMoedas.json';


export default function Cripto({navigation, route}) {

	const [cotacao, setCotacao] = useState(0);
	const [l1SelectedValue, setl1SelectedValue] = useState(null);
	const [l2SelectedValue, setl2SelectedValue] = useState(null);
	const [input1Value, setInput1Value] = useState('');
	const [input2Value, setInput2Value] = useState('');
	const [label1Options, setL1Options] = useState([]);
	const [label2Options, setL2Options] = useState([]);

	const [lastAction, setLastAction] = useState(null);

	const moneyType = route.params.moneyType;

	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: `Conversor de ${moneyType}`,
		});
		}, [navigation, moneyType]);


	const apiMoedas = 'https://economia.awesomeapi.com.br/last/'
	const apiCripto = 'https://api.binance.com/api/v3/ticker/price?symbol='

	const fetchData = async () => {
		var requisicao = ''
		if (moneyType === 'cripto'){
			requisicao = apiCripto+l1SelectedValue+l2SelectedValue
		}
		if (moneyType === 'moedas'){
			requisicao = apiMoedas+l1SelectedValue+'-'+l2SelectedValue
		}
		try {
			// Simulando uma requisição assíncrona
			const response = await fetch(requisicao);
			const data = await response.json();
			const cotacao = (moneyType === 'cripto') ? data.price : data[l1SelectedValue+l2SelectedValue].bid;
			setCotacao(cotacao);
		} catch (error) {
			console.log("Erro na requisição da API")
		}
	}

	function Label1Options() {
		const lista = []
		console.log(moneyType)
		if(moneyType === 'cripto'){
			
			Object.keys(CriptoNames).map((option) => {
				lista.push({value: option, index: CriptoNames[option]})
			})
		}else{
			
			Object.keys(moedasNomes).map((option) => {
				lista.push({value: option, index: moedasNomes[option]})
			})	
		}
		return lista
	}

	function Label2Options(label1Value) {
		const lista = []
		if(moneyType === 'moedas'){	
			DeParaMoedas[label1Value].map((option) => {
				Object.keys(moedasNomes).map((option2) => {
					if(option === option2){
						lista.push({value: option, index: moedasNomes[option2]})
					}
				})
			})
			
		}else{
			DeParaCripto[label1Value].map((option) => {
				Object.keys(CriptoNames).map((option2) => {
					if(option === option2){
						lista.push({value: option, index: CriptoNames[option2]})
					}
				})
			})
		}
		return lista
	}

	useFocusEffect(
		React.useCallback(() => {
			const opcoes = Label1Options()
			setL1Options(opcoes)
			setLastAction('select1')
		}, [])
	  );

	  
	useEffect(() => {
		if (label1Options.length > 0){
			if(l1SelectedValue === null){
				handleLastAction('select1', label1Options[0].value)
			}else{
				handleLastAction('select1', l1SelectedValue)
			}
		}

	}, [label1Options]);

	useEffect(() => {
		if (label2Options.length > 0){
			handleLastAction('select2', label2Options[0].value)
		}
	}, [label2Options]);

	useEffect(() => {
		if ((l1SelectedValue || l2SelectedValue) !== null){
			
			if (lastAction === 'select1'){
				
				const opcoes = Label2Options(l1SelectedValue)
				setL2Options(opcoes)
			}else if (lastAction === 'select2'){
				fetchData()
			}
		}
	}, [l1SelectedValue, l2SelectedValue]);

	useEffect(() =>{
		if (cotacao !== 0){
			handleLastAction('input1', '1')
		}
	}, [cotacao])

	useEffect(() => {
		if((input1Value || input2Value) !== ''){
			
			if (lastAction === 'input1' && input1Value !== ''){
				setInput2Value(String(parseFloat(input1Value) * parseFloat(cotacao)))
			}else if (lastAction === 'input2' && input2Value !== ''){
				setInput1Value(String(parseFloat(input2Value) / parseFloat(cotacao)))
			}
		}
	}, [input1Value, input2Value]);

	handleLastAction = (action, value) => {
		if (action === 'select1') {
			setLastAction(action);
			setl1SelectedValue(value);
		} else if (action === 'select2') {
			setLastAction(action);
			setl2SelectedValue(value);
		} else if (action === 'input1') {
			setLastAction(action);
			setInput1Value(value);
		} else if (action === 'input2') {
			setLastAction(action);
			setInput2Value(value);
		}
	};

	return (
		
		<View style={[css.container, css.darkbg]}>
			<View style={[css.rowContainer, {marginBottom: -20, marginTop: -25}]}>
				<Text style={[{marginLeft: -150, color: '#62b013', fontSize: 20}]}>Selecione a moeda</Text>
				<Text style={[{marginLeft: 50, color: '#62b013', fontSize: 20}]}>Altere o valor</Text>
			</View>
			<View style={css.rowContainer}>
				<View style={[css.borda]}>
				<Picker
					style={css.picker}
					selectedValue={l1SelectedValue}
					onValueChange={(itemValue) => {
						handleLastAction('select1', itemValue)
					}}
				>
					{
					label1Options.map((option, index) => (
						<Picker.Item style={css.textButtonLogin} key={index} label={option.index} value={option.value} />
					))}
				</Picker>
				</View>
				<TextInput
					style={css.inputConversao}
					keyboardType='numeric'
					onChangeText={(text) => handleLastAction('input1', text)}
					value={input1Value}
				/>
			</View>
			<Text style={[{marginTop: -40, marginBottom:10, color: '#62b013', fontSize: 50}]}>=</Text>
			<View style={[css.rowContainer, {marginBottom: -20, marginTop: -25}]}>
				<Text style={[{marginLeft: -150, color: '#62b013', fontSize: 20}]}>Selecione a moeda</Text>
				<Text style={[{marginLeft: 50, color: '#62b013', fontSize: 20}]}>Altere o valor</Text>
			</View>
			<View style={css.rowContainer}>
				<View style={[css.borda]}>
				<Picker
					style={[css.picker, {flex: 1}]}
					selectedValue={l2SelectedValue}
					onValueChange={(itemValue) => {
						handleLastAction('select2', itemValue)
					}}
				>
					{label2Options.map((option, index) => (
						<Picker.Item style={css.textButtonLogin} key={index} label={option.index} value={option.value} />
					))}
				</Picker>
				</View>
				<TextInput
					style={css.inputConversao}
					keyboardType='numeric'
					value={input2Value}
					onChangeText={(text) => {
						handleLastAction('input2', text)
					}}
				/>
			</View>
			<Text>texto : {input1Value} : {input2Value} : {cotacao}</Text>
		</View>
	)	
}

