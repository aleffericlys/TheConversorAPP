import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/css.js';
import Entypo from 'react-native-vector-icons/Entypo.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import MaterialCIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons.js';
import Octicons from 'react-native-vector-icons/Octicons.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5.js';


TouchableOpacity.defaultProps = {
	activeOpacity: 0.7,  // Defina a opacidade padrão desejada aqui
  };


export default function Medidas({navigation}) {
	return (
		<View style={css.container}>
			<View style={css.rowContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'aceleracao'})}
					style={[css.login_button, css.fstButton]}
				>
					<FontAwesome5 name="long-arrow-alt-right" size={30} color="#333" />
					<Text>Aceleração</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'angulo'})}
					style={[css.login_button]}
				>
					<MaterialCIcons name="angle-acute" size={30} color="#333" />
					<Text>Angulo</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'area'})}
					style={[css.login_button]}
				>
					<MaterialCIcons name="crop-square" size={30} color="#333" />
					<Text>Área</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'armazenamento_dados'})}
					style={[css.login_button]}
				>
					<AntDesign name="hdd" size={30} color="#333" />
					<Text>Armazenamento</Text>
					<Text>de Dados</Text>
				</TouchableOpacity>
			</View>
			<View style={css.rowContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'comprimento'})}
					style={[css.login_button, css.fstButton]}
				>
					<Entypo name="ruler" size={30} color="#333" />
					<Text>Comprimento</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'consumo_combustivel'})}
					style={[css.login_button]}
				>
					<MaterialCIcons name="fuel" size={30} color="#333" />
					<Text>Consumo de</Text>
					<Text>Combustível</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'energia'})}
					style={[css.login_button]}
				>
					<MaterialCIcons name="connection" size={30} color="#333" />
					<Text>Energia</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'forca'})}
					style={[css.login_button]}
				>
					<MaterialCIcons name="arm-flex-outline" size={30} color="#333" />
					<Text>Força</Text>
				</TouchableOpacity>
			</View>
			<View style={css.rowContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'frequencia'})}
					style={[css.login_button, css.fstButton]}
				>
					<Octicons name="pulse" size={30} color="#333" />
					<Text>Frequência</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'peso_massa'})}
					style={[css.login_button]}
				>	
					<MaterialCIcons name="scale-balance" size={30} color="#333" />
					<Text>Peso</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'potencia'})}
					style={[css.login_button]}
				>
					<SimpleLineIcons name="energy" size={30} color="#333" />
					<Text>Potência</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'pressao'})}
					style={[css.login_button]}
				>
					<FontAwesome5 name="cloudscale" size={30} color="#333" />
					<Text>Pressão</Text>
				</TouchableOpacity>
			</View>
			<View style={css.rowContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'temperatura'})}
					style={[css.login_button, css.fstButton]}
				>
					<FontAwesome5 name="temperature-low" size={30} color="#333" />
					<Text>Temperatura</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'tempo'})}
					style={[css.login_button]}
				>
					<Entypo name="stopwatch" size={30} color="#333" />
					<Text>Tempo</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'velocidade_transferencia_dados'})}
					style={[css.login_button]}
				>
					<MaterialCIcons name="database-export-outline" size={30} color="#333" />
					<Text>Transferencia de</Text>
					<Text>Dados</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'velocidade'})}
					style={[css.login_button]}
				>
					<MaterialIcons name="speed" size={30} color="#333" />
					<Text>Velocidade</Text>
				</TouchableOpacity>
			</View>
			<View style={css.rowContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('MedConv', {tipoMedida: 'volume'})}
					style={[css.login_button, css.fstButton]}
				>
					<FontAwesome5 name="glass-whiskey" size={30} color="#333" />
					<Text>volume</Text>
				</TouchableOpacity>
			</View>
		</View>
	)	

}