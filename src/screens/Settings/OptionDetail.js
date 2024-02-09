import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../config/Colors";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from "../../components/Header";
import switchTheme from 'react-native-theme-switch-animation';

const OptionDetail = () => {

    const options = [
        {
            id: 1,
            name: 'Light',
        },
        {
            id: 2,
            name: 'Dark',
        }
    ]
    const [selected, setSelected] = useState(null)
console.log('selected',selected);
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                switchTheme({
                    switchThemeFunction: () => {
                        setSelected(selected === true ? false : true);
                    },
                    animationConfig: {
                        type: 'circular',
                        duration: 1000,
                        startingPoint: {
                            cxRatio: 0.5,
                            cyRatio: 0,
                        },
                    },
                });
            }}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginVertical: 19, marginHorizontal: 20 }}>
            <MaterialIcons name="radio-button-off" size={20} color={selected ? Colors.WHITE : Colors.BLACK} />
            <TextComponent text={item?.name} style={{ fontSize: 15, color: selected ? Colors.WHITE : Colors.BLACK }} />
        </TouchableOpacity>
    )

    return (
        <View style={[styles.container , {backgroundColor: selected ? Colors.BLACK : Colors.WHITE }]}>
            <Header backIcon title={'Theme'} />
            <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
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
        gap: 10
    },
    text: {
        fontSize: 13,
        color: Colors.GREY,
        marginTop: 5
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
})

export default OptionDetail;