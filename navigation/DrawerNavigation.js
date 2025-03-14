import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/Home'; 
import Detalhes from '../pages/Detalhes'; 
import Perfil from '../pages/Perfil'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#6F2739',
        },
        drawerActiveTintColor: '#fff', 
        drawerInactiveTintColor: '#bbb', 
        drawerLabelStyle: {
          fontWeight: 'bold', 
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detalhes" component={Detalhes} />
      <Drawer.Screen name= "Perfil" component= {Perfil} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
