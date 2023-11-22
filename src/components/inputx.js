import React from "react";
import { Animated, LayoutAnimation, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Colors } from "../config/Colors";
import TextComponent from "./TextComponent";
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";


const Input = (props) => {
    const animation = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            // opacity: animation.value,
            // transform: [{
            //     translateX: animation.value * 255
            // }],
            width: animation.value == 1 ? withTiming(300, { duration: 500 }) : withTiming(0, { duration: 500 }),

        }
    }
    )

    return (
        <View>

            {/* <TextComponent text={props?.label} style={styles.label} /> */}
            <Animated.View style={[styles.input_container, { ...props?.style }]}>

                {
                    props?.search &&
                    <TouchableOpacity>
                        <Feather name='search' size={20} color={Colors.BLACK} />
                    </TouchableOpacity>
                }

                <TextInput
                    placeholder={props?.placeholder}
                    value={props?.value}
                    onChangeText={props?.onChangeText}
                    style={{ width: '83%' }}
                />

                {
                    props?.value &&
                    <TouchableOpacity onPress={props?.onClearSearch}>
                        <Entypo name='cross' size={16} color={Colors.BLACK} />
                    </TouchableOpacity>
                }




            </Animated.View>

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