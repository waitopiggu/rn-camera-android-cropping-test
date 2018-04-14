import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const res = [
  { width: 240, height: 240},
  { width: 240, height: 180},
  { width: 240, height: 140},
  { width: 180, height: 240},
  { width: 140, height: 240}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      width: res[0].width,
      height: res[0].height
    };
  }

  changeRes = () => {
    const i = (this.state.i + 1) % res.length;
    const { width, height } = res[i];
    this.setState({ i, width, height });
  }
  
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <RNCamera
          ref={ref => this.camera = ref}
          type={RNCamera.Constants.Type.back}
          style = {{
            width: this.state.width,
            height: this.state.height,
          }}  
        />
        <TouchableOpacity
          onPress={this.changeRes}
          style={{
            flex: 0,
            backgroundColor: '#ccc',
            borderRadius: 5,
            padding: 15,
            paddingHorizontal: 20,
            alignSelf: 'center',
            margin: 20
          }}         
        >
          <Text>Change Res</Text>
        </TouchableOpacity>
      </View>
    ); 
  }
}

export default App;