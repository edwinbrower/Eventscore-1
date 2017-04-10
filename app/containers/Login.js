import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ActionCreators } from '../actions/index';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validating: false,
      count: 0
    }
  }
   
  loginPressed() {
    this.setState({validating: true});
    console.log('username: ', this.state.username + ' password: ', this.state.password);
  }

  loginPressedRedux(){
    this.props.invokeLogin({username: this.state.username, password: this.state.password});
  }


  render(){
    const { state, actions } = this.props;
    console.log("Props", this.props, state, actions);
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          returnKeyType='send'
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput style={styles.textInput}
          returnKeyType='send'
          placeholder='password'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />    
        <TouchableOpacity onPress={() => this.loginPressedRedux()} style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>       
      </View>
    )    
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: 400,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  button: {
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'black',
  },
  buttonText: {
      color: 'white',
  }
})


// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
// } from 'react-native';
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';

// class Login extends Component {
//   render() {
//     console.log(this);
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           { `This is the ${ this.props.title }` }
//         </Text>
//         <Text style={styles.welcome}
//           onPress={() => Actions.pop()}>
//           Close User
//         </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     alignItems: 'center',
//     backgroundColor: 'skyblue',
//     // justifyContent: 'center',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//   }
// })

export default connect(({routes}) => ({routes}))(Login);
