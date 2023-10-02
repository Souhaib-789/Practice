import React from "react";
import { Text, View } from 'react-native'
import AuthStack from "./src/navigations/AuthStack";
import Signup from "./src/screens/Signup/Signup";

const App = () => {
  return (
    <View>
      <Signup />
    </View>
  )
}

export default App;