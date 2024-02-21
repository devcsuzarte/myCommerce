import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen/loginScreen';
import { HomeScreen } from './screens/HomeScreen/homeScreen';
import { AddScreen } from './screens/AddScreen/addScreen';
import { ItemScreen } from './screens/ItemScreen/itemScreen';
import { BuyScreen } from './screens/BuyScreen/BuyScreen'
import { RecordsScreen } from './screens/RecordsScreen/recordsScreen';
import { SignUpScreen } from './screens/SignUpScreen/signUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>     
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
          }}
        initialRouteName='Login'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Add' component={AddScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='Item' component={ItemScreen}/>
        <Stack.Screen name='Buy' component={BuyScreen}/>   
        <Stack.Screen name='Records' component={RecordsScreen}/>           
      </Stack.Navigator>
    </NavigationContainer>
  );
}
