import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View, Button } from 'react-native';

export function HomeScreen({navigation}){
   return (
     <View style={styles.container} >
       <Text>Home①</Text>
       <Ionicons name='ios-cube' size={100} color='#333399' />
       <Button title = "詳細へ" onPress={() => navigation.navigate('Detail')}/>
     </View>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});