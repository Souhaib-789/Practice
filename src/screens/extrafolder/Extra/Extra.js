import React from "react";

import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { Colors } from "../../../config/Colors";
import { useNavigation } from "@react-navigation/native";
import TextComponent from "../../../components/TextComponent";
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Extra = () => {
    const navigation = useNavigation()

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={()=> navigation.navigate('RequestDetail')} style={{ backgroundColor: Colors?.WHITE, elevation: 5, gap: 5, padding: 20, borderRadius: 10, marginVertical: 10, marginHorizontal: 4 }}>
            <Text style={styles.text}>Request from <Text style={{color: Colors?.PRIMARY}}>Abdul Ahad</Text></Text>
            <View style={styles.flex}>
            <MaterialCommunityIcons name="google-classroom" size={16} color={Colors?.BLACK} />
            <Text style={styles.text}>Computer Science</Text>
            </View>
            <View style={[styles.flex, { gap: 20 }]}>
                <View style={styles.flex}>
                    <Fontisto name="date" size={16} color={Colors?.BLACK} />
                    <Text style={styles.text}>12-01-2023</Text>
                </View>
                <View style={styles.flex}>
                    <AntDesign name="clockcircleo" size={16} color={Colors?.BLACK} />
                    <Text style={styles.text}>9:00 - 12:00 PM</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>

            <View style={styles.flex}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../../../assets/images/person.jpg')} style={{ width: 40, height: 40, borderRadius: 50 }} />
                </TouchableOpacity>
                <Text style={styles.heading}>Welcome Teacher!</Text>
            </View>

            <Text style={styles.sub_heading}>Upcoming Requests</Text>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id}
                ListEmptyComponent={() => (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                        <TextComponent text="No Data Found" />
                    </View>
                )}
            />

        </View>
    )
}

export default Extra;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: Colors?.WHITE,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        fontSize: 13,
        color: Colors?.BLACK,
    },
    heading: {
        fontSize: 18,
        color: Colors?.BLACK,
    },
    sub_heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors?.BLACK,
        marginTop: 30,
        marginBottom: 10,
    }
})

