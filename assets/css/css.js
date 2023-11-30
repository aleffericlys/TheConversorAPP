import { StyleSheet } from "react-native";

const css = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'column',
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	rowContainer: {
		
		flexDirection: 'row',
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	  },
	textPage: {
		backgroundColor: '#ff0',
		padding: 20,
	},
	button: {
		marginRight: 10,
	},
	darkbg: {
		backgroundColor: '#333',
	},
	login_msg:(text = 'none') => ({
		fontWeight: 'bold',
		fontSize: 22,
		color: 'red',
		marginTop: 10,
		marginBottom: 15,
		display: text,
	}),
	login_form: {
		width: '80%',
	},
	login_input: {
		backgroundColor: '#fff',
		fontSize: 19,
		padding: 7,
		marginBottom: 15,
	},
	login_button: {
		backgroundColor: '#ff8100',
		padding: 12,
		alignItems: 'center',
		borderRadius: 5,
	},
	textButtonLogin: {
		fontWeight: 'bold',
		fontSize: 22,
		color: '#333',
	},
	homeLButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		padding: 10,
		textAlign: 'center',
	},
	homePButton: {
		position: 'absolute',
		top: 20,
		right: 80,
		padding: 10,
		textAlign: 'center',
	},
	criarconta:{
		color: 'red',
	},
	picker:{
		width: '40%',
		height: 50,
		backgroundColor: '#333',
		marginBottom: 15,
		borderWidth: 5,
		color: '#fff',
		textAlign: 'center',
		tintColor: '#000',
	},
	inputConversao:{
		width: '40%',
		height: 57,
		backgroundColor: '#fff',
		borderColor: '#000',
		borderWidth: 2,
		marginBottom: 15,
		fontSize: 25,
	},
  });
  export{css}