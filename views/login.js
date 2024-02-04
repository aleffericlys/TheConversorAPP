import React, {useState, useEffect} from 'react';
import { TextInput, Text, View, Button, KeyboardAvoidingView, Image, TouchableOpacity, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../assets/css/css.js';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';


export default function Login({navigation}) {

	const [display, setDisplay]=useState('none');
	const [email, setEmail]=useState(null);
	const [password, setPassword]=useState(null);
	const [login, setLogin]=useState(false);

	async function sendForm()
	{
		let response=await fetch('http://192.168.1.10:3000/login', {
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  email: email,
			  password: password,
			}),
		});
		let json = await response.json();
		console.log(json);
		if(json === 'error')
		{
			setDisplay('flex');
			setTimeout(()=>{
				setDisplay('none');
			}, 5000);
			await AsyncStorage.clear();
		}else{
			let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
			setLogin(true);
			let resData = await AsyncStorage.getItem('userData');
			console.log(JSON.parse(resData));
			navigation.navigate('Home'); 
		}
	}

	return (
		<View style={[css.darkbg, css.container]}>
			{/* <KeyboardAvoidingView behavior={Platform.OS == "android" ? "padding" : "height"} style={[css.container, css.darkbg]}> */}
			<View style={css.logo_login}>
				<Image source={require('../assets/icon.png')}/>
			</View>

			<View>
				<Text style={css.login_msg(display)}>Usuario ou senha inválidos</Text>
			</View>

			<View style={css.login_form}>
				<TextInput style={[css.inputConversao, {width: '100%'}]} placeholder='Email' onChangeText={text=>setEmail(text)}/>
				<TextInput style={[css.inputConversao, {width: '100%'}]} placeholder='Senha' secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
				<TouchableOpacity style={[css.login_button, {flex: 0, width: '100%', height: 50}]} onPress={() => sendForm()}>
					<Text style={css.textButtonLogin}>Entrar</Text>
				</TouchableOpacity>

				<View>
				<Text>Ainda não tem conta?</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate('Cadastro')}
					>
					{/* <MaterialIcons name="contact-page" size={30} color="#000" /> */}
					<Text style={css.criarconta}>Cadastre-se</Text>
				</TouchableOpacity>
				</View>
			</View>
		{/* </KeyboardAvoidingView> */}
		</View>
	)
}