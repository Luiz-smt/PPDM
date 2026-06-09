import { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Logo from '../../assets/image.jpg';

export default function Registro({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return(
        <View style={styles.container}>
            {/* Substituído o inline style pelo style criado para centralizar a logo */}
            <Image source={Logo} style={styles.logo}/>
            
            <Text style={styles.tituloPrincipal}>Cadastre-se</Text>
            
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
            <TextInput 
                style={styles.input}
                placeholder = '****'
                value={confSenha}
                onChangeText={setConfSenha}
                secureTextEntry
            />
            <TouchableOpacity style={styles.botaoEntrar} onPress={() => navigation.replace('Login')}> 
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Um tom de roxo/azul extremamente escuro que se funde com o preto,
    // muito usado nas capas de playlists do Spotify
    backgroundColor: "#0d0c1d", 
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 24,
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  subtitulo: {
    fontSize: 15,
    // Um cinza com leve toque azulado para combinar com o novo fundo
    color: "#9aa0a6", 
    textAlign: "center",
    marginBottom: 36,
  },
  input: {
    // Um fundo semi-transparente para o input absorver a cor do fundo da tela
    backgroundColor: "rgba(255, 255, 255, 0.07)", 
    borderRadius: 8, // Cantos levemente suavizados
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 16,
  },
  botaoEntrar: {
    backgroundColor: "#1DB954", // O clássico verde Spotify
    borderRadius: 25, // Formato pílula tradicional
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 16,
  },
  textoBotao: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase", // Textos em caixa alta nos botões principais
    letterSpacing: 1, // Espaçamento moderno entre as letras
  },
  botaoCadastrar: {
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 8,
  },
  textoCadastrar: {
    color: "#1DB954", // O link secundário agora também usa o verde para dar destaque sutil
    fontSize: 15,
    fontWeight: "600",
  },
});