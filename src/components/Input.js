import React from "react";
import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from "../config/Colors";
import TextComponent from "./TextComponent";

const Input = (props) => {
    return (
        <View>

            <TextComponent text={props?.label} style={styles.label} />
            <View style={styles.input_container}>
                <TextInput
                    placeholder={props?.placeholder}
                    value={props?.value}
                    onChangeText={props?.onChangeText}
                    style={styles.input}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
     
    },
    label: {
        marginVertical: 10,
        fontSize: 14,
    },
    input_container: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GREY,
        width: '90%',
        alignSelf: 'center',
        padding: 5
    }
})

export default Input;