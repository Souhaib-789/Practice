import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from "../config/Colors";


const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, {...props?.button_text_style}]}>{props?.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.BLACK,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20
    },
    text: {
        color: Colors.WHITE
    }
})

export default Button;