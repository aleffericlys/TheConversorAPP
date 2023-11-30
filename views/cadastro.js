import React, {useState, useEffect} from 'react';
import { TextInput, Text, View, Button, KeyboardAvoidingView, Image, TouchableOpacity, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../assets/css/css.js';


export default function Cadastro({navigation}) {

	const [display, setDisplay]=useState('none');
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [email, setEmail]=useState(null);
	const [password, setPassword]=useState(null);
	const [login, setLogin]=useState(false);

	async function sendForm()
	{
		let response=await fetch('http://192.168.1.9:3000/createUser', {
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  firstName: firstName,
			  lastName: lastName,
			  email: email,
			  password: password,
			}),
		});

		let json = await response.json();
		console.log(json);
		if(json === 'Campos não preenchidos!' || json === 'Email já cadastrado!' || json === 'error')
		{
			console.log(json);
			await AsyncStorage.clear();
		}else{
			setDisplay('flex');
			setTimeout(()=>{
				setDisplay('none');
			}, 5000);

			let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
			setLogin(true);
			let resData = await AsyncStorage.getItem('userData');
			console.log(JSON.parse(resData));
			navigation.navigate('Home'); 
		}
	}

	return (
			<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
			{/* <View style={css.logo_login}>
				<Image source={require('../assets/icon.png')}/>
			</View> */}

			<View>
				<Text style={css.login_msg(display)}>Usuario cadastrado com sucesso</Text>
			</View>

			<View style={css.login_form}>
				<TextInput style={css.login_input} placeholder='First name' onChangeText={text=>setFirstName(text)}/>
				<TextInput style={css.login_input} placeholder='Last name' onChangeText={text=>setLastName(text)}/>
				<TextInput style={css.login_input} placeholder='Email' onChangeText={text=>setEmail(text)}/>
				<TextInput style={css.login_input} placeholder='Senha' secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
				<TouchableOpacity style={css.login_button} onPress={() => sendForm()}>
					<Text style={css.textButtonLogin}>Criar Conta</Text>
				</TouchableOpacity>
			</View>

		</KeyboardAvoidingView>
	)
}