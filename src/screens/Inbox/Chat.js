import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from "react-native";
import TextComponent from "../../components/TextComponent";
import Header from "../../components/Header";
import Avatar from "../../assets/images/avatar.png";
import perfil from "../../assets/images/person.jpg";
import moment from "moment";
import Icon, { IconTypes } from "../../components/Icon";
import { Colors } from "../../config/Colors";
import { Fonts } from "../../config/Fonts";

const Chat = (props) => {

    const routeData = props?.route?.params?.data
    const user = { id: 1 }
    const [message, setMessage] = useState(null)
    const [loader, setLoader] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    console.log('routeData',routeData)

    const [ChatList, setChatList] = useState([
        {
            id: 1,
            message: 'Oh , Thats great Thank you ',
            type: 'text',
            createdAt: new Date(),
            user: {
                id: 1,
            },
        },
        {
            id: 2,
            message: 'Yeah sure , You should drink corn soup , and avoid eating ice-cream and drinking juices',
            createdAt: new Date(),
            type: 'text',
            user: {
                id: 2,
            },
        },
        {
            id: 3,
            message: "I'm feeling very cold , can you suggest anything that can releif me?",
            type: 'text',
            createdAt: new Date(),
            user: {
                id: 1,
            },
        },
        {
            id: 4,
            message: 'Hii ! Andrew how are you feeling today ?',
            type: 'text',
            createdAt: new Date(),
            user: {
                id: 2,
            },
        },

    ])

    const renderChatItem = ({ item }) => {
        if (item?.user?.id != user?.id) {
            return (
                <View style={styles.healthbot_main_chat_item}>
                    <Image source={perfil ? perfil : Avatar} style={styles.bot_image} />
                    <View>
                        <View style={styles.healthbot_chat_item}>
                            <TextComponent text={item?.message} style={styles.message} />
                        </View>
                        <TextComponent text={moment(item?.createdAt).fromNow()} style={styles.chat_time} />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.person_main_chat_item}>
                    <View>
                        <View style={styles.person_chat_item}>
                            <TextComponent text={item?.message} style={[styles.message, { color: Colors?.WHITE }]} />
                        </View>
                        <TextComponent text={moment(item?.createdAt).fromNow()} style={[styles.chat_time, { alignSelf: 'flex-start' }]} />
                    </View>
                    <Image source={perfil ? perfil : Avatar} style={styles.bot_image} resizeMode={'cover'} />
                </View>
            );
        }
    };

    const onSendMessage = () => {
        let copy_arr = []
        copy_arr.push({
            message: message,
            type: 'text',
            createdAt: new Date(),
            user: {
                id: 1,
            },
        })
        setChatList([...copy_arr, ...ChatList])
        setMessage(null)
        setRefreshing(!refreshing)
    }

    return (
        <View style={styles.Container}>
            <Header title={routeData?.name} backIcon />
            <FlatList
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                data={ChatList}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={renderChatItem}
                inverted={ChatList.length > 0 ? true : false}
            />

            <View style={styles.input_container}>
                <TextInput
                    placeholder={'Type a message'}
                    placeholderTextColor={Colors.DDGREY}
                    value={message}
                    onChangeText={(e) => setMessage(e)}
                    style={styles.input}
                    // numberOfLines={message?.length > 36 ? 2 : 1}
                />

                <TouchableOpacity onPress={onSendMessage}>
                    <Icon name={'send'} type={IconTypes.Ionicons} size={22} color={Colors.PRIMARY} />
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Chat;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 15
    },
    bot_image: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    message: {
        fontSize: 14,
        fontFamily: Fonts?.Regular
    },
    person_main_chat_item: {
        paddingVertical: 3,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        width: '65%',
    },

    person_chat_item: {
        backgroundColor: Colors.PRIMARY,
        padding: 14,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginRight: 10,
    },
    healthbot_main_chat_item: {
        paddingVertical: 8,
        flexDirection: 'row',
        width: '70%',
        marginVertical: 5,
    },

    healthbot_chat_item: {
        backgroundColor: Colors.LIGHT_GREY,
        padding: 14,
        marginLeft: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    chat_time: {
        fontSize: 10,
        color: Colors.DDGREY,
        alignSelf: 'flex-end',
        marginTop: 5,

    },
    input: {
        width: '88%',
        fontSize: 15,
        fontFamily: Fonts.Regular,
        color: Colors.BLACK
    },
    input_container: {
        borderRadius: 10,
        width: '100%',
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 5,
        backgroundColor: Colors.WHITE,
        elevation: 5,
    },
})