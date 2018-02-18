import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Xp from './Xp';

const Avatar = (props)=>{
    return(
        <Animatable.View style={{flex:1.5}}  delay={500}>
            <View style={styles.avatar}>
                <TouchableOpacity activeOpacity={.6} onPress={()=>props.onPressPhoto&&props.onPressPhoto()}>                    
                    {
                        props.userphoto ?
                        <Image source={{uri:props.userphoto}} style={styles.img} resizeMode={'cover'}/>
                        :
                        <Animatable.View animation={'bounce'} style={[styles.img, { backgroundColor: 'orange',}]} iterationCount={'infinite'} delay={1200}>
                            <Icon name={'md-camera'} type='ionicon' color={'#fff'} size={35}/>
                        </Animatable.View>
                    }                        
                    
                </TouchableOpacity>
                <View style={styles.textuser}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>{props.name}</Text>
                    </View>
                    <Xp value={props.value} />
                </View>
            </View>
        </Animatable.View>
    )
};

export default Avatar;

const styles = StyleSheet.create({
    textuser:  {
        margin: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
    avatar: {
        flex:1,
        flexDirection: 'row',
    },
    img: {
        width:70,
        height:70,
        borderRadius:35,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
});