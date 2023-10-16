import React from "react";
import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from "../config/Colors";
import TextComponent from "./TextComponent";
import Feather from 'react-native-vector-icons/Feather'


const Input = (props) => {
    return (
        <View>

            <TextComponent text={props?.label} style={styles.label} />
            <View style={[styles.input_container , {...props?.style}]}>

                {
                    props?.search &&
                    <Feather name='search' size={20} color={Colors.BLACK} />
                }

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
        width: '100%',
        alignSelf: 'center',
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 10
    }
})

export default Input;