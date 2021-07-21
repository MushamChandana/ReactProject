import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Bubble from './src/screens/Bubble';
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Splash from './src/screens/Splash';
import Flex from './src/screens/Flex';
import Flexexample from './src/screens/Flexexample';
import Extranal from './src/screens/Extranal';
import Condition from './src/screens/Condition';
import Alertexample from './src/screens/Alertexample';
import List from './src/screens/List';
import Listexample from './src/screens/Listexample';
import Stacknavi from './src/screens/Stacknavi';
import Drawerstack from './src/screens/DrawerStack';
import Chitties from './src/screens/Chitties';
import Chittidashboard from './src/screens/Chittidashboard';
import Onelakh from './src/screens/Onelakh';
import Twolakh from './src/screens/Onelakh';

import Fivelakh from './src/screens/Onelakh';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerView() {
      return (
            <Drawer.Navigator 
            // drawerStyle={}
            //  initialRouteName="Home" 
            //  drawerPosition='right'
            //  drawerContentOptions={{
            //  activeTintColor: 'white',
            //  inactiveTintColor: 'white',
            //  itemStyle: { alignItems:'flex-end' },
            // }}
            >
                  <Drawer.Screen name="Flexexample" component={Flexexample}
                        options={{ headerShown: false }} />
            </Drawer.Navigator>
      );

}

function App() {
      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen name="Chitties" component={Chitties}
                         options={{ headerShown: false }} />
                        <Stack.Screen name="Chittidashboard" component={Chittidashboard} 
                        options={{ headerShown: false }} />
                        <Stack.Screen name="Onelakh" component={Onelakh} />
                        <Stack.Screen name="Twolakh" component={Twolakh} />

                        <Stack.Screen name="Fivelakh" component={Fivelakh} />

                        <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
                        <Stack.Screen name="Stacknavi" component={Stacknavi} options={{ headerShown: false }} />
                        <Stack.Screen name="Listexample" component={Listexample} options={{ headerShown: false }} />
                        <Stack.Screen name="Alertexample" component={Alertexample} options={{ headerShown: false }} />
                        <Stack.Screen name="Condition" component={Condition} options={{ headerShown: false }} />
                        <Stack.Screen name="Flexexample" component={DrawerView} options={{ headerShown: false }} />
                        <Stack.Screen name="Bubble" component={Bubble} options={{ headerShown: false }} />
                        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                        <Stack.Screen name="Extranal" component={Extranal} options={{ headerShown: false }} />
                        <Stack.Screen name="Flex" component={Flex} />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                  </Stack.Navigator>
            </NavigationContainer>


      )
}
export default App;