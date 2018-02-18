import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {iniciarquiz} from '../actions/quiz-action';
import Background from '../components/Background';
import Button from '../components/Button';

class DeckDetail extends Component {
    constructor(props){
        super(props);
    }  
    
    addcards(){
        this.props.navigation.navigate('NewCard');
    }

    _iniciarquiz(){
        const {deck} = this.props;
        this.props.iniciarquiz(deck.questions);
        const params = {title: deck.title};
        this.props.navigation.navigate('Quiz', params);        
    }

    buttonaddcards(){
        return(
            <TouchableOpacity style={styles.btnadd} onPress={()=>this.addcards()}>
                <Text style={{color:'#fff', fontSize:35}}>+</Text>
            </TouchableOpacity>
        )
    }

    headercomponent(){
        const {deck} = this.props;
        const {title, questions} = deck;
        const label = questions.length == 1 ? 'pergunta' : 'perguntas';
        return(
            <View style={{marginVertical:20}}>
                <Text style={styles.subtitulo}>{`${questions.length} ${label}`}</Text>
            </View>
        )
    }

    renderquestoes(){
        return <Image source={require('../img/interrogacao.png')} style={styles.imageicon} resizeMode={'contain'}/>
    }

    render() {
        
        const {deck} = this.props;
        const {questions} = deck;

        return (
                <Background>
                    <View style={styles.sectiontop}>                        
                        <FlatList
                            ListHeaderComponent={this.headercomponent()}
                            data={ questions }  
                            keyExtractor={ (item, index) => index }
                            renderItem={ ({item, index}) => this.renderquestoes(item,index)}                        
                            horizontal={ false }
                            numColumns={ 7 }                       
                            onEndReachedThreshold={ 0.5 }                       
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={this.buttonaddcards()}
                        />
                    </View>
                    {
                        questions.length > 0 &&
                        <View style={styles.sectionbottom}>
                            <Button 
                                label={'INICIAR'}
                                background={'#43C047'} color={'#fff'}
                                onPress={ ()=>this._iniciarquiz()}
                            />
                        </View>
                    }                    
                </Background>
        );
    }
}

const mapStateToProps = ({deck})=>{
    return{
        deck: deck[0]
    }
}

export default connect(mapStateToProps, {iniciarquiz})(DeckDetail);

const styles = StyleSheet.create({
    sectiontop:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionbottom:{
        flex: 0.5,
        justifyContent: 'flex-end'
    },
    subtitulo:{
        textAlign: 'center'
    },
    imageicon:{
        margin:10,
        width:25,
        height:25
    },
    btnadd: {
        backgroundColor: '#43C047',
        width:50,
        height:50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    }
});