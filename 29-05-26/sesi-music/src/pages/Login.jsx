import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    navigation.replace('HomeTabs');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <TextInput style={styles.input} placeholder="E-mail ou usuário" placeholderTextColor="#888" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry value={senha} onChangeText={setSenha} />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkTexto}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3EF", // bege claro
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 250,
    height: 150,
    marginBottom: 15,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 28,
    color: "#5C5C5C", // cinza suave
    fontWeight: "bold",
    marginBottom: 30,
    letterSpacing: 2,
  },

  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    color: "#4A4A4A",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#D8D2C8",
  },

  botao: {
    width: "100%",
    backgroundColor: "#A8C3A0", // verde sálvia pastel
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  linkTexto: {
    color: "#8AA899", // verde suave complementar
    fontSize: 14,
  },
});