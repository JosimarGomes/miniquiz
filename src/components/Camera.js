import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Animated, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {addphotouser} from '../actions/user-action';
import Camera from 'react-native-camera';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

class Cam extends Component{

    _savePhoto(path){
        this.props.addphotouser(path);
        this.props.closeCamera();
    }

    async _capture(){
        try{
            const data = await this.camera.capture();
            this._savePhoto(data.path);
        }catch(e){
            console.log('ERRO', e)
        }
    }

    render(){

        return(
            <View style={ styles.container }>
                <Camera
                    ref={(cam) =>this.camera = cam}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    captureQuality={'medium'}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    type={Camera.constants.Type.front}
                >                    
                    <View style={styles.containerButtons}>                           
                        <View style={ styles.footer }>
                            <TouchableOpacity activeOpacity={.6} onPress={()=>this._capture()}>
                                <View style={styles.btnCam}>
                                    <Icon name={'md-camera'} type='ionicon' color={'#56c941'} size={35}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={.6} onPress={()=>this.props.closeCamera()}>
                                <View style={styles.btnClose}>
                                    <Icon name={'md-arrow-back'} type='ionicon' color={'orange'} size={25}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Camera>
            </View>
        )
    }
}
const mapStateToProps = ({user})=>{
    return{
        user
    }
}
export default connect(mapStateToProps, {addphotouser})(Cam);

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    preview : {
        flex : 1
    },
    containerButtons : {
       flex : 1,
    },
    footer : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'center',
        paddingBottom : 15
    },
    btnCam : {
        width : 80,
        height : 80,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 40,
        backgroundColor : '#fff',
        padding : 5
    },
    btnClose : {
        marginTop:30,
        width:40,
        height: 40,
        borderRadius: 20,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
        padding : 5
    }
})