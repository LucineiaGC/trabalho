// Message.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Message = ({ message }) => {
  const { text, sender } = message;
  return (
    <View style={[styles.messageContainer, sender === 'me' ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA',
  },
  messageText: {
    fontSize: 16,
  },
});

export default Message;