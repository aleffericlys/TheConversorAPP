import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../assets/css/css.js';

// ProfileScreen.js

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <TouchableOpacity>
		<Ionicons name="person-circle-outline" size={450} color="#000" />
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
	  <TouchableOpacity style={css.login_button} onPress={() => {
		console.log(AsyncStorage.getItem());
	  }}>
		<Text style={css.textButtonLogin}>Entrar</Text>
	   </TouchableOpacity>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
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