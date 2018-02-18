import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

export default (props)=>{
    
    const {icon, msg, title, value, color} = props;  

    return(                
        <View style={styles.container}>
            <Animatable.View animation={"bounceIn"} style={styles.item}> 
                <Icon name={icon} type='ionicon' color={color} delay={500} size={95}/>
                <Text style={styles.title}>{title}</Text>
            </Animatable.View>
            <Animatable.View animation={"zoomInDown"} delay={800} style={[styles.item, {flex:1.5}]}>
                <Text style={styles.msg}>Você acertou</Text>
                <Text style={styles.result}>{value}%</Text>
                <Text style={styles.msg}>das questões.</Text>
            </Animatable.View>
            <View style={styles.item}>
                <Button 
                    label={'Refazer'}
                    background={'orange'} color={'#fff'}
                    onPress={ ()=>props.restartQuiz()}
                    iconName={'md-redo'}
                />
                <Button 
                    label={'Voltar'}
                    background={'#43C047'} color={'#fff'}
                    onPress={ ()=>props.returnToHome()}
                    iconName={'md-home'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    item: {
        margin: width * 0.022,
        flex:1.2,
        alignItems:'center',
        justifyContent: 'center'
    },
    title: {
        fontSize:25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    msg: {
        fontSize: 20,
        textAlign: 'center'
    },
    result: {
        fontSize:55,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})