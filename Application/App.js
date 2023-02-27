import {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import React from 'react';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Write your goal"></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalContainer}>
        {courseGoals.map(goal => (
          <View style={styles.goalContainerText} key={goal}>
              <Text style={{color:'white'}}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '70%',
    marginRight: 10,
    padding: 10,
  },
  goalContainer: {
    flex: 5,
  },
  goalContainerText:{
    padding: 10,
    borderColor: 'hsl(0, 0%, 80%)',
    marginBottom: 10,
    borderRadius:8,
    backgroundColor:'#5e0acc',
  }
});

export default App;
