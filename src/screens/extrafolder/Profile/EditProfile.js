import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from "../../../config/Colors";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";

const EditProfile = (props) => {

    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <View style={styles.flex}>
                <Ionicons name="chevron-back" size={24} color={Colors?.PRIMARY} onPress={() => navigation.goBack()} />
                <Text style={[styles.sub_heading, { marginTop: 0, marginBottom: 0 }]}>Request From </Text>
            </View>

            <ScrollView>
                <Image source={require('../../../assets/images/person.jpg')} style={{ width: 120, height: 120, alignSelf: 'center', borderRadius: 100, marginTop: 50, marginBottom: 50 }} />

                <Button title="Save" onPress={() => navigation.goBack()} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 15,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
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
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.BLACK,
    },
    span: {
        fontSize: 13,
        color: Colors.DDGREY
    },
    text: {
        color: Colors.DDGREY,
        fontSize: 14,
    },
    sub_heading: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.BLACK,
    },
})

export default EditProfile;