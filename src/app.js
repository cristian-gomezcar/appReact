/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppRegistry,
  Image,
  FlatList,
  Button,
  Alert,
  color
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Entypo';
import ArtistBox from './ArtistBox'

import {getEventos} from './api-cliente'
import {getEven} from './api-Eventos'

export default class inicio extends Component{

  state={
    artists:[]
  }
  state={
    eventos:[]
  }
  componentDidMount(){
    getEventos()
      .then(data=>this.setState({artists:data}))

    getEven()
      .then(data=>this.setState({eventos:data}))
  }
  

  
  render(){
    let artists=this.state.artists
    let eventos=this.state.eventos
    console.warn('eventos',eventos)

    return(
      
      <View style={styles.contenedor}>
        <Text style={styles.dis}>EVENTOS DISPONIBLES</Text>
       <FlatList
       data={this.state.eventos}
       renderItem={({item})=><ArtistBox data={item}/>}
         
      />
      </View>
      
    );
  }
}

const styles= StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor: '#134379',
  },
  dis:{
    color:'white',
    fontSize:15,
    margin:5,
    fontWeight: 'bold'
  }
})
  


AppRegistry.registerComponent(inicio, () => App);