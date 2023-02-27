import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <View  style={styles.container}>
      <Text>App</Text>
     
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
