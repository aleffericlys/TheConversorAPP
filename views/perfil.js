import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../assets/css/css.js';

// ProfileScreen.js

const ProfileScreen = ({navigation}) => {

	const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	useFocusEffect(
		React.useCallback(() => {
			
			const fetchData = async () => {
				try {
					let resData = await AsyncStorage.getItem('userData');
					let userData = JSON.parse(resData);
					setFirstName(userData.firstName);
					setLastName(userData.lastName);
					setEmail(userData.email);
					setPassword(userData.password);
				} catch (error) {
					console.error('Erro ao buscar dados do usuário:', error);
				}
			};
	
			fetchData();
			
		}, [])
	);
	
		useEffect(() => {
			console.log(firstName);
			console.log(lastName);
			console.log(email);
			console.log(password);
		}, [password]);


	const Logout = async () => {
		await AsyncStorage.clear();
		navigation.navigate('Home');
	}

  return (
	<View style={css.container}>
	  <TouchableOpacity>
			<Ionicons name="person-circle-outline" size={300} color="#62b013" />
	  </TouchableOpacity>
	  <Text>Perfil</Text>

	  <Text>Primeiro Nome:</Text>
	  <TextInput
			style={styles.input}
			value={firstName}
			onChangeText={text => setFirstName(text)}
	  />

	  <Text>Último Nome:</Text>
	  <TextInput
			style={styles.input}
			value={lastName}
			onChangeText={text => setLastName(text)}
	  />

	  <Text>Email:</Text>
	  <TextInput
			style={styles.input}
			value={email}
			onChangeText={text => setEmail(text)}
			keyboardType="email-address"
	  />

	  <Text>Senha:</Text>
	  <TextInput
			style={styles.input}
			value={password}
			onChangeText={text => setPassword(text)}
			secureTextEntry= {true}
	  />
	  <View style={[css.rowContainer, css.fstButton]}>
			<TouchableOpacity style={[css.login_button, css.fstButton]} onPress={() => {
				console.log('Pode Editar');
			}}>
				<Text style={css.textButtonLogin}>Edit</Text>
			</TouchableOpacity>
			<TouchableOpacity style={css.login_button} onPress={() => {
				Logout();
			}}>
				<Text style={css.textButtonLogin}>logout</Text>
			</TouchableOpacity>
		</View>
	</View>
  );
};

const styles = StyleSheet.create({
  container: {
	flex: 1,
	padding: 20,
	alignItems: 'center',
  },
  profileImage: {
	width: 100,
	height: 100,
	borderRadius: 50,
	marginBottom: 20,
  },
  input: {
	color: '#fff',
	backgroundColor: '#444',
	height: 60,
	borderColor: '#62b013',
	borderWidth: 1,
	marginBottom: 10,
	padding: 20,
	borderRadius: 7,
	width: '94%',
  },
});

export default ProfileScreen;


// export default function Perfil() {
// 	return (
// 		<View style={css.container}>
// 			<Text style={css.textPage}>Perfil</Text>
// 		</View>
// 	)	

// }