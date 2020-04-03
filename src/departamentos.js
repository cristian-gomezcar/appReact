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
import FAB from 'react-native-fab'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class departamentos extends Component{

  render(){
    return(
      <ScrollView>
                  <View style={{flexDirection:'row-reverse',justifyContent:'space-between',margin:7}}>
            <View>
            <TouchableOpacity  onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" size={41} color="blue"/> 
            </TouchableOpacity>

            </View>
              
              <View >
              <Image style={{width:40,height:40}} source = {require('./Img/1.jpg')} />
              </View>
          </View>
        <View style={styles.contenedor}>
          
          <View style={styles.listado}>
            <Button  title="Alta Verapaz" onPress={() =>this.props.navigation.navigate('Eventos')} />
          </View>
          <View style={styles.listado}>
            <Button  title="Baja Verapaz" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Chimaltenango" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Chiquimula" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="El Progreso" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Escuintla" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Guatemala" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Huehuetenango" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Izabal" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Jalapa" onPress={this.saludo} />
          </View>

          <View style={styles.listado}>
            <Button  title="Jutiapa" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Petén" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Quetzaltenango" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Quiché" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Retalhuleu" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Sacatepéquez" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="San Marcos" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Santa Rosa" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Sololá" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Suchitepéquez" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Totonicapán" onPress={this.saludo} />
          </View>
          <View style={styles.listado}>
            <Button  title="Zacapa" onPress={this.saludo} />
          </View>
        </View>
      </ScrollView>   
    )
  }
}

const styles= StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:"#000080"
  },
  titulo:{
    flex:1,
    alignItems:"center"
  },
  listado:{
    flex: 1,
    marginTop:1.5,
    borderRadius:20
  },
  tit:{
    color:"white",
    fontWeight: 'bold',
    fontSize:15,
  }
})
  