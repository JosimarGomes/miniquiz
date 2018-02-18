import React, { Component } from 'react';
import { Image, View, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background';
import Button from '../components/Button';
import {addname} from '../actions/user-action';

class Login extends Component {

    state = {
        name: ""
    }

    startQuiz(){
        const {name} = this.state;
        if(!name) {
            return Alert.alert(
                ':(',
                'Digite um nome para começar!',
                [
                  {text: 'Ok, vou digitar', onPress: () => false}
                ],
                // { cancelable: false }
            )
        }

        this.props.addname(name);
    }

    render() {
        
        const {name} = this.state;

        return (
                <Background>
                    <View style={{flex:1,alignItems: 'center'}}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Image source={require('../img/logo.png')} resizeMode={'contain'}style={{width:160, height:95}} />                
                        </View>
                        <View style={{flex:1}}>
                            <TextInput
                                style={{height:40, width:300}}
                                onChangeText={(name) => this.setState({name})}
                                value={name}
                                placeholder={'Digite seu nome'}
                                placeholderTextColor={'#ccc'}
                            />
                            <Button 
                                label={'COMEÇAR!'}
                                background={'orange'} color={'#fff'}
                                onPress={ ()=>this.startQuiz()}
                            />
                        </View>
                    </View>
                </Background>
        );
    }
}
        
        
const mapStateToProps = ({user})=>{
    return{
        user
    }
}

export default connect(mapStateToProps, {addname})(Login);