import React, { Component } from 'react';
import {
  Alert,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking
} from 'react-native';
import BarcodeScreen from './BarcodeScreen';

export default class ExampleScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            touchControl: undefined
        };
    }

    componentDidMount() {
      Linking.openURL(this.props.state.openURL).catch(err => console.error("Couldn't load page", err))
    }

  render() {
    if (this.state.touchControl) {
        const ExampleScreen = this.state.touchControl;
        return <ExampleScreen />;
    }
    return (
        <View style  = {styles.container}>
        <TouchableOpacity onPress={(() => this.setState({touchControl : BarcodeScreen}))}>
            <Text style={styles.buttonText}>
              Back button
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      paddingTop: 60,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    buttonText: {
      color: 'blue',
      marginBottom: 20,
      fontSize: 20
    }
  });



