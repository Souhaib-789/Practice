import React, { useState, useCallback, useEffect } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import Input from "../../components/Input";
import Person from '../../assets/images/person.jpg'
import { GiftedChat , Bubble} from 'react-native-gifted-chat'
import Header from '../../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Chat = (props) => {

    const routeData = props?.route?.params?.data
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Ffeatures%2Fremove-filter-from-photo%2F&psig=AOvVaw2FTVNQo2BVqw52vzs3CwAH&ust=1697623564250000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjSmt_q_IEDFQAAAAAdAAAAABAD',
                },
            },
        ])
    }, [])

    const onSend = (messages) => {
        console.log('====================================');
        console.log(messages);
        console.log('====================================');
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }

    // const renderItem = ({ item }) => {
    //     return (
    //         <TouchableOpacity style={styles.chat_item}>
    //             <Image source={Person} style={{ width: 50, height: 50, borderRadius: 50 }} />
    //             <View style={{ flex: 1, marginLeft: 10 }}>
    //                 <TextComponent text={'John Doe'} style={{ fontSize: 16 }} />
    //                 <TextComponent text={'Hello , okay at 11 PM'} style={styles.span} />
    //             </View>
    //             <TextComponent text={'11:00 PM'} style={styles.span} />
    //         </TouchableOpacity>
    //     )
    // }

    return (
        <View style={styles.container}>

            <Header title={routeData} backIcon profile />
            <View style={{ padding: 5, flex: 1 }}>
                <GiftedChat
                    messages={messages}
                    onSend={currMessage => onSend(currMessage)}
                    user={{
                        _id: 1,
                    }}
                    showAvatarForEveryMessage={true}
                    renderAvatar={() => <Image source={Person} style={{ width: 35, height: 35, borderRadius: 50 }} />}
                    renderAvatarOnTop={true}
                    renderBubble={(props) => {
                        return <Bubble {...props} wrapperStyle={{
                            right:{
                                backgroundColor: Colors.PRIMARY
                            }
                        }} />
                    }}
                    // renderSend={() => (
                    //     <TouchableOpacity onPress={() => onSend()}>
                    //         <FontAwesome name='send' color={Colors.PRIMARY} size={25} margin={12} />
                    //     </TouchableOpacity>
                    // )}
                />
            </View>


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
    }
})

export default Chat;