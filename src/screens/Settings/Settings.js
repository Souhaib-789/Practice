import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import { useSelector } from "react-redux";
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";
import switchTheme from 'react-native-theme-switch-animation';

const Setting = () => {
    const userData = useSelector(state => state.AuthReducer.user)
    const navigation = useNavigation();
    const [theme, settheme] = useState(true)

    const options = [
        {
            name: 'Theme',
            info: theme ? 'Light' : 'Dark',
            icon: <Feather name={theme ? "sun" : "moon"} size={18} color={theme ? Colors?.BLACK : Colors.WHITE} />
        },
        {
            name: 'Notifications',
            info: 'Messages, reminders & emails',
            icon: <SimpleLineIcons name="bell" size={18} color={theme ? Colors?.BLACK : Colors.WHITE} />
        },
        {
            name: 'Help',
            info: 'FAQ, contact us, privacy policy',
            icon: <AntDesign name="questioncircleo" size={18} color={theme ? Colors?.BLACK : Colors.WHITE} />
        },
        {
            name: 'Invite a friend',
            info: 'Share the app with your friends',
            icon: <Ionicons name="people-outline" size={18} color={theme ? Colors?.BLACK : Colors.WHITE} />
        },
        {
            name: 'Rate us',
            info: 'Rate us on the app store',
            icon: <AntDesign name="staro" size={18} color={theme ? Colors?.BLACK : Colors.WHITE} />
        },
        {
            name: 'About',
            info: 'Learn more about the app',
            icon: <Feather name="info" size={18} color={theme ? Colors?.BLACK : Colors.WHITE} />
        },
        {
            name: 'Logout',
            info: 'Logout from the app',
            icon: <AntDesign name="logout" size={18} color={theme ? Colors?.BLACK : Colors.WHITE} />
        },


    ]

    const onChangeTheme = () => {
        switchTheme({
            switchThemeFunction: () => {
                settheme(theme === true ? false : true);
            },
            animationConfig: {
                type: 'circular',
                duration: 2000,
                startingPoint: {
                    cx: 1,
                    cy: 1,
                    cxRatio: 0.5,
                    cyRatio: 0,
                },
            },
        });
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginVertical: 15, }}>
                <TouchableOpacity onPress={item?.name == 'Theme' ? onChangeTheme : null} style={{ borderRadius: 100, width: 42, height: 42, justifyContent: "center", alignItems: 'center', backgroundColor: theme ? Colors.LLIGHT_GREY : Colors.DDGREY }}>
                    {item?.icon}
                </TouchableOpacity>
                <View>
                    <TextComponent text={item?.name} style={{ fontSize: 15, color: theme ? Colors.BLACK : Colors.WHITE }} />
                    <TextComponent text={item?.info} style={{ fontSize: 12, color: Colors.GREY }} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: theme ? Colors.WHITE : Colors.BLACK }]}>

            <View style={{ gap: 15, flexDirection: 'row', alignItems: "center", marginTop: 10, marginBottom: 40 }}>
                <Image source={userData?.photoURL ? { uri: userData?.photoURL } : require('../../assets/images/person.jpg')} style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View>
                    <TextComponent text={userData?.displayName} style={[styles.heading, { color: theme ? Colors.PRIMARY : Colors.WHITE }]} />
                    <TextComponent text={userData?.email} style={styles.text} />
                </View>
            </View>

            <FlatList
                data={options}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.PRIMARY
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        color: Colors.GREY,
        marginTop: 5
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
})

export default Setting;