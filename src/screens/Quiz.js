import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Background from '../components/Background';
import Button from '../components/Button';
import { Icon } from 'react-native-elements';
import "babel-polyfill";
import {updateXp} from '../actions/xp-action';
import Xp from '../components/Xp';
import EndQuiz from '../components/EndQuiz';
import ProgressBar from '../components/ProgressBar';

const { width, height } = Dimensions.get('window');

const returnToHomeAction = NavigationActions.reset({
    index: 0,
    key : null,
    actions: [
      NavigationActions.navigate({ routeName: 'Home'})
    ]
});

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewanswer: false,
            card: {},
            showEndQuiz: false,
            progress: 0,
            description: "",
            result: {}
        };
        this._questions = [];
        this._count = 0;
        this._correctquestions = 0;
        this._results = [

        ];
    }

    componentDidMount(){
        this.startQuiz();
    }

    setanswer(result=null){
        if(result) this.updateScore(result);
        this.handlerQuestions();
    }

    updateScore(result){
        if(result == 'correct')
            this._correctquestions++;

        this.props.updateXp(result);
    }

    handlerQuestions(){
        const question = this._questions.next();
        if(question.done === true)
            return this.endQuiz();
        
        
        this._count++;
        const {questions} = this.props;
        const total = questions.length; 

        const {progress, description} = this.calculatebarprogress(total, this._count); 

        this.setState({
            card: question.value,
            viewanswer: false,
            description,
            progress
        });
    }

    startQuiz(){
        const {questions} = this.props;
        this._questions = questions[Symbol.iterator]();
        this._count = 0;
        this._correctquestions = 0;
        this.handlerQuestions();
    }

    endQuiz(){
        const {questions} = this.props;
        const total  = questions.length;
        const score  = this.calculatescore(total, this._correctquestions);

        const result = this.getresult(score);
        this.setState({showEndQuiz: true, result})
    }    

    restartQuiz(){
        this.startQuiz();
        this.setState({showEndQuiz: false})
    }
    
    feedbackButtons(){
        return (
            <View style={styles.butonfeedback}>
                <TouchableOpacity style={[styles.correct, styles.buttonfeedback]} onPress={()=>this.setanswer('correct')}>
                    <Text style={styles.textbutton}>CORRETO</Text>
                    <Icon name={'md-checkmark-circle'} type='ionicon' color={'#fff'} size={25}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.incorrect, styles.buttonfeedback]} onPress={()=>this.setanswer('incorrect')}>
                    <Text style={styles.textbutton}>INCORRETO</Text>
                    <Icon name={'md-close-circle'} type='ionicon' color={'#fff'} size={25}/>
                </TouchableOpacity>
            </View>
        )
    }

    viewanswer(){
        this.setState({viewanswer:true})
    }

    //colocar num helper
    calculatebarprogress(total, count){
        return {
            progress: (count / total),
            description: `${count} de ${total}`
        }
    }

    //colocar num helper
    calculatescore(total, score){
        if(score == 0) return score;
        const result = (score / total) * 100;
        
        return result.toFixed(2);
    }
//colocar num helper
    getresult(value){
        if(value < 20)
            return {title: "Que vergonha...", color: "orange", icon: "md-sad", value};

        if(value < 50)
            return {title: "Precisa melhorar", color: "orange", icon: "md-thumbs-down", value};

        if(value >= 50 && value <= 70)
            return {title: "Nada mal.", color: "#56c941", icon: "md-thumbs-up", value};

        if(value > 70 && value <= 95)
            return {title: "Parabéns!", color: "#56c941", icon: "md-trophy", value};

        if(value > 95)
            return {title: "Mestre Jedi!!", color: "#56c941", icon: "md-planet", value};
    }
   
    render() {
        const {viewanswer, card, progress, description, result} = this.state;
        const {question, answer} = card;
        return (
                <Background>
                    <Modal
                        onRequestClose={() => {} }
                        animationType={"slide"}
                        visible={this.state.showEndQuiz}
                    >
                        <EndQuiz 
                            returnToHome={()=>this.props.navigation.dispatch(returnToHomeAction)}
                            restartQuiz={()=>this.restartQuiz()}
                            {...result}
                        />
                    </Modal>
                    <View style={styles.progressBar}>
                        <ProgressBar progress={progress} style={{width:width * 0.8}} description={description}/>
                    </View>
                    <View style={styles.sectiontop}>
                        <View style={{marginVertical:20}}>                            
                            <Text style={styles.pergunta}>{question}</Text>
                            {
                                viewanswer&&
                                <Text style={styles.resposta}>{`Resposta: ${answer}`}</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.sectionbottom}>
                    {
                        viewanswer ?
                        this.feedbackButtons()
                        :
                        <Button 
                            label={'VER RESPOSTA'}
                            background={'#43C047'} color={'#fff'}
                            onPress={ ()=>this.viewanswer()}
                        />
                    }
                    </View>
                </Background>
        );
    }
}

const mapStateToProps = ({questions})=>{
    return{
        questions
    }
}

export default connect(mapStateToProps, {updateXp})(Card);

const styles = StyleSheet.create({
    sectiontop:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    sectionbottom:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    pergunta: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    resposta: {
        fontSize: 20
    },
    correct: {        
        backgroundColor: '#43C047'
    },
    buttonfeedback: {
        flexDirection: 'row',
        padding: 10,
        width: width * 0.4,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    incorrect: {
        backgroundColor: 'orange'
    },
    butonfeedback: {
        flex:2,
        justifyContent: 'space-around'
    },
    textbutton: {
        color: '#fff',
        textAlign: 'center',
        marginRight: 8
    }
});