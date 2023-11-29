import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TextComponent from "./TextComponent";
import { Colors } from "../config/Colors";
import { Fonts } from "../config/Fonts";

const ProfileCard = (props) => {
    return (
            <View style={{ padding: 25 , width: '80%' , margin: 5, backgroundColor: Colors.WHITE, borderRadius: 10, elevation: 5, gap: 10 }}>
                <View style={[styles.flex, { gap: 10 }]}>
                    <Image source={require('../assets/images/person.jpg')} style={{ width: 70, height: 70, borderRadius: 100 }} />
                    <View >
                        <TextComponent text={'Alex Jhonson'} style={styles.main_heading} />
                        <TextComponent text={'Developer'} style={styles.span} />
                    </View>
                </View>
                <View style={styles.flex}>
                    <MaterialCommunityIcons name="email-outline" size={18} color={Colors.PRIMARY} />
                    <TextComponent text={'developer@gmail.com'} style={styles.span} />
                </View>
                <View style={styles.flex}>
                    <SimpleLineIcons name="phone" size={18} color={Colors.PRIMARY} />
                    <TextComponent text={'342 4545435'} style={styles.span} />
                </View>

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

export default ProfileCard;