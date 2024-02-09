import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { Fonts } from "../../config/Fonts";

const Home = () => {
    const userData = useSelector(state => state.AuthReducer.user)
    const navigation = useNavigation()
    const isDarkTheme = useSelector(state => state.GeneralReducer.theme)
    const customizeableColor = isDarkTheme ? Colors?.BLACK : Colors.WHITE
    const customizeableTextColor = isDarkTheme ? Colors?.WHITE : Colors.BLACK
console.log('userData',userData)
    const renderSuggestionItem = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center', borderRadius: 12, backgroundColor: customizeableColor, elevation: 5, width: 130, height: 160, marginHorizontal: 15, marginVertical: 10, paddingTop: 15, borderColor: Colors?.LIGHT_GREY, borderWidth: isDarkTheme ? 1 : 0 }}>
                <Image source={require('../../assets/images/person.jpg')} style={{ width: 63, height: 63, borderRadius: 100 }} />
                <TextComponent text={'Harry Potter'} style={{ fontSize: 13, color: customizeableTextColor, marginTop: 10, fontFamily: Fonts?.Regular }} />
                <Button onPress={() => navigation.navigate('Profile')} title={'Add Friend'} button_text_style={{ fontSize: 10 }} style={{ width: 80, paddingVertical: 5, borderRadius: 5, backgroundColor: Colors.PRIMARY, marginTop: 15 }} />
            </View>
        )
    }

    const renderStoriesItem = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center', marginHorizontal: 8, marginVertical: 10, gap: 5 }}>
                <TouchableOpacity style={{ borderRadius: 100, borderColor: index == 0 ? 'transparent' : Colors.HIGHLIGHT, borderWidth: index % 2 == 0 ? 1 : 0 }}>
                    <Image source={index == 0 ? require('../../assets/images/avatar.png') : require('../../assets/images/person.jpg')} style={{ width: 60, height: 60, borderRadius: 100, }} />
                </TouchableOpacity>
                {
                    index == 0 &&
                    <TouchableOpacity style={{ position: "absolute", top: 46, right: 2 }}>
                        <Ionicons name="add-circle" size={20} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                }
                <TextComponent text={index == 0 ? 'Your Story' : 'Harry Potter'} numberOfLines={1} style={{ fontSize: 10, width: 50, color: customizeableTextColor, alignSelf: 'center', fontFamily: Fonts?.Regular }} />
            </View>
        )
    }

    return (

        <View style={[styles.container, { backgroundColor: customizeableColor }]}>

            <TouchableOpacity onPress={()=> navigation.navigate('Extra')} style={{ borderRadius: 50, padding: 5, backgroundColor: customizeableColor, elevation: 3, position: 'absolute', right: 20, top: 20 }}>
                <Ionicons name="notifications-outline" size={20} color={customizeableTextColor} />
            </TouchableOpacity>

            <View style={styles.flex}>
                <Image source={require('../../assets/images/avatar.png')} style={{ width: 35, height: 35, borderRadius: 100, marginBottom: 5, marginRight: 10 }} />
                <TextComponent text={`Hey , ${userData?.displayName} !`} style={[styles.greeting , {color: isDarkTheme ? Colors?.LIGHT_GREY : Colors.DDGREY }]} />
            </View>

            <TextComponent text={'Enjoy Seamless Conversations with Chatify'} style={[styles.greeting_text, { color: customizeableTextColor }]} />
            <Image source={require('../../assets/images/main.png')} style={{ width: 160, height: 160, alignSelf: 'center' }} />

            <TextComponent text={'Stories'} style={[styles.heading, { color: customizeableTextColor }]} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderStoriesItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <TextComponent text={'Recommended'} style={[styles.heading, { color: customizeableTextColor }]} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderSuggestionItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 17,
        fontFamily: Fonts.SemiBold,
        marginTop: 10
    },
    greeting: {
        fontSize: 18,
        fontFamily: Fonts.Regular
    },
    greeting_text: {
        fontSize: 20,
        marginBottom: 20,
        width: '80%',
        lineHeight: 30,
        fontFamily: Fonts.SemiBold
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