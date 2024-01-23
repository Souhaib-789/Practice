import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View, useColorScheme } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import { useDispatch, useSelector } from "react-redux";
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";
import switchTheme from 'react-native-theme-switch-animation';
import { Fonts } from "../../config/Fonts";
import { setTheme } from "../../redux/Actions/GeneralActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
    const userData = useSelector(state => state.AuthReducer.user)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const theme = useSelector(state => state.GeneralReducer.theme)
    // const [theme, settheme] = useState(useColorScheme() === 'dark' ? false :  true)

    const options = [
        {
            name: 'Theme',
            info: theme ? 'Dark' : 'Light',
            icon: <Feather name={theme ? "moon" : "sun"} size={18} color={theme ? Colors?.WHITE : Colors.BLACK} />
        },
        {
            name: 'Notifications',
            info: 'Messages, reminders & emails',
            icon: <SimpleLineIcons name="bell" size={18} color={theme ? Colors?.WHITE : Colors.BLACK} />
        },
        {
            name: 'Help',
            info: 'FAQ, contact us, privacy policy',
            icon: <AntDesign name="questioncircleo" size={18} color={theme ? Colors?.WHITE : Colors.BLACK} />
        },
        {
            name: 'Invite a friend',
            info: 'Share the app with your friends',
            icon: <Ionicons name="people-outline" size={18} color={theme ? Colors?.WHITE : Colors.BLACK} />
        },
        {
            name: 'Rate us',
            info: 'Rate us on the app store',
            icon: <AntDesign name="staro" size={18} color={theme ? Colors?.WHITE : Colors.BLACK} />
        },
        {
            name: 'About',
            info: 'Learn more about the app',
            icon: <Feather name="info" size={18} color={theme ? Colors?.WHITE : Colors.BLACK} />
        },
        {
            name: 'Logout',
            info: 'Logout from the app',
            icon: <AntDesign name="logout" size={18} color={theme ? Colors?.WHITE : Colors.BLACK} />
        },


    ]

    const onChangeTheme = () => {
        switchTheme({
            switchThemeFunction: () => {
                AsyncStorage.setItem('@theme', JSON.stringify(theme ? false : true))
                dispatch(setTheme(theme ? false : true))
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
                <TouchableOpacity onPress={item?.name == 'Theme' ? onChangeTheme : null} style={{ borderRadius: 100, width: 42, height: 42, justifyContent: "center", alignItems: 'center', backgroundColor: theme ? Colors.DDGREY  : Colors.LLIGHT_GREY }}>
                    {item?.icon}
                </TouchableOpacity>
                <View>
                    <TextComponent text={item?.name} style={{ fontSize: 15, color: theme ? Colors.WHITE : Colors.BLACK, fontFamily: Fonts.Medium }} />
                    <TextComponent text={item?.info} style={{ fontSize: 12, color: Colors.GREY, fontFamily: Fonts.Regular }} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: theme ? Colors.BLACK : Colors.WHITE }]}>

            <View style={styles.header}>
                <Image source={userData?.photoURL ? { uri: userData?.photoURL } : require('../../assets/images/person.jpg')} style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View>
                    <TextComponent text={userData?.displayName} style={[styles.heading, { color: theme ? Colors.WHITE : Colors.PRIMARY }]} />
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
        fontFamily: Fonts.Bold,
        color: Colors.PRIMARY
    },
    header: { gap: 15, flexDirection: 'row', alignItems: "center", marginTop: 10, marginBottom: 40 },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        color: Colors.GREY,
        marginTop: 5,
        fontFamily: Fonts.Regular,
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
})

export default Setting;