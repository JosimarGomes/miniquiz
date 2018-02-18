import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Xp = (props)=>{
    return(
            <View style={{flexDirection:'row'}}>
                <Icon name={'md-star-outline'} type='ionicon' size={15}/>
                <Text style={{fontWeight: 'bold'}}> {props.value}xp</Text>
            </View>
    )
};

export default Xp;