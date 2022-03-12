import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal
} from 'react-native';

const GoalInput = ({ addGoalHandler, showModal, changeModalState }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleOnTextChage = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const enteredGoalHandler = () => {
    addGoalHandler(enteredGoal)
    setEnteredGoal('');
  };

  const enteredGoalCancelHandler = () => {
      changeModalState(false);
      setEnteredGoal('')
  }

  return (
    <Modal
      visible={showModal}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course goal'
          style={styles.input}
          value={enteredGoal}
          onChangeText={handleOnTextChage}
        />
        <View style={styles.actionButtonsWrapper}>
          <Button title='ADD' onPress={() => enteredGoalCancelHandler(enteredGoal)} />
          <Button 
            title='Cancel' 
            color='red'
            onPress={enteredGoalCancelHandler} 
           />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  actionButtonsWrapper: {
    flexDirection: 'row',
  }
});

export default GoalInput;