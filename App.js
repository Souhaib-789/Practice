import React, { useEffect, useState } from "react";
import AuthStack from "./src/navigations/AuthStack";
// import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/Store'
import { Provider, useDispatch, useSelector } from "react-redux";
import AppStack from "./src/navigations/AppStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "./src/redux/Actions/AuthAction";
import { Snackbar } from "react-native-paper";
import { Colors } from "./src/config/Colors";
import { hideAlert, userInfo } from "./src/redux/Actions/GeneralActions";




const App = () => {

  const loginState = useSelector(state => state.AuthReducer.isLogin)
  const showAlert = useSelector(state => state.GeneralReducer.showAlert)
  const alertMessage = useSelector(state => state.GeneralReducer.alertOptions?.message)
  const dispatch = useDispatch()

  useEffect(() => {
    checkAuthentication();
  }, [loginState])

  const checkAuthentication = async () => {
    setTimeout(async () => {
      let user_data = await AsyncStorage.getItem('@userx')
      if (user_data != null) {
        dispatch(login(true))
        const userdata = JSON.parse(user_data)
        console.log('====================>>>>>>>>>>>', userdata);
        // dispatch(userInfo(userdata))
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

        <Snackbar
          duration={3000}
          style={{ backgroundColor: Colors.PRIMARY }}

          visible={showAlert}
          onDismiss={() => dispatch(hideAlert())}
        >
          {alertMessage}
        </Snackbar>


      </NavigationContainer>

    </SafeAreaProvider>
  )
}

export default App;