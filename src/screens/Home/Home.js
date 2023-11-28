import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = () => {
    const userData = useSelector(state => state.AuthReducer.user)

    const renderSuggestionItem = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center', borderRadius: 12, backgroundColor: Colors.WHITE, elevation: 5, width: 130, height: 160, marginHorizontal: 15, marginVertical: 10 , paddingTop: 15, }}>
                <Image source={require('../../assets/images/person.jpg')} style={{ width: 63, height: 63, borderRadius: 100 }} />
                <TextComponent text={'Harry Potter'} style={{ fontSize: 14, color: Colors.BLACK, marginTop: 10, fontFamily: 'Comfortaa-Regular' }} />
                <Button title={'Add Friend'} button_text_style={{ fontSize: 11 }} style={{  width: 80, paddingVertical: 4, borderRadius: 5, backgroundColor: Colors.PRIMARY, marginTop: 15 }} />
            </View>
        )
    }

    const renderStoriesItem = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center', marginHorizontal: 8, marginVertical: 10 , gap: 5 }}>
                <TouchableOpacity style={{ borderRadius: 100, borderColor: index == 0 ? 'transparent' : Colors.HIGHLIGHT, borderWidth: 1.5 }}>
                    <Image source={index == 0 ? require('../../assets/images/avatar.png')  : require('../../assets/images/person.jpg')} style={{ width: 60, height: 60, borderRadius: 100,  }} />
                </TouchableOpacity>
                {
                    index == 0 &&
                <TouchableOpacity style={{position: "absolute", top: 46, right: 2 }}>
                    <Ionicons name="add-circle" size={20} color={Colors.PRIMARY} />
                </TouchableOpacity>
                }
                <TextComponent text={index == 0 ? 'Your Story' : 'Harry Potter'} numberOfLines={1} style={{ fontSize: 10, width: 50, color: Colors.BLACK, alignSelf: 'center' , fontFamily: 'Comfortaa-Regular'}} />
            </View>
        )
    }

    return (

        <View style={styles.container}>

            <TouchableOpacity style={{ borderRadius: 50, padding: 5, backgroundColor: Colors.WHITE, elevation: 3, alignSelf: 'flex-end' }}>
                <Ionicons name="notifications-outline" size={20} color={Colors.BLACK} />
            </TouchableOpacity>

            <TextComponent text={'Hey , Alex !'} style={styles.greeting} />
            <TextComponent text={'Enjoy Seamless Conversations'} style={styles.greeting_text} />
            <View style={{ backgroundColor: Colors.PRIMARY, borderRadius: 20, marginVertical: 5 }}>
                <Image source={require('../../assets/images/main.png')} style={{ width: 160, height: 160, alignSelf: 'center' }} />
            </View>

            <TextComponent text={'Stories'} style={styles.heading} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderStoriesItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <TextComponent text={'Recommended'} style={styles.heading} />
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
        fontFamily: 'Comfortaa-Bold',
        marginTop: 10
    },
    greeting: {
        fontSize: 20,
        color: Colors.DDGREY,
        fontFamily: 'Comfortaa-SemiBold'
    },
    greeting_text: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Comfortaa-Medium'
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