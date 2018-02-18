import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Button extends Component{

    state = {
        animation: 'bounceInLeft'
    }

    onPressButton(){
        this.props.onPress();
    }

    render(){
        const {animation} = this.state;
        const {onPress, background, borderColor, color, label, iconName} = this.props;
        return(
            <Animatable.View style={{flex:1}} animation={animation} delay={500}>   
                <TouchableOpacity activeOpacity={.6} onPress={()=>onPress&&this.onPressButton()}>
                    <View style={[styles.btnPill, {backgroundColor:background}]}>
                        <Text style={[styles.label,{color:color || '#000'}]}>{label}</Text>
                        <Icon name={iconName || 'md-arrow-forward'} type='ionicon' color={'#fff'} size={25}/>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        )
    }
}

const styles = StyleSheet.create({
    btnPill : {
        flexDirection:'row',
        minWidth : width * 0.8,
        minHeight : 50,
        borderRadius : 8,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#56c941',
        marginBottom: 20,
        paddingVertical:5,
        paddingHorizontal:7 
    },
    label: {
        marginLeft:5,
        marginRight:5,
        fontSize: 20
    }
})