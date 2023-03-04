import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
    return (
       <Pressable  android_ripple={{color:'red'}} onPress={props.onDeleteItem.bind(this, props.id)} >
         <Text style={styles.goalContainerText}>
          {props.text}
        </Text>
       </Pressable>
      );
}


const styles = StyleSheet.create({
    goalContainerText: {
        padding: 10,
        borderColor: 'hsl(0, 0%, 80%)',
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: 'purple',
        color: 'white',
      },
})


export default GoalItem;