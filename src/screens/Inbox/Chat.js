import React, { useState, useCallback, useEffect } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import Input from "../../components/Input";
import Person from '../../assets/images/person.jpg'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import Avatar from '../../assets/images/avatar.png'
import { Fonts } from '../../config/Fonts';
import moment from 'moment';

const Chat = (props) => {

    const routeData = props?.route?.params?.data
    const user = { id: 2 }
    const [messages, setMessages] = useState([])

    const ChatList = [
        {
            id: 1,
            message: 'Hello developer',
            type: 'text',
            createdAt: new Date(),
            user: {
                id: 2,
                name: 'React Native',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Ffeatures%2Fremove-filter-from-photo%2F&psig=AOvVaw2FTVNQo2BVqw52vzs3CwAH&ust=1697623564250000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjSmt_q_IEDFQAAAAAdAAAAABAD',
            },
        },
        {
            id: 2,
            message: 'Hii Tester',
            createdAt: new Date(),
            type: 'text',
            user: {
                id: 1,
                name: 'React Native',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Ffeatures%2Fremove-filter-from-photo%2F&psig=AOvVaw2FTVNQo2BVqw52vzs3CwAH&ust=1697623564250000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjSmt_q_IEDFQAAAAAdAAAAABAD',
            },
        },
        {
            id: 3,
            message: 'Did you completed the task ?',
            type: 'text',
            createdAt: new Date(),
            user: {
                id: 2,
                name: 'React Native',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Ffeatures%2Fremove-filter-from-photo%2F&psig=AOvVaw2FTVNQo2BVqw52vzs3CwAH&ust=1697623564250000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjSmt_q_IEDFQAAAAAdAAAAABAD',
            },
        },
        {
            id: 4,
            message: 'I want it right now ..',
            type: 'text',
            createdAt: new Date(),
            user: {
                id: 2,
                name: 'React Native',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Ffeatures%2Fremove-filter-from-photo%2F&psig=AOvVaw2FTVNQo2BVqw52vzs3CwAH&ust=1697623564250000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjSmt_q_IEDFQAAAAAdAAAAABAD',
            },
        },

    ]

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Ffeatures%2Fremove-filter-from-photo%2F&psig=AOvVaw2FTVNQo2BVqw52vzs3CwAH&ust=1697623564250000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjSmt_q_IEDFQAAAAAdAAAAABAD',
    //             },
    //         },
    //     ])
    // }, [])

    const renderChatItem = ({ item }) => {
        let profile_image = item?.user?.id == user?.id ? null : item?.user?.avatar
        if (item?.user?.id == user?.id) {
            return (
                <View style={styles.user_chat_item}>
                    <TextComponent text={item?.message} style={{ fontSize: 14, fontFamily: Fonts?.Regular }} />
                </View>
            );
        } else {
            return (
                <View style={styles.person_chat_item}>
                    <Image source={profile_image ? { uri: profile_image } : Avatar} style={styles.profile_image} />
                    <View style={styles.chat_container}>
                        <TextComponent style={styles.chat_text} text={item?.message} />
                        {/* <TextComponent style={styles.chat_time} text={moment(item?.createdAt).format('hh:mm A')} /> */}
                    </View>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>

            <Header title={routeData} backIcon profile />
            <View style={{ padding: 5, flex: 1 }}>

            </View>

            <FlatList
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                data={ChatList}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={renderChatItem}
                inverted={ChatList.length > 0 ? true : false}
                // onEndReachedThreshold={0.6}
                // onEndReached={() => OnEndReached()}
                ListEmptyComponent={<ListEmptyComponent title={'messages'} />}
            // ListFooterComponent={ <ActivityIndicator size={'large'} color={Colors.PRIMARY} /> }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        color: Colors.PRIMARY,
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
        backgroundColor: Colors.LLIGHT_GREY,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
    },
    search_input: {
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 0,
        elevation: 5,
        marginBottom: 10
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
    },
    user_chat_item: {
        backgroundColor: Colors.LLIGHT_GREY,
        width: '60%',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    person_chat_item: {
        backgroundColor: Colors.LLIGHT_GREY,
        width: '60%',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
})

export default Chat;