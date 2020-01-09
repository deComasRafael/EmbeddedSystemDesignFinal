import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

import {
  CameraKitCamera,
  CameraKitGallery
} from 'react-native-camera-kit';

import CameraScreen from './src/CameraScreen';
import GalleryScreen from './src/GalleryScreen';
import BarcodeScreen from './src/BarcodeScreen';

export default class touchControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      touchControl: undefined
    };
  }

  render() {
    if (this.state.touchControl) {
      const touchControl = this.state.touchControl;
      return <touchControl />;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Welcome to Touch Control by Jon Paricien and Rafael Decomas
          </Text>
          <Text style={{ fontSize: 40 }}>📷</Text>
        </View>

        <View style={styles.container}>
        
          <TouchableOpacity onPress={() => this.setState({ touchControl: BarcodeScreen })}>
            <Text style={styles.buttonText}>
              Barcode scanner Screen
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ touchControl: CameraScreen })}>
            <Text style={styles.buttonText}>
              Camera Screen
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ touchControl: GalleryScreen })}>
            <Text style={styles.buttonText}>
              Gallery Screen
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  }

  async onCheckCameraAuthoPressed() {
    const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
    if (success) {
      AlertIOS.alert('You have permission')
    }
    else {
      AlertIOS.alert('No permission')
    }
  }

  async onCheckGalleryAuthoPressed() {
    const success = await CameraKitGallery.checkDevicePhotosAuthorizationStatus();
    if (success) {
      AlertIOS.alert('You have permission')
    }
    else {
      AlertIOS.alert('No permission')
    }
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
  headerContainer: {
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  headerText: {
    color: 'black',
    fontSize: 24
  },
  buttonText: {
    color: 'blue',
    marginBottom: 20,
    fontSize: 20
  }
});