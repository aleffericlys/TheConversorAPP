// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {Moedas, Home, Medidas, MoneyConv, Login, Perfil, Cadastro, MedConv} from './index';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeTabNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Home"
				component={Home}
				options={{
					headerShown: true,
					title: 'Bem Vindo',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
			<Stack.Screen 
				name="Login"
				component={Login}
				options={{
					headerShown: true,
					title: 'Login',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
			<Stack.Screen
				name="Perfil"
				component={Perfil}
				options={{
					headerShown: true,
					title: 'Perfil',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
			<Stack.Screen
				name="Cadastro"
				component={Cadastro}
				options={{
					headerShown: true,
					title: 'Cadastro',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
		</Stack.Navigator>
	);
};

const MoedasTabNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Cripto"
				component={MoneyConv}
				options={{
					headerShown: true,
					title: 'Conversor de Moedas',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
			<Stack.Screen
				name="Moedas"
				component={Moedas}
				options={{
					headerShown: true,
					title: 'Conversor de Moedas',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
		</Stack.Navigator>
	);
};

const MedidasTabNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Medidas"
				component={Medidas}
				options={{
					headerShown: true,
					title: 'Conversor de Medidas',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
			<Stack.Screen
				name="MedConv"
				component={MedConv}
				options={{
					headerShown: true,
					title: 'Conversor de Medidas',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#333',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
		</Stack.Navigator>
	);
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
		tabBarPosition= 'bottom'
		screenOptions={{
			keyoboardAvoidingViewEnabled: true,
			tabBarActiveTintColor: '#fff',
			tabBarInactiveTintColor: '#333',
			tabBarLabelStyle: { fontSize: 12 },
			// tabBarPressColor: '#000',
			tabBarIndicatorStyle: {
				backgroundColor: '#fff',
			},
			tabBarIndicatorContainerStyle: {
				backgroundColor: '#62b013',
			},
			headerShown: true,
			swipeEnabled: true,
		}}
		headerMode="screen"
		
		>
        <Tab.Screen
			name='home'
			component={HomeTabNavigator}
			options={{
				headerShown: true,
				tabBarIcon: ({ color }) => (
				  <MaterialCommunityIcons name="home" size={24} color={color} />
				),
			}}
		/>
        <Tab.Screen
			name="moedas"
			component={MoedasTabNavigator}
			options={{
				tabBarIcon: ({ color }) => (
					<FontAwesome name="money" size={20} color={color} />
				),
			}}
		/>
		{/* <Tab.Screen
			name="cripto"
			component={CriptoTabNavigator}
			options={{
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="bitcoin" size={24} color={color} />
					),
				}}
		/> */}
		<Tab.Screen
			name="medidas"
			component={MedidasTabNavigator}
			options={{
				tabBarIcon: ({ color }) => (
					<Entypo name="ruler" size={24} color={color} />
				),
			}}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;