import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const RadiosButton = props => {
    return (
        <TouchableOpacity style={styles.circle}
            onPress={props.onPress}>
            {props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    circle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ACACAC',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    checkedCircle: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#131313',
    }
});

export default RadiosButton;