import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import Input from "../../components/Input";
import Person from '../../assets/images/person.jpg'
import { useNavigation } from "@react-navigation/native";

const Inbox = () => {

    const navigation = useNavigation()
const messages = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Harry Potter',
    },
    {
        id: 3,
        name: 'Sam Wilson',
    },
    {
        id: 4,
        name: 'Sara David',
    },
    {
        id: 5,
        name: 'Henry Kelvin',
    },
    {
        id: 6,
        name: 'Amy Jackson',
    },
]
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.chat_item} onPress={() => navigation.navigate('Chat' , { data: item?.name})}>
                <Image source={Person} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <TextComponent text={item?.name} style={{ fontSize: 16 }} />
                    <TextComponent text={'Hello , okay at 11 PM'} style={styles.span} />
                </View>
                <TextComponent text={'11:00 PM'} style={styles.span} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.initial_view}>
                <TextComponent text={'Messages'} style={styles.heading} />
                <Input placeholder={'Search'} search style={styles.search_input} />
            </View>

            <FlatList
                data={messages}
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

export default Inbox;