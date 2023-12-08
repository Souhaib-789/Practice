
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import TextComponent from "./TextComponent";
import { Colors } from "../config/Colors";
import Person from '../assets/images/person.jpg'
import { Fonts } from "../config/Fonts";


const Header = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                props?.backIcon ?
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" size={24} color={Colors.BLACK} />
                    </TouchableOpacity>
                    : <View style={{ width: 24 }} />
            }

            <TextComponent text={props?.title} style={styles.heading} />

            {
                props?.profile ?
                    <TouchableOpacity>
                        <Image source={Person} style={styles.profile_image} />
                    </TouchableOpacity>
                    : <View style={{ width: 24 }} />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
    },
    profile_image: { width: 35, height: 35, borderRadius: 50 },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.WHITE,
        padding: 15,
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
})

export default Header;