import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from "../../../config/Colors";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";

const Profile = (props) => {

    const navigation = useNavigation()

    const StudentDetails = [
        {
            id: 1,
            info: 'Student',
            name: 'Name',
            icon: <MaterialCommunityIcons name="account" size={16} color={Colors?.PRIMARY} />
        },

        {
            id: 2,
            info: 'student@gmail.com',
            name: 'Email',
            icon: <FontAwesome name="envelope" size={16} color={Colors?.PRIMARY} />
        },

        {
            id: 3,
            info: '0000000000000',
            name: 'Contact No.',
            icon: <FontAwesome name="phone" size={16} color={Colors?.PRIMARY} />
        },

        {
            id: 4,
            info: 'CSC-20S-074',
            name: 'Student ID',
            icon: <FontAwesome5 name="id-badge" size={16} color={Colors?.PRIMARY} />
        },
    ]

    const TeacherDetails = [
        {
            id: 1,
            info: 'Mr. Teacher',
            name: 'Name',
            icon: <MaterialCommunityIcons name="account" size={16} color={Colors?.PRIMARY} />
        },

        {
            id: 2,
            info: 'teacher@gmail.com',
            name: 'Email',
            icon: <FontAwesome name="envelope" size={16} color={Colors?.PRIMARY} />
        },

        {
            id: 3,
            info: '000 0000 000',
            name: 'Contact No.',
            icon: <FontAwesome name="phone" size={16} color={Colors?.PRIMARY} />
        },

        {
            id: 4,
            info: 'Phd Computer Science',
            name: 'Qualification',
            icon: <FontAwesome name="graduation-cap" size={16} color={Colors?.PRIMARY} />
        },

        {
            id: 5,
            info: 'Computer Science',
            name: 'Department',
            icon: <FontAwesome name="building" size={16} color={Colors?.PRIMARY} />
        },
        {
            id: 6,
            info: 'Internal / External',
            name: 'Role',
            icon: <FontAwesome5 name="chalkboard-teacher" size={16} color={Colors?.PRIMARY} />
        }, {
            id: 7,
            info: 'Lecturer',
            name: 'Designation',
            icon: <FontAwesome5 name="id-badge" size={16} color={Colors?.PRIMARY} />
        }, {
            id: 8,
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
            name: 'Bio',
            icon: <AntDesign name="infocirlce" size={16} color={Colors?.PRIMARY} />
        },
        {
            id: 9,
            moreInfo: ['CS', 'SE', 'IT'],
            name: 'Courses',
            icon: <Entypo name="book" size={16} color={Colors?.PRIMARY} />
        },
        {
            id: 10,
            info: '9:00 AM - 5:00 PM',
            moreInfo: ['Mon', 'Tue', 'Wed'],
            name: 'Available Time Slots',
            icon: <Ionicons name="time" size={16} color={Colors?.PRIMARY} />
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.flex}>

            {item?.icon}

            <View style={{ gap: 3, width: '100%' }}>
                <Text style={styles.sub_heading}>{item?.name}</Text>
                {item?.info && <Text style={[styles.text, { lineHeight: 20, width: '80%' }]}>{item?.info}</Text>}

                {
                    item?.moreInfo ?
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                            {
                                item?.moreInfo?.map((item, index) => (
                                    <Text style={[styles.text, { backgroundColor: Colors?.PRIMARY, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, color: Colors?.WHITE }]} key={index}>{item}</Text>
                                ))
                            }
                        </View>
                        : null
                }
            </View>
        </View>
    );

    return (
        <View style={styles.container} >
            <Text style={styles.heading}>Profile </Text>
            <ScrollView >
                <Image source={require('../../../assets/images/person.jpg')} style={{ width: 120, height: 120, alignSelf: 'center', borderRadius: 100, marginTop: 50, marginBottom: 35 }} />

                <FlatList
                    data={TeacherDetails}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />

                <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
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
        gap: 15,
        marginVertical: 15,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.BLACK,
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

export default Profile;