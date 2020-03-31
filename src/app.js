import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions,AppRegistry} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import departamentos from './departamentos'
import HomeView from './HomeView'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="departamentos">
        <Stack.Screen name="departamentoss" component={departamentos} options={{

          title: 'Seleccione su departamento',
          headerStyle: {
            backgroundColor: '#000080',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>


        <Stack.Screen name="HomeView" component={HomeView}options={{

        title: 'Eventos Disponibles',
        headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;