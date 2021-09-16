/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
export default function Header({todo}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.text}>{todo.length}</Text>
    </View>
  );
}
