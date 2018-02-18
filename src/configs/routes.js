import React from 'react';
import {Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import DeckDetail from '../screens/DeckDetail';
import NewCard from '../screens/NewCard';
import NewDeck from '../screens/NewDeck';
import EndQuiz from '../components/EndQuiz';


const Routes = StackNavigator({
    Home : {
        screen : Home,
        navigationOptions: ({navigation}) => ({
            header : null
          }),
    },
    NewDeck : {
            screen : NewDeck,
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Novo Quiz',
              }),
        },
    DeckDetail : {
        screen : DeckDetail,
        navigationOptions: ({navigation}) => ({
            headerTitle: navigation.state.params.title,
          }),
    },
    NewCard : {
        screen : NewCard,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Nova pergunta',
          }),
    },
    Quiz : {
        screen : Quiz,
        navigationOptions: ({navigation}) => ({
            headerTitle: navigation.state.params.title,
          }),
    }
},{
    // navigationOptions:{
    //     // header : null,
    //     headerLeft: <Text style={{margin:20}}>(=Compomentvoltar</Text>
    // }
});

export default Routes;