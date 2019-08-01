import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions} from 'react-native';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderWidth: 10,
    borderColor: "#89AAFF",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 45,
    color: "#89AAFF"
  },
  timerText: {
    fontSize: 90,
    color:'#FFF',
    marginBottom:screen.height / 8,
  }
});

const formatNumber = (number) => `0${number}`.slice(-2)

const getRemaining = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return {minutes: formatNumber(minutes), seconds: formatNumber(seconds)}
}

export default class App extends React.Component {
  state = {
    remainingSeconds: 90,
  };

  render() {
    const {minutes, seconds} = getRemaining(this.state.remainingSeconds)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
  
        <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
  
        <TouchableOpacity
          onPress={() => alert("hello, world!")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }

}
