import React, { useState } from "react";
import { FlatList, Image, LayoutAnimation, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import Input from "../../components/Input";
import Person from '../../assets/images/person.jpg'
import { useNavigation } from "@react-navigation/native";
import { StatusBar, Animated, Dimensions, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { faker } from '@faker-js/faker';

const Inbox = () => {


    faker.seed(10);
    const DATA = [...Array(30).keys()].map((_, i) => {
        return {
            key: faker.string.uuid(),
            image: faker.image.avatar(),
            name: faker.internet.userName(),
            jobTitle: faker.internet.domainName(),
            email: faker.internet.email(),
        };
    });

    const SPACING = 20;
    const AVATAR_SIZE = 70;

    const navigation = useNavigation()
    const [search, setsearch] = useState('')
    const messages = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Harry Potter',
        },
        {
            id: 3,
            name: 'Sam Wilson',
        },
        {
            id: 4,
            name: 'Sara David',
        },
        {
            id: 5,
            name: 'Henry Kelvin',
        },
        {
            id: 6,
            name: 'Amy Jackson',
        },
        {
            id: 7,
            name: 'Amy Jackson',
        },
        {
            id: 8,
            name: 'Amy Jackson',
        },
        {
            id: 9,
            name: 'Amy Jackson',
        },
        {
            id: 10,
            name: 'Amy Jackson',
        },
        {
            id: 11,
            name: 'Amy Jackson',
        },
        {
            id: 12,
            name: 'Amy Jackson',
        },
        {
            id: 13,
            name: 'Amy Jackson',
        },

    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.chat_item} onPress={() => navigation.navigate('Chat', { data: item?.name })}>
                <Image source={item?.image ? {uri: item?.image } : Person} style={{ width: 45, height: 45, borderRadius: 50 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <TextComponent text={item?.name} style={{ fontSize: 16 }} />
                    <TextComponent text={'Hello , okay at 11 PM'} style={styles.span} />
                </View>
                <View style={{ alignItems: 'flex-end', gap: 5 }}>
                    <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: Colors.PRIMARY, alignItems: 'center', justifyContent: 'center' }}>
                        <TextComponent text={'1'} style={{ fontSize: 10, color: Colors.WHITE, fontWeight: 'bold' }} />
                    </View>
                    <TextComponent text={'11:00 PM'} style={styles.span} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.initial_view}>
                <TextComponent text={'Chats'} style={styles.heading} />
                <Input placeholder={'Search'} search style={styles.search_input} value={search} onChangeText={(e) => setsearch(e)}
                    onClearSearch={() => { setsearch(null) }} />
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={{ padding: 10 }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        color: Colors.WHITE,
        fontWeight: 'bold'
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    initial_view: {
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
    },
    search_input: {
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 0,
        elevation: 5,
        marginTop: 22,
        marginBottom: 6,
    },
    chat_item: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colors.LLIGHT_GREY,
        borderBottomWidth: 1,
        marginVertical: 10
    },
    span: {
        fontSize: 12,
        color: Colors.DGREY,
    }
})

export default Inbox;