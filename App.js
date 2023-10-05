import React, { useState } from "react";
import AuthStack from "./src/navigations/AuthStack";
import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  const [visible, setvisible] = useState(true)
  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <AuthStack />
      </NavigationContainer>
      {/* <Snackbar visible={visible} >
        Hey there! I'm a Snackbar.
      </Snackbar> */}
    </SafeAreaProvider>
  )
}

export default App;