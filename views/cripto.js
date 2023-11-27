import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {css} from '../assets/css/css.js';

export default function Cripto() {
	return (
		<View style={css.container}>
			<Text style={css.textPage}>tela de criptoMoedas</Text>
		</View>
	)	

}