import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from './TextComponent';
import { useSelector } from 'react-redux';
import Icon, { IconTypes } from './Icon';
import { Fonts } from '../config/Fonts';
import { Colors } from '../config/Colors';


const ListEmptyComponent = (props) => {
    const Theme = useSelector(state => state.ThemeReducer.Theme);

    return (
        <View style={styles.view}>
            <Icon name='unknowfile1' type={IconTypes.AntDesign} color={Colors?.DGREY} size={props?.short ? 25 : 30} />
            <TextComponent style={{ fontSize: props?.short ? 12 : 14, fontFamily: Fonts?.Regular, top: 3, color: Colors?.DGREY }} text={`No ${props?.title ? props?.title : 'data'} found`} />
        </View>
    );
}

export default ListEmptyComponent;

const styles = StyleSheet.create({
    view: { alignItems: 'center', flexDirection: 'row', gap: 10, alignSelf: 'center', marginTop: 20 },
})