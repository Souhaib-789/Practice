import React, { useState } from "react";
import AuthStack from "./src/navigations/AuthStack";
// import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/Store'
import { Provider, useDispatch, useSelector } from "react-redux";
import AppStack from "./src/navigations/AppStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "./src/redux/Actions/AuthAction";




const App = () => {

  const [visible, setvisible] = useState(true)
  const loginState = useSelector(state => state.AuthReducer.isLogin)
const dispatch = useDispatch()

  const checkAuthentication = async () => {
    setTimeout(async () => {
      let user_data = await AsyncStorage.getItem('@user')
      if (user_data != null) {
        dispatch(login(true))
        const userdata = JSON.parse(user_data)
        // console.log('====================>>>>>>>>>>>', userdata);
        dispatch(userInfo(userdata))
      } else {
        dispatch(login(false))
      }
    }, 1000);
  }

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