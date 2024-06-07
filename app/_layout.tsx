import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Details from './pages/Details';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

const Layout = () => {

  const [tokenPresent, setTokenPresent] = React.useState(false);
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setTokenPresent(true);
      }
    } catch (error) {
      console.error('Error retrieving data: ', error);
    }
  }

  useEffect(() => {
    getToken();
  }, [])
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={tokenPresent ? 'Home' : 'Login'}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{
                title: 'Details - Fujiyama ⛰️ Products',
                headerStyle: {
                  backgroundColor: '#e05f02',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{
              title: 'All Products of This Category - Fujiyama ⛰️',
              headerStyle: {
                backgroundColor: '#e05f02',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
