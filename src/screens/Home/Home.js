import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import { useSelector } from "react-redux";
import Button from "../../components/Button";

const Home = () => {
    const userData = useSelector(state => state.AuthReducer.user)

    const renderSuggestionItem = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center', borderRadius: 12, backgroundColor: Colors.WHITE, elevation: 5, width: 130, height: 160, marginVertical: 5, marginHorizontal: 15, paddingTop: 15, }}>
                <Image source={require('../../assets/images/person.jpg')} style={{ width: 63, height: 63, borderRadius: 100 }} />
                <TextComponent text={'Harry Potter'} style={{ fontSize: 14, color: Colors.BLACK, marginTop: 10 }} />
                <Button title={'Add Friend'} button_text_style={{ fontSize: 11 }} style={{ width: 80, paddingVertical: 4, borderRadius: 5, backgroundColor: Colors.PRIMARY, marginTop: 15 }} />
            </View>
        )
    }

    const renderStoriesItem = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center', marginVertical: 5, marginHorizontal: 8, gap: 5 }}>
                <TouchableOpacity style={{borderRadius: 100 , borderColor: Colors.HIGHLIGHT , borderWidth: 2 }}>
                    <Image source={require('../../assets/images/person.jpg')} style={{ width: 60, height: 60, borderRadius: 100 }} />
                </TouchableOpacity>
                <TextComponent text={'Harry Potter'} numberOfLines={1} style={{ fontSize: 10, width: 58, color: Colors.BLACK, alignSelf: 'center' }} />
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <TextComponent text={'Status'} style={styles.heading} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderStoriesItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 20 }}
            />

            <TextComponent text={'Recommended'} style={styles.heading} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderSuggestionItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 20 }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
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