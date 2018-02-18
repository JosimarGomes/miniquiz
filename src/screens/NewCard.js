import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {addcard} from '../actions/card-action';
import { connect } from 'react-redux';
import Background from '../components/Background';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

class NewCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            question: "",
            answer: ""
        }
    }

    addcard(){
        const {question, answer} = this.state;
        if(!question || !answer) {
            return Alert.alert(
                ':(',
                'Digite a pergunta e a resposta.',
                [
                  {text: 'Cancelar', onPress: () => false},
                ],
                // { cancelable: false }
            )
        }

        const newcard = {question, answer};
        const {deck} = this.props;
        const {title} = deck[0];
        const returnAction = NavigationActions.reset({
            index: 1,
            key : null,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'}),
              NavigationActions.navigate({ routeName: 'DeckDetail', params: {title}})
            ]
        });

        this.props.addcard(newcard);
        this.props.navigation.dispatch(returnAction);
    }

    render() {

        const {question, answer} = this.state;

        return (
                <Background>
                    <View style={styles.sectiontop}>
                        <Text style={styles.text}>Nova Pergunta</Text>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={(question) => this.setState({question})}
                            value={question}
                            placeholder={'Digite a pergunta aqui'}
                            placeholderTextColor={'#ccc'}
                        />
                        <Text style={styles.text}>Resposta</Text>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={(answer) => this.setState({answer})}
                            value={answer}
                            placeholder={'Digite a resposta aqui'}
                            placeholderTextColor={'#ccc'}
                        />
                    </View>
                    <View style={styles.sectionbottom}>
                        <Button 
                            label={'SALVAR'}
                            background={'#43C047'} color={'#fff'}
                            onPress={ ()=>this.addcard()}
                        />
                    </View>
                </Background>
        );
    }
}

const mapStateToProps = ({deck})=>{
    return{
        deck
    }
}

export default connect(mapStateToProps, {addcard})(NewCard);

const styles = StyleSheet.create({
    sectiontop:{
        flex: 2,
        justifyContent: 'center'
    },
    sectionbottom:{
        flex: 1
    },
    text: {
        fontSize: 25
    },
    textinput: {
        height: 40,
        width: width * 0.9
    }
});