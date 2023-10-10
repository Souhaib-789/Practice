import React, { useState } from "react";
import AuthStack from "./src/navigations/AuthStack";
// import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/Store'
import { Provider, useSelector } from "react-redux";
import AppStack from "./src/navigations/AppStack";




const App = () => {

  const [visible, setvisible] = useState(true)
  const loginState = useSelector(state => state.AuthReducer.isLogin)

  // console.log('====================================');
  // console.log('loginState', loginState);
  // console.log('====================================');
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {
          loginState ?
            <AppStack />
            : <AuthStack />
        }


      </NavigationContainer>

    </SafeAreaProvider>
  )
}

export default App;