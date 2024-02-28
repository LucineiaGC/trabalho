// MessageInput.js
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const MessageInput = ({ sendMessage }) => {
  const [text, setText] = useState('');

  const handleSendMessage = () => {
    if (text.trim() !== '') {
      sendMessage(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Digite sua mensagem..."
      />
      <Button title="Enviar" onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
  },
});

export default MessageInput;