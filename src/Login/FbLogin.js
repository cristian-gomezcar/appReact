import React, { Component } from 'react';
import { View,StyleSheet,Image,Button } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBc0pDwChg1kFVnLoI7pMRGKTQN8v2Crkw",
    authDomain: "umgapp-4bac8.firebaseapp.com",
    databaseURL: "https://umgapp-4bac8.firebaseio.com",
    projectId: "umgapp-4bac8",
    storageBucket: "umgapp-4bac8.appspot.com",
    messagingSenderId: "667257931284",
    appId: "1:667257931284:web:029d79e8624a346f6f0901",
    measurementId: "G-S4JH50DX85"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const {FacebookAuthprovider} =firebase.auth()
  const firebaseAuth=firebase.auth()

export default class fbLogin extends Component {

    autenticateUser(accessToken)
    {
        const credential=firebase.auth.FacebookAuthProvider.credential(accessToken)
        firebaseAuth.signInWithCredential(credential).then(function(user) {

            console.log("Sign In Success", user);
            var currentUser = user;

          },function(error) {
            console.log("Sign In Error", error);
          });

    }

    handleLoginFinish=(error, result) => {
        if (error) {
            console.log("Inicio de Sesion fallido: " + result.error);
        } else if (result.isCancelled) {
            console.log("inicio de secion cancelado.");
        } else {
            AccessToken.getCurrentAccessToken().then((data) => {
                this.autenticateUser(data.accessToken)
            }
            )
        }
        }
    
  render() {
    return (

    <View style={styles.container}>

        <View style={styles.logo}>
            <Image style={{width:400,height:400}} source = {require('./logo.jpg')} />
        </View>
        <View style={{flex:1}}>

        <View style={styles.facebook}>
            <LoginButton
            readPermissions={['public_profile','email']}
            onLoginFinished={this.handleLoginFinish}
            onLogoutFinished={() => console.log("logout.")}/>
        </View>
        <View style={styles.google}>
        <Image style={{width:200,height:37,borderColor:'red'}}  source={{uri: 'https://github.com/react-native-community/google-signin/raw/master/img/signin-button.png',}}
      />
        </View>
        </View>
      </View>
    );
  }
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },
    facebook:{
        margin:7
    },
    google:{
        margin:7
    }

  })
    