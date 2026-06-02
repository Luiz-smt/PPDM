import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Criar Conta</Text>

      <TextInput style={styles.input} placeholder="Nome Completo" placeholderTextColor="#888" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#888" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry value={senha} onChangeText={setSenha} />
      <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#888" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.botaoTexto}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkTexto}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3EF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 24,
    color: "#5C5C5C", 
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    color: "#4A4A4A",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D8D2C8", 
  },

  botao: {
    width: "100%",
    backgroundColor: "#A8C3A0", 
    padding: 15,
    borderRadius: 8,
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
    color: "#8AA899", 
    fontSize: 14,
  },
});