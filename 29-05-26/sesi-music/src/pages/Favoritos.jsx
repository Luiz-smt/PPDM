import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { musicasMock } from '../dados/musicas';
import IonIcons from '@expo/vector-icons/Ionicons';

export default function Favoritos({ navigation }) {
  const musicasFavoritas = musicasMock.filter(m => m.id === '1' || m.id === '3' || m.id === '5');

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.cardMusica} 
      onPress={() => navigation.navigate('TocandoMusica', { musica: item })}
    >

      <Image source={{ uri: item.capa }} style={styles.capaMusica} />
      <View style={styles.infoMusica}>
        <Text style={styles.tituloMusica}>{item.titulo}</Text>
        <Text style={styles.artistaMusica}>{item.artista}</Text>
      </View>
      <IonIcons name="heart" size={24} color="red" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Favoritos</Text>
      <FlatList
        data={musicasFavoritas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3EF", // bege claro
    paddingTop: 20,
    paddingHorizontal: 15,
  },

  titulo: {
    fontSize: 24,
    color: "#5C5C5C", // cinza suave
    fontWeight: "bold",
    marginBottom: 20,
  },

  lista: {
    paddingBottom: 20,
  },

  cardMusica: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D8D2C8",
  },

  capaMusica: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },

  infoMusica: {
    flex: 1,
    marginLeft: 15,
  },

  tituloMusica: {
    color: "#4A4A4A",
    fontSize: 16,
    fontWeight: "bold",
  },

  artistaMusica: {
    color: "#8A8A8A",
    fontSize: 14,
  },

  coracao: {
    fontSize: 18,
    marginRight: 5,
    color: "#A8C3A0", // verde sálvia pastel
  },
});