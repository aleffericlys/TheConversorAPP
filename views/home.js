import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/css.js';
import Entypo from 'react-native-vector-icons/Entypo.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';



export default function Home({navigation}) {


	
	return (
		<View style={css.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Login')}
				style={[css.homeLButton, css.login_button]}
			>
        		<Entypo name="login" size={30} color="#000" />
				<Text>Login</Text>
      		</TouchableOpacity>


			<TouchableOpacity
				onPress={() => navigation.navigate('Perfil')}
				style={[css.homePButton, css.login_button]}
			>
        		<MaterialIcons name="contact-page" size={30} color="#000" />
				<Text>Perfil</Text>
      		</TouchableOpacity>
			<Text style={css.textPage}>home</Text>
		</View>
	)	

}