import {View, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const inputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    };
     

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write your goal"
        onChangeText={inputHandler}
        value={enteredGoalText}
        />
      <Button title="Add Goal" onPress={addGoalHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
    borderColor: 'hsl(0, 0%, 80%)',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },

});

export default GoalInput;
