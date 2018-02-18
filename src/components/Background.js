import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Background = (props)=>{
    return(
        <LinearGradient colors={['#b8c4d2', '#fff', '#f5f6f8']} style={styles.container}>
            {props.children}
        </LinearGradient>
    )
};

export default Background;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding:20
    }
});