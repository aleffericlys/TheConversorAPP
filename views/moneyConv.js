import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/css.js';

import MaterialCIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';


TouchableOpacity.defaultProps = {
	activeOpacity: 0.7,  // Defina a opacidade padrão desejada aqui
  };


export default function MoneyConv({navigation}) {
	return (
		<View style={[css.container]}>
			
			<Text style={[{color: '#62b013', fontSize: 20}]}>Selecione qual tipo de moeda deseja</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate('Moedas', {moneyType: 'moedas'})}
				style={[css.login_button, {flex: 0, marginTop: 10 , width: '80%', height: 150}]}
			>
				<FontAwesome name="money" size={80} color='#333' />
				<Text style={{fontSize: 30}}>Moedas</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate('Moedas', {moneyType: 'cripto'})}
				style={[css.login_button, {flex: 0, marginTop: 10 , width: '80%', height: 150}]}
			>
				<MaterialCIcons name="bitcoin" size={100} color='#333' />
				<Text style={{fontSize: 30}}>Criptomoedas</Text>
			</TouchableOpacity>
		</View>
	)	

}