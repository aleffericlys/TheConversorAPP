import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {css} from '../assets/css/css.js';
import Entypo from 'react-native-vector-icons/Entypo.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home({navigation}) {

	const [logged, setLoggedStatus] = useState(null);

	useFocusEffect(
		React.useCallback(() => {
			
			const fetchData = async () => {
				try {
					let resData = await AsyncStorage.getItem('userData');
					let userData = JSON.parse(resData);
					if(userData != null){
						setLoggedStatus(true);
					}else{
						setLoggedStatus(false);
					}
				} catch (error) {
					console.error('Erro ao buscar dados do usuário:', error);
				}
			};
	
			fetchData();
			
		}, [])
	);

	return (
		<View style={css.container}>
			{logged == false && (<TouchableOpacity
				onPress={() => navigation.navigate('Login')}
				style={[css.homeLButton, css.login_button]}
			>
        		<Entypo name="login" size={30} color="#000" />
				<Text>Login</Text>
      		</TouchableOpacity>)}

			{logged == true && (<TouchableOpacity
				onPress={() => navigation.navigate('Perfil')}
				style={[css.homeLButton, css.login_button]}
			>
        		<MaterialIcons name="contact-page" size={30} color="#000" />
				<Text>Perfil</Text>
      		</TouchableOpacity>)}
			<Text style={css.textPage}>home</Text>
		</View>
	)	

}