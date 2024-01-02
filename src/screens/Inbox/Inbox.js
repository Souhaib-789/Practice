import React, { useState, useRef } from "react";
import { FlatList, Image, LayoutAnimation, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import Input from "../../components/Input";
import Person from '../../assets/images/person.jpg'
import { useNavigation } from "@react-navigation/native";
import { StatusBar, Animated, Dimensions, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
import { faker } from '@faker-js/faker';
import { Fonts } from "../../config/Fonts";

const Inbox = () => {
    const navigation = useNavigation()
    const [search, setsearch] = useState('')

    faker.seed(10);
    const DATA = [...Array(20).keys()].map((_, i) => {
        return {
            key: faker.string.uuid(),
            image: faker.image.urlPicsumPhotos(50, 50),
            name: faker.internet.userName(),
        };
    });


    // const SPACING = 20;
    // const AVATAR_SIZE = 45;   
    // const INTEX_SIZE = 70 + SPACING * 3;
    // const scrollY = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item, index }) => {
        // const inputRange = [-1, 0, INTEX_SIZE * index, INTEX_SIZE * (index + 2)];

        // const scale = scrollY.interpolate({
        //     inputRange,
        //     outputRange: [1, 1, 1, 0],
        // });
        // const opacityInputRange = [-1, 0, INTEX_SIZE * index, INTEX_SIZE * (index + 0.5)];
        // const opacity = scrollY.interpolate({
        //     inputRange: opacityInputRange,
        //     outputRange: [1, 1, 1, 0],
        // });

        return (
            // <Animated.View>
            <TouchableOpacity style={styles.chat_item} onPress={() => navigation.navigate('Chat', { data: item?.name })}>
                <Image source={item?.image ? { uri: item?.image } : Person} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <TextComponent text={item?.name} style={{ fontSize: 14 , fontFamily: Fonts?.SemiBold }} />
                    <TextComponent text={'Hello , okay at 11 PM'} style={styles.span} />
                </View>
                <View style={{ alignItems: 'flex-end', gap: 6 }}>
                    <TextComponent text={'11:00 PM'} style={styles.span} />
                    {
                        index % 2 == 0 &&
                        <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: Colors.PRIMARY, alignItems: 'center', justifyContent: 'center' }}>
                            <TextComponent text={'1'} style={{ fontSize: 10, color: Colors.WHITE, fontWeight: 'bold' }} />
                        </View>
                    }
                </View>
            </TouchableOpacity>
            // </Animated.View>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.initial_view}>
                <TextComponent text={'Chats'} style={styles.heading} />
                <Input placeholder={'Search'} search style={styles.search_input} value={search} onChangeText={(e) => setsearch(e)}
                    onClearSearch={() => { setsearch(null) }} />
            </View>

            <Animated.FlatList
                data={DATA}
                renderItem={renderItem}
                // onScroll={Animated.event(
                //     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                //     { useNativeDriver: true }
                // )}
                keyExtractor={(item, index) => index.toString()}
                style={{ padding: 10 }}
                decelerationRate={'fast'}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        color: Colors.WHITE,
      fontFamily: Fonts.Bold,
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
        marginVertical: 10,
    },
    span: {
        fontSize: 12,
        color: Colors.DGREY,
        fontFamily: Fonts.Regular,
    }
})

export default Inbox;