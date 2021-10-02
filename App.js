import React, {useState, useEffect} from 'react';
import {MainScreen, SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ResultScreen from './src/screens/result';
import { SafeAreaView } from 'react-native';

const App = () => {
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(load, 1500);
  });

  const load = () => {
    setLoding(false);
  };

  const nav = () => {
    if (loading) {
      return <SplashScreen />;
    } else {
      return <MainScreen />;
    }
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        {/* <Stack.Screen name="Result" component={ResultScreen} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
    //   <MainScreen />
    // </SafeAreaView>
  );
};

export default App;
