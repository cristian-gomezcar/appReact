import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeView from './HomeView'
import departamentos from './departamentos'
import FbLogin from './Login/FbLogin'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label=" "
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="FbLogin" component={FbLogin} />
    <Drawer.Screen name="Departamentos" component={departamentos} />
    <Drawer.Screen name="Eventos" component={HomeView} />
    </Drawer.Navigator>
  );
}

export default function App({ navigation }) {
  return (
    <NavigationContainer> 
      <MyDrawer />
    </NavigationContainer>
  );
}