import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View, Button } from 'react-native';

export function Home2Screen({navigation}){
   return (
     <View style={styles.container} >
       <Text>Home②</Text>
       <Ionicons name='ios-globe' size={100} color='#333399' />
       <Button title = "詳細へ" onPress={() => navigation.navigate('Detail2')}/>
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