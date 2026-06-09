import { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Logo from '../../assets/image.jpg';

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <View style={styles.container}>
            {/* Substituí o estilo inline pela classe logo */}
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.tituloPrincipal}>Login</Text>
            <TextInput 
                style={styles.input}
                placeholder = 'Insira seu e-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.input}
                placeholder = '****'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TouchableOpacity style={styles.botaoEntrar} onPress={() => navigation.replace('Principal')}> 
                <Text style={styles.textoBotao}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate('Registro')}> 
                <Text style={styles.textoCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Preto profundo clássico do Spotify
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },
  logo: {
    width: 160, // Ajustado para um tamanho mais elegante na tela
    height: 160,
    alignSelf: 'center',
    marginBottom: 24,
  },
  tituloPrincipal: {
    fontSize: 32, // Um pouco maior para impactar como no app oficial
    fontWeight: "bold",
    color: "#ffffff", 
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: -0.5, // Letras mais juntas, estilo tipografia do Spotify
  },
  subtitulo: {
    fontSize: 16,
    color: "#a7a7a7", // Tom exato de cinza que o Spotify usa para textos secundários
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#242424", // Cinza oficial dos inputs do Spotify
    borderRadius: 4, // Spotify real usa cantos quase retos (4px) nos inputs, não muito arredondados
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#ffffff", 
    marginBottom: 16,
  },
  botaoEntrar: {
    backgroundColor: "#1ED760", // Verde Spotify oficial atualizado (mais vivo que o antigo #1DB954)
    borderRadius: 25, // Formato pílula inconfundível
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  textoBotao: {
    color: "#000000", 
    fontSize: 16,
    fontWeight: "700", // Negrito bem marcado
  },
  botaoCadastrar: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#727272", // Borda cinza para o botão secundário, estilo Spotify
    borderRadius: 25, // Também em formato de pílula
    marginTop: 8,
  },
  textoCadastrar: {
    color: "#ffffff", 
    fontSize: 16,
    fontWeight: "700",
  },
});