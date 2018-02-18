import React, { Component } from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';

export default class ProgressBar extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            progress: new Animated.Value(0),
            updateProgress : 0
        }

        style = styles;
        easing = Easing.inOut(Easing.ease),
        easingDuration = 500
    }
 
  componentWillReceiveProps(nextProps) {
    const { progress } = nextProps;
    if(progress&&progress!=this.props.progress)
    this.update(nextProps.progress)
  } 

  render() {   
    const fillWidth = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0 * this.props.style.width, 1 * this.props.style.width],
    });

    return (
        <View style={styles.container}>
            <View style={[styles.background, this.props.backgroundStyle, this.props.style]}>
                <Animated.View style={[styles.fill, this.props.fillStyle, { width: fillWidth }]}/>
            </View>
            <Text>{this.props.description}</Text>
        </View>
    );
  }

  update(updateProgress) {
      Animated.timing(this.state.progress, {
        easing: this.easing,
        duration: this.easingDuration,
        toValue: updateProgress
      }).start();
  }
};

const styles = StyleSheet.create({
    container: {
        height:30
    },
    background: {
        backgroundColor: '#bbbbbb',
        height: 5,
        overflow: 'hidden'
    },
    fill: {
        backgroundColor: '#43C047',
        height: 5
    }
});
