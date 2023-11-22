import React, { useState } from "react";
import { LayoutAnimation, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Colors } from "../config/Colors";
import TextComponent from "./TextComponent";
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import Animated from 'react-native-reanimated';


const Input = (props) => {
    const animation = useSharedValue(0)
    const [show, setShow] = useState(false)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: animation.value == 1 ? withTiming(300, { duration: 500 }) : withTiming(39, { duration: 500 }),
        }
    }
    )

    return (

        <Animated.View style={[styles.input_container, { ...props?.style }, animatedStyle, { paddingVertical: show ? 0 : 10 }]}>


            <TouchableOpacity onPress={() => {
                if (animation.value == 1) {
                    animation.value = 0
                } else {
                    animation.value = 1
                }
                setShow(!show)
            }}>
                <Feather name='search' size={20} color={Colors.BLACK} />
            </TouchableOpacity>

            {
                show &&
                <TextInput
                    placeholder={props?.placeholder}
                    value={props?.value}
                    onChangeText={props?.onChangeText}
                    style={{ width: '83%', }}
                />
            }
            {
                props?.value &&
                <TouchableOpacity onPress={props?.onClearSearch}>
                    <Entypo name='cross' size={16} color={Colors.BLACK} />
                </TouchableOpacity>
            }




        </Animated.View>

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
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 10,
    }
})

export default Input;