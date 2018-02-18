import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');


export default (props)=>{
    const {title, questions} = props;
    
    return(                
        <TouchableOpacity activeOpacity={.6} onPress={()=>props.onPress() || false} onLongPress={()=>props.onLongPress() || false}>
            <Animatable.View animation={"bounceIn"} style={styles.deck}>
                <Image source={require('../img/bgdeck.png')} style={styles.deckbg} resizeMode='cover' />            
                <View style={styles.content}>                                       
                    <Text style={styles.title}>{title}</Text>
                    {
                        props.selected&&<Icon name='md-checkmark-circle' size={35} type='ionicon' color='orange'/>
                    } 
                    <Text style={styles.card}>{`${questions.length} cartas`}</Text>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deck: {
        width: width * 0.29,
        height: width * 0.40,
        margin: width * 0.022,
    },
    deckbg: {
        flex:1,
        width: width * 0.29,
        height: width * 0.40,
        position:'absolute',
        borderRadius: 5
    },
    content: {
        flex:1,
        justifyContent: 'space-between',
        padding:5
    },
    title: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    card: {
        color: '#fff',
        textAlign: 'center'
    }
})