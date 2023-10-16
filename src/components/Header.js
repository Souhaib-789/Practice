
import React, { useState } from "react";
import {  StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";

const Header = () => {

    return (
        <View style={styles.container}>
            <TextComponent text={'Header'} style={styles.heading} />

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
})

export default Header;