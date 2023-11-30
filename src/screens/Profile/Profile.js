import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import { Fonts } from "../../config/Fonts";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ProfileCard from "../../components/ProfileCard";

const Profile = (props) => {
    const renderItem = ({ item }) => (
        <Image source={require('../../assets/images/person.jpg')} style={{ width: 120, height: 120, borderRadius: 10, margin: 10 }} />
    );

    return (
        <View style={styles.container} >
            <Image source={require('../../assets/images/person.jpg')} style={{ width: '100%', height: 200 }} />
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <ProfileCard />
                <FlatList
                    data={Array(10)}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,
        width: '100%',
        paddingVertical: 15,
    },
    main_heading: {
        fontSize: 18,
        fontFamily: Fonts.Bold
    },
    span: {
        fontSize: 13,
        fontFamily: Fonts.Regular,
        color: Colors.DDGREY
    },
    text: {
        color: Colors.WHITE,
        fontFamily: Fonts.Bold
    }
})

export default Profile;