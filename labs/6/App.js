import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from "./components/Quiz"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(210,210,210)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'rgb(10,50,150)',
  }
});


class App extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}><h1>Quiz</h1></Text>
        <Quiz />
      </View>
    )
  }
}

export default App;