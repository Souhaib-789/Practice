import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Colors } from "../../../config/Colors";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-animatable";
import Button from "../../../components/Button";
import Ionicons from 'react-native-vector-icons/Ionicons';

const RequestDetail = () => {
    const navigation = useNavigation()
    const [startMeeting, setStartMeeting] = useState(false)
    const [endMeeting, setEndMeeting] = useState(false)
    const [meetingCompleted, setMeetingCompleted] = useState(false)

    const onPressStartMeeting = () => {
        if (endMeeting) {
            setEndMeeting(false)
        }
        else {
            setEndMeeting(true)
        }
    }

    const onPressEndMeeting = () => {
        setEndMeeting(false)
        setMeetingCompleted(true)
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.flex}>
                    <Ionicons name="chevron-back" size={24} color={Colors?.PRIMARY} onPress={() => navigation.goBack()} />
                    <Text style={[styles.sub_heading, { marginTop: 0, marginBottom: 0 }]}>Request From </Text>
                </View>

                <View style={styles.flex}>
                    <Image source={require('../../../assets/images/person.jpg')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                    <Text style={styles.heading}>Abdul Ahad</Text>
                </View>

                <Text style={styles.sub_heading}>Subject</Text>
                <Text style={styles.text}>Computer Science</Text>

                <Text style={styles.sub_heading}>Date</Text>
                <Text style={styles.text}>12-01-2023</Text>

                <Text style={styles.sub_heading}>Time</Text>
                <Text style={styles.text}>9:00 - 12:00 PM</Text>


                <Text style={styles.sub_heading}>Description</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</Text>
            </ScrollView>

            {
                !startMeeting &&
                <View style={styles.flexA}>
                    <Button title="Decline" style={styles.button} />
                    <Button title="Accept" style={styles.button} onPress={() => {
                        setStartMeeting(true)
                    }} />
                </View>
            }


            {
                startMeeting &&
                <Button title={endMeeting ? "End Meeting" : meetingCompleted ? "Meeting Completed" : "Start Meeting"}
                    onPress={endMeeting ? onPressEndMeeting : onPressStartMeeting}
                    style={{
                        width: '100%', backgroundColor:
                            endMeeting ? Colors?.RED : meetingCompleted ? Colors?.PRIMARY : Colors?.GREEN
                    }}
                    disabled={meetingCompleted} />
            }

        </View>
    )
}

export default RequestDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: Colors?.WHITE

    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 15,
    },
    flexA: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 13,
        color: Colors?.BLACK,
        lineHeight: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors?.BLACK,
    },
    sub_heading: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors?.BLACK,
        marginTop: 20,
        marginBottom: 5,
    },
    button: {
        width: '40%'
    }
})

