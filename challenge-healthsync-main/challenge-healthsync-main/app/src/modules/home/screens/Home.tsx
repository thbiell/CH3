import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
import Orders from '../../orders';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { width } = Dimensions.get('window');
  const topoHeight = (578 / 768) * width;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/topo.png')}
        style={[styles.topo, { height: topoHeight }]}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Como o Health Sync ajuda a salvar exames:</Text>
        <Text style={styles.topic}>
          - Armazenamento seguro: O Health Sync oferece armazenamento seguro para seus exames
          médicos, garantindo que eles estejam sempre acessíveis quando você precisar.
        </Text>
        <Text style={styles.topic}>
          - Compartilhamento fácil: Você pode compartilhar seus exames com médicos e profissionais
          de saúde de forma rápida e segura, facilitando o diagnóstico e o tratamento.
        </Text>
        <Text style={styles.topic}>
          - Lembretes de exames: O Health Sync envia lembretes para seus próximos exames, ajudando a
          manter sua saúde em dia.
        </Text>
        <Button title="Agendar Exames" onPress={() => navigation.navigate(Orders)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topo: {
    width: '100%',
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  topic: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Home;
