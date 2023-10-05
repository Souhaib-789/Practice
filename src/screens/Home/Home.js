import React, { useState } from "react";
import {  StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";

const Home = () => {

    return (
        <View style={styles.container}>
            <TextComponent text={'Home'} style={styles.heading} />
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

export default Home;