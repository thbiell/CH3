import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

const Chat = () => {
  const { width } = Dimensions.get('window');
  const topoHeight = (578 / 768) * width;
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const qaPairs = [
    { question: "boa tarde", answer: "Chatbot: Boa tarde! Meu nome é Assistente Virtual. Como posso ajudar você hoje?" },
    { question: "agendar uma consulta", answer: "Chatbot: Você pode agendar uma consulta indo para a seção 'Agendar Consulta' em nosso aplicativo." },
    { question: "hospital mais próximo", answer: "Chatbot: Se você está no centro de São Paulo, o hospital mais próximo seria o Hospital Israelita Albert Einstein, localizado na Av. Albert Einstein, 627/701 - Morumbi, São Paulo - SP." },
    { question: "obrigado chatbot", answer: "Chatbot: De nada! Fico feliz em poder ajudar. Se tiver mais alguma pergunta ou precisar de assistência no futuro, não hesite em entrar em contato. Boa sorte com a sua consulta!" },
    {question: "sobre nós", answer: "Health sync foi um projeto do grupo dev'endo que usa um chatbot para ajudar usuários, nesse projeto ajudar em um app de saúde,"}
    //pra adicionar outra pergunta fixa, só seguir a formula acima
  ];

  const handleUserMessage = () => {
    const question = userMessage.trim();

    const matchedAnswer = qaPairs.find((qaPair) => qaPair.question.toLowerCase() === question.toLowerCase());

    if (matchedAnswer) {
      const newMessages = [...chatMessages, { text: userMessage, user: 1 }, { text: matchedAnswer.answer, user: 2 }];
      setChatMessages(newMessages);
      setUserMessage('');
    } else {
      const newMessages = [...chatMessages, { text: userMessage, user: 1 }, { text: "Chatbot: Desculpe, não entendi. Por favor, faça outra pergunta.", user: 2 }];
      setChatMessages(newMessages);
      setUserMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/topo.png')}
        style={[styles.topo, { height: topoHeight }]}
      />
      <ScrollView contentContainerStyle={styles.chatMessages}>
        {chatMessages.map((message, index) => (
          <View
            key={index}
            style={message.user === 1 ? styles.userMessageContainer : styles.chatMessageContainer}
          >
            <Text style={message.user === 1 ? styles.userMessageText : styles.chatMessageText}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.chatInput}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma pergunta..."
          value={userMessage}
          onChangeText={(text) => setUserMessage(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleUserMessage}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topo: {
    width: '100%',
    marginBottom: 20,
  },
  chatMessages: {
    padding: 10,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 10,
    elevation: 3, // Adicione sombreamento
  },
  chatMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 20,
    elevation: 3, // Adicione sombreamento
  },
  userMessageText: {
    fontSize: 18,
    color: '#0077cc', // Azul
  },
  chatMessageText: {
    fontSize: 18,
    color: 'black',
  },
  chatInput: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0077cc', // Azul
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Chat;
