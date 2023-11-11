import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import { logout } from '../../../shared/functions/connection/auth';
import estilos from '../styles/profile.style';

export default function Principal() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <ScrollView>
      <View style={estilos.container}>
        <View style={estilos.fundo} />
        <View style={estilos.imagemArea}>
          <Image source={{}} style={estilos.imagem} />
        </View>
        <Text style={estilos.textoNome}>Usuario</Text>
        <Text style={estilos.textoEmail}>Email</Text>
        <View style={estilos.seguidoresArea}>
          <View style={estilos.seguidores}>
            <Text style={estilos.seguidoresNumero}>??</Text>
            <Text style={estilos.seguidoresTexto}>Seguidores</Text>
          </View>
          <View style={estilos.seguidores}>
            <Text style={estilos.seguidoresNumero}>??</Text>
            <Text style={estilos.seguidoresTexto}>Seguindo</Text>
          </View>
        </View>
      </View>
      <Button title="SAIR" onPress={() => logout(navigation)} />
    </ScrollView>
  );
}
