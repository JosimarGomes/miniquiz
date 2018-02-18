import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {adddeck} from '../actions/deck-action';
import { connect } from 'react-redux';
import Background from '../components/Background';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

class NewDeck extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Sem título"
        }
    } 
    
    adddeck(){
        const {title} = this.state;
        const newdeck = { title };
        const returnAction = NavigationActions.reset({
            index: 1,
            key : null,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'}),
              NavigationActions.navigate({ routeName: 'DeckDetail', params: {title}})
            ]
        });

        this.props.adddeck(newdeck);
        this.props.navigation.dispatch(returnAction);        
    }

    render() {
        return (
                <Background>
                    <View style={styles.sectiontop}>
                        <Text style={styles.title}>Novo Quiz</Text>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={(title) => this.setState({title})}
                            value={this.state.deckname}
                            placeholder={'Qual é o nome do quiz?'}
                            placeholderTextColor={'#ccc'}
                        />
                    </View>
                    <View style={styles.sectionbottom}>
                        <Button 
                            label={'SALVAR'}
                            background={'#43C047'} color={'#fff'}
                            onPress={ ()=>this.adddeck()}
                        />
                    </View>
                </Background>
        );
    }
}

const mapStateToProps = ({decks})=>{
    return{
        decks
    }
}

export default connect(mapStateToProps, { adddeck })(NewDeck);

const styles = StyleSheet.create({
    sectiontop:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionbottom:{
        flex: 1
    },
    title: {
        fontSize: 35
    },
    textinput: {
        height: 40,
        width: width * 0.9
    }
});