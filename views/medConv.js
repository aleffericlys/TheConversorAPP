import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {css} from '../assets/css/css.js';
import { TextInput } from 'react-native-gesture-handler';


import conversoesMedidas from '../assets/json/conversoesMedidas.json';
import dicionarioMedidas from '../assets/json/dicionarioMedidas.json';

export default function MedConv({navigation, route}) {

	const [cotacao, setCotacao] = useState(0);
	const [l1SelectedValue, setl1SelectedValue] = useState(null);
	const [l2SelectedValue, setl2SelectedValue] = useState(null);
	const [input1Value, setInput1Value] = useState('1');
	const [input2Value, setInput2Value] = useState('1');
	const [labelOptions, setLOptions] = useState([{value: null, index: null}]);

	// const [lastChangedInput, setLastChangedInput] = useState(null);
	// const [lastAction, setLastSelectChanged] = useState(null);
	const [lastAction, setLastAction] = useState(null);
	
	const tipoMedida = route.params.tipoMedida;

	function LoadLabelOptions() {
		const lista = []
		dicionarioMedidas[tipoMedida].map((option) => {
			lista.push({value: option, index: option.replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ')})
		})
		return lista
	}


	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: `Conversor de ${tipoMedida.replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ')}`,
		});
		}, [navigation, tipoMedida]);

	MedConv.navigationOptions = {
		gesturesEnabled: false,
	};


	useFocusEffect(
		React.useCallback(() => {
			// Adicione sua lógica específica aqui
			const options = LoadLabelOptions()
		 	setLOptions(options)
			handleLastAction('select1', options[0].value)
			handleLastAction('select2', options[0].value)
		}, [])
		);

		useEffect(() => {
			console.log(l1SelectedValue, l2SelectedValue)
			if((l1SelectedValue && l2SelectedValue) !== null){
				if(tipoMedida != 'temperatura'){
					if(l1SelectedValue === l2SelectedValue){
						setCotacao(1);
					}else{
						console.log(tipoMedida)
						const formula = conversoesMedidas[tipoMedida][l1SelectedValue][l2SelectedValue];
						console.log('formula', formula)
						setCotacao(eval(formula.replace('var', '1')));
					}
				}
				else {
					if(lastAction === 'select1'){
						const formula = conversoesMedidas[tipoMedida][l1SelectedValue][l2SelectedValue];
						setCotacao(formula);
					}else if (lastAction === 'select2'){
						const formula = conversoesMedidas[tipoMedida][l1SelectedValue][l2SelectedValue];
						setCotacao(formula);
					}
				}
			}
		}, [l1SelectedValue, l2SelectedValue]);


		

	useEffect(() => {
		
		if (l1SelectedValue === l2SelectedValue){
			if(lastAction === 'input1' && input1Value !== ''){
				setInput2Value(input1Value);
			} else if(lastAction === 'input2' && input2Value !== ''){
				setInput1Value(input2Value);
			}
		}else{
			if(tipoMedida != 'temperatura'){
				if(lastAction === 'input1' && input1Value !== ''){
					setInput2Value(String(parseFloat(input1Value) * parseFloat(cotacao)));
				} else if(lastAction === 'input2' && input2Value !== ''){
					setInput1Value(String(parseFloat(input2Value) / parseFloat(cotacao)));
				}
			}else{
				if(lastAction === 'input1' && input1Value !== ''){
					const formula = conversoesMedidas[tipoMedida][l1SelectedValue][l2SelectedValue];
					setInput2Value(String(eval(formula.replace('var', input1Value))));
				}else if(lastAction === 'input2' && input2Value != ''){
					const formula = conversoesMedidas[tipoMedida][l2SelectedValue][l1SelectedValue];
					setInput1Value(String(eval(formula.replace('var', input2Value))));
				}
			}
		}
	}, [input1Value, input2Value]);

	

	useEffect(() => {
		if(tipoMedida != 'temperatura'){
			if(lastAction === 'select1' && input1Value !== '' && input2Value !== ''){
				setInput1Value(String(parseFloat(input2Value) / parseFloat(cotacao)));
			}else if(lastAction === 'select2' && input1Value !== '' && input2Value !== ''){
				setInput2Value(String(parseFloat(input1Value) * parseFloat(cotacao)));
			}
		}else{
			if (l1SelectedValue === l2SelectedValue){
				if(lastAction === 'select1' && input1Value !== ''){
					setInput1Value(input2Value);
				}else if(lastAction === 'select2' && input1Value !== ''){
					setInput2Value(input1Value);
				}
			}else{
				if(lastAction === 'select1' && input1Value !== ''){
					setInput1Value(String(eval(cotacao.replace('var', input2Value))));
				}else if(lastAction === 'select2' && input1Value !== ''){
					setInput2Value(String(eval(cotacao.replace('var', input1Value))));
				}
			}
		}
	}, [cotacao]);

// função para lidar com as ações de alteração de estado
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
			<Text style={[{marginLeft: -115, color: '#62b013', fontSize: 20}]}>Selecione a medida</Text>
			<Text style={[{marginLeft: 90, color: '#62b013', fontSize: 20}]}>Altere o valor</Text>
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
					labelOptions.map((option, index) => (
						<Picker.Item style={css.textButtonLogin} key={index} label={option.index} value={option.value} />
					))}
				</Picker>
				</View>
				<TextInput
					style={css.inputConversao}
					keyboardType='numeric'
					onChangeText={(value) => handleLastAction('input1', value)}
					value={input1Value}
				/>
			</View>
			<Text style={[{marginTop: -40, marginBottom:10, color: '#62b013', fontSize: 50}]}>=</Text>
			<View style={[css.rowContainer, {marginBottom: -20, marginTop: -25}]}>
				<Text style={[{marginLeft: -115, color: '#62b013', fontSize: 20}]}>Selecione a medida</Text>
				<Text style={[{marginLeft: 90, color: '#62b013', fontSize: 20}]}>Altere o valor</Text>
			</View>
			<View style={css.rowContainer}>
				<View style={[css.borda]}>
				<Picker
					style={css.picker}
					selectedValue={l2SelectedValue}
					onValueChange={(itemValue) => {
						handleLastAction('select2', itemValue)
					}}
				>
					{labelOptions.map((option, index) => (
						<Picker.Item style={css.textButtonLogin} key={index} label={option.index} value={option.value} />
					))}
				</Picker>
				</View>
				<TextInput
					style={css.inputConversao}
					keyboardType='numeric'
					onChangeText={(value) => handleLastAction('input2', value)}
					value={input2Value}
				/>
			</View>
		</View>
	)

}