// Chat.js
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Message from './Message';
import MessageInput from './MessageInput';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! Tudo bem?', sender: 'me' },
    { id: 2, text: 'Bem e você?', sender: 'other' },
  ]);

  const sendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'me',
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <MessageInput sendMessage={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Chat;