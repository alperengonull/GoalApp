import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const GoalItem = () => {
    return (
        <Text style={styles.goalContainerText}>
          {itemData.item}
        </Text>
      );
}


const styles = StyleSheet.create({
    goalContainerText: {
        padding: 10,
        borderColor: 'hsl(0, 0%, 80%)',
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        color: 'black',
      },
})


export default GoalItem;