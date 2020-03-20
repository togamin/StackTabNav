import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Detail2Screen(){
   return (
     <View style={styles.container} >
       <Text>これは、globeのアイコンです。</Text>
       <Ionicons name='ios-globe' size={300} color='#333399' />
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