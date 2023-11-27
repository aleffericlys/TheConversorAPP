// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {Moedas, Home, Medidas, Cripto, Login, Perfil} from './index';
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
					headerTintColor: '#fff',
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
					headerTintColor: '#fff',
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
					headerTintColor: '#fff',
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
				name="Moedas"
				component={Moedas}
				options={{
					headerShown: true,
					title: 'Moedas',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 25,
					},
				}}
			/>
		</Stack.Navigator>
	);
};
const CriptoTabNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Cripto"
				component={Cripto}
				options={{
					headerShown: true,
					title: 'Cripto',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#fff',
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
					title: 'Medidas',
					headerStyle: {
						backgroundColor: '#62b013',
					},
					headerTintColor: '#fff',
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
			tabBarActiveTintColor: '#62b013',
			tabBarInactiveTintColor: 'gray',
			tabBarLabelStyle: { fontSize: 12 },
			tabBarPressColor: '#62b013',
			headerShown: true,
			swipeEnabled: true,
		}}
		headerMode="screen"
		
		>
        <Tab.Screen
			name='Home'
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
		<Tab.Screen
			name="cripto"
			component={CriptoTabNavigator}
			options={{
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="bitcoin" size={24} color={color} />
					),
				}}
		/>
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