import React from "react";
import {StyleSheet, Text, View} from 'react-native'
import { Colors } from "../config/Colors";


const TextComponent = (props) => {
    return(
       <Text numberOfLines={props?.numberOfLines} style={[styles.text , props?.style]}>{props?.text}</Text>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.WHITE
    },
    text:{
        color: Colors.BLACK
    }
})

export default TextComponent;