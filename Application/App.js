
import React,{useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import GoalItem from '../components/GoalItem';



const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const inputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your goal"
          onChangeText={inputHandler}></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
           return  <GoalItem   />
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#8a2be2',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  goalContainer: {
    flex: 5,
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 1,
    width: '70%',
    marginRight: 10,
    padding: 10,
  },
  goalContainerText: {
    padding: 10,
    borderColor: 'hsl(0, 0%, 80%)',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default App;
