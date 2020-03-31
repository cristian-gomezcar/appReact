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
  color,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Entypo';
export default class ArtistBox extends Component{  

  saludo=()=>{Alert.alert("Hola")}

  render(){
    const {imagen,nombre,hora,fecha,lugar,organizadores,likes,comments}=this.props.data
    return(
      <TouchableOpacity>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: imagen}}/>

          <View style={styles.info}>
          <Text style={styles.name}>Nombre:{nombre}</Text>
          <Text style={styles.name}>Organizadores :{organizadores}</Text>
          <Text style={styles.name}>Fecha :{fecha}</Text>
          <Text style={styles.name}>Hora  :{hora}</Text>
          <Text style={styles.name}>Lugar :{lugar}</Text>

          </View>
          <View style={styles.row}>
            <View style={styles.iconos}>
              <Icon name="heart-outlined" size={30} color="#134379"/> 
              <Text>{likes}</Text>
            </View>

            <View style={styles.iconos}>
              <Icon name="chat" size={30} color="#134379"/> 
              <Text>{comments}</Text>
            </View>
            <View>
              
              <TouchableOpacity style={styles.ver} onPress={this.saludo}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize:15,}}>ver</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        </TouchableOpacity>
      
    );
  }
}

const styles= StyleSheet.create({
  artistBox:{
    backgroundColor:'white',
    flexDirection:'row',
    margin:3
  },
  image:{
    width:150,
    height:150
  },
  info:{
    flex:1,
    justifyContent:'center',
    marginLeft:5,
    alignItems:'center',
  },
  name:{
    fontSize:10,
    marginTop:5,
    fontWeight: 'bold'
  },
  row:{
    flexDirection:'column',
    justifyContent:'space-between',
    margin:5
  },
  iconos:{
    flex:1,
    alignItems:'center',
  },
  ver:{
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:'#134379',
    borderRadius:5,
    
  }

})
  