import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function DetailScreen(){
   return (
     <View style={styles.container} >
       <Text>これは、キューブのアイコンです。</Text>
       <Ionicons name='ios-cube' size={300} color='#333399' />
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