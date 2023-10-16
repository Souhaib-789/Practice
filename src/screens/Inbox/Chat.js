import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import Input from "../../components/Input";
import Person from '../../assets/images/person.jpg'

const Chat = () => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.chat_item}>
                <Image source={Person} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <TextComponent text={'John Doe'} style={{ fontSize: 16 }} />
                    <TextComponent text={'Hello , okay at 11 PM'} style={styles.span} />
                </View>
                <TextComponent text={'11:00 PM'} style={styles.span} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

          

            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        color: Colors.PRIMARY,
        fontWeight: 'bold'
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    initial_view: {
        padding: 20,
        backgroundColor: Colors.LLIGHT_GREY,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
    },
    search_input: {
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 0,
        elevation: 5,
        marginBottom: 10
    },
    chat_item: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colors.LLIGHT_GREY,
        borderBottomWidth: 1,
        marginVertical: 10
    },
    span: {
        fontSize: 12,
        color: Colors.DGREY,
    }
})

export default Chat;