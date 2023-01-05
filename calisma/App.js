import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';


import InsideOfLevelScreen from './calisma/Screens/InsideOfLevelScreen';
import LevelItem from './calisma/LevelContent/LevelItem';
import Content from './calisma/Screens/Content';
import LevelChooseScreen from './calisma/Screens/LevelChooseScreen';
import FavoritesScreen from './calisma/Screens/FavoritesScreen';
import store from "./calisma/store/redux/store"

 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {backgroundColor: "black"},
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "3f2f25",
        drawerActiveTintColor: "white"
      }}
    >
      <Drawer.Screen
        name="Levels Screen"
        component={LevelChooseScreen}
        options={{
          title: 'All Levels',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size}/> )
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
       options={{
        title: 'All Favorites',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size}/> 
          )}}
      />
    </Drawer.Navigator>
  );
}



export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'red',
          contentStyle: { backgroundColor: "#6C807E" },
        }}>
        <Stack.Screen
          name="Levels"
          component={DrawerNavigator} 
          options={{headerShown:false}}/>
        <Stack.Screen
          name="ChooseContent"
          component={InsideOfLevelScreen} />
        <Stack.Screen
          name="ChooseText"
          component={LevelItem} />
        <Stack.Screen
          name="ContentPage"
          component={Content}       
           />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  </>

  );
    

  
};

const styles = StyleSheet.create({
 
});
