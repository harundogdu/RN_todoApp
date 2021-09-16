/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native';
import styles from './ItemBox.style';
const ItemBox = ({todo, setTodo, setText, text}) => {
  const handleClick = () => {
    if (text === '') {
      return Alert.alert('Hata!', 'Yapılacak Alanını Doldurunuz!');
    }
    setTodo([...todo, {text}]);
    setText('');
    return Alert.alert('Başarılı!', 'Yapılacak işiniz başarıyla eklendi!');
  };
  const handleChange = item => setText(item);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor="#eaeaea"
        onChangeText={handleChange}
        value={text}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={handleClick}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableHighlight>
    </View>
  );
};
//backgroundColor: '#FFA513',
export default ItemBox;
