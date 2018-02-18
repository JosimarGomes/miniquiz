import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, Animated, TouchableOpacity, Easing, Alert, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import {selectdeck, deletedeck} from '../actions/deck-action';
import PushNotification from 'react-native-push-notification';
import AppNotifications from '../helpers/pushnotifications';
import Background from '../components/Background';
import Button from '../components/Button';
import Deck from '../components/Deck';
import HomeHoc from '../hoc/Home-hoc';
import Avatar from '../components/Avatar';
import Camera from '../components/Camera';


const { width, height } = Dimensions.get('window');

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            animationbutton: "",
            selecteddeck: null,
            showCamera: false
        };
        this.animatedFlex = new Animated.Value(0);
    }

    componentDidMount() {      
        AppNotifications.start();        
    }

    componentWillUnmount(){
        AppNotifications.finish();
    }

    newquiz(){
        this.props.navigation.navigate('NewDeck');
    }

    selectDeck(deck){
        const {selecteddeck} = this.state;
        const {id, title} = deck;

        if(selecteddeck === id)
            return this.setState({selecteddeck:null});
        
        if(selecteddeck !== null)
            return this.setState({selecteddeck:id});
        
        this.props.selectdeck(id);
        this.props.navigation.navigate('DeckDetail',{title});
    }

    _deleteDeck(deck){
        Alert.alert(
            'Eita, vai excluir',
            'O deck será excluído. Deseja continuar?',
            [
              {text: 'Cancelar', onPress: () => false},
              {text: 'Excuir', onPress: () => this._confirmDelete()},
            ],
            // { cancelable: false }
        )
    }

    _confirmDelete(){
        this.props.deletedeck(this.state.selecteddeck);
        this.setState({selecteddeck:null});
    }

    selectOptionsDeck(selecteddeck){
        this.setState({selecteddeck});
        this._animateSelect();
    }

    _animateSelect(){
        this.animatedFlex.setValue(0);
        Animated.parallel([
            Animated.timing(this.animatedFlex,{
                toValue : 1,
                duration : 600,
                // easing:Easing.bounce
                easing: Easing.elastic(4)
            }).start()
        ]);
    }

    renderdecks(item, index){
        const {deckanimation, selecteddeck} = this.state;
        return  <Deck {...item} 
                    onPress={()=>this.selectDeck(item)}
                    animation={deckanimation}
                    onLongPress={()=>this.selectOptionsDeck(item.id)}
                    selected={selecteddeck === item.id}
                />        
    }    

    openCamera(){
        this.setState({showCamera: true});
    }

    closeCamera(){
        this.setState({showCamera:false})
    }

    render() {

        const animatedFlex = this.animatedFlex.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const {xp, user, userphoto} = this.props;
        const name = user.name || "Will Smith";

        return (
                <Background>
                    <Modal
                        animationType={"slide"}
                        transparent={true}
                        visible={this.state.showCamera}
                        onRequestClose={()=>this.closeCamera()}
                    >
                        <Camera closeCamera={()=>this.closeCamera()} />
                    </Modal>
                    {/* <View style={styles.header}> 
                        <Icon name={'md-person'} type='ionicon' color={'orange'} size={25}/>                   
                    </View> */}
                    <Avatar name={name} value={xp} userphoto={userphoto} onPressPhoto={()=>this.openCamera()} />
                    <View style={styles.decklist}>    
                        <FlatList
                            data={ this.props.decks }  
                            extraData={ this.state.selecteddeck }
                            keyExtractor={ (item, index) => index }
                            renderItem={ ({item, index}) => this.renderdecks(item,index)}                        
                            horizontal={ false }
                            numColumns={ 3 }                       
                            onEndReachedThreshold={ 0.5 }                       
                            showsVerticalScrollIndicator={false}
                        />                               
                    </View>                     
                    { 
                        this.state.selecteddeck ?
                        <Animated.View style={[styles.footerEdit,{flex: animatedFlex}]}>
                            <TouchableOpacity onPress={()=>this._deleteDeck()} style={{flexDirection:'row'}}>
                                <Text style={{color:'#fff', fontWeight:'bold'}}>Excluir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({selecteddeck:null})} style={{flexDirection:'row'}}>
                                <Text style={{color:'#fff', fontWeight:'bold'}}>Cancelar</Text>
                            </TouchableOpacity>
                        </Animated.View>   
                        :
                        <Button 
                            label={'NOVO QUIZ'}
                            background={'orange'} color={'#fff'}
                            onPress={ ()=>this.newquiz()}
                        />      
                    }
                </Background>
        );
    }
}


const mapStateToProps = ({decks, xp, user, userphoto})=>{
    return{
        decks, xp, user, userphoto
    }
}

export default connect(mapStateToProps, { selectdeck, deletedeck })(HomeHoc(Home));

const styles = StyleSheet.create({
    
    header: {
        flex:0.5,
        padding: 15
    },   
       
    decklist:{
        flex: 5,
        marginTop: 30,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: width,
    },
    footerEdit: {
        flexDirection:'row',
        backgroundColor:'red',
        width: width,
        height:20,
        alignItems:'center',
        justifyContent:'space-around'
    }
});