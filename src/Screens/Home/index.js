import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import { SearchBar } from 'react-native-screens';
import React,{useState,useEffect} from 'react';

export default function App() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
          {/* Conteúdo da sua aplicação vai aqui */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Botão 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Botão 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Botão 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '92vh',
    backgroundColor: '#c3e3fd',
    alignItems: 'center',
    justifyContent: 'space-between', // Para manter espaço entre o conteúdo e os botões
  },
  content: {
    flex: 1, // Isso faz com que o conteúdo ocupe o espaço restante entre o cabeçalho e os botões
    width: '100%', // Certifique-se de que o conteúdo tenha 100% de largura
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '30%', // Ajuste a largura dos botões conforme necessário
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});
