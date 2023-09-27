import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FirstScreen,
  One_A,
  One_B,
  One_C,
  One_D,
  One_E,
  Two_A,
  XMEye,
} from './screens';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="One_A" component={One_A} />
        <Stack.Screen name="One_B" component={One_B} />
        <Stack.Screen name="One_C" component={One_C} />
        <Stack.Screen name="One_D" component={One_D} />
        <Stack.Screen name="One_E" component={One_E} />
        <Stack.Screen name="Two_A" component={Two_A} />
        <Stack.Screen name="XMEye" component={XMEye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
