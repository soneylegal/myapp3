import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CadastroScreen({ onQuemSomos, onCadastroCompleto }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [escola, setEscola] = useState("");

  const handleEnviar = () => {
    if (!nome || !email || !escola) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    alert(
      `Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}\nEscola: ${escola}`
    );
    // Navegar para a landing page após o cadastro
    if (onCadastroCompleto) {
      onCadastroCompleto(nome);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Parte esquerda com elementos visuais */}
      <View style={styles.leftSection}>
        <Text style={styles.welcomeText}>Seja bem vindo(a) à</Text>
        <Text style={styles.platformText}>PLATAFORMA</Text>
        <Text style={styles.brandText}>
          <Text style={styles.alfa}>ALFA</Text>
          <Text style={styles.bet}>BET</Text>
          <Text style={styles.iz}>IZ</Text>
          <Text style={styles.a}>A</Text>
          <Text style={styles.plus}>+</Text>
        </Text>

        {/* Container dos elementos ilustrativos */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require("./assets/livros.png")}
            style={styles.booksImage}
            resizeMode="contain"
          />
          <Image
            source={require("./assets/robo.png")}
            style={styles.robotImage}
            resizeMode="contain"
          />
          {/* Você pode adicionar mais elementos decorativos aqui */}
        </View>
      </View>

      {/* Parte direita com formulário */}
      <View style={styles.rightSection}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>CADASTRE-SE</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>NOME</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui seu nome"
              placeholderTextColor="#999"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>EMAIL INSTITUCIONAL</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui seu email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>ESCOLA</Text>
            <TextInput
              style={styles.input}
              placeholder="Selecione aqui"
              placeholderTextColor="#999"
              value={escola}
              onChangeText={setEscola}
            />
          </View>

          <Pressable style={styles.button} onPress={handleEnviar}>
            <Text style={styles.buttonText}>ENVIAR</Text>
          </Pressable>

          <Pressable
            style={styles.quemSomosButton}
            onPress={onQuemSomos}
          >
            <Text style={styles.quemSomosText}>Quem nós somos?</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0a0a2e",
  },
  leftSection: {
    flex: 1,
    padding: 40,
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  rightSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  welcomeText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "300",
    marginBottom: 5,
  },
  platformText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 2,
    marginBottom: 10,
  },
  brandText: {
    fontSize: 48,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  alfa: {
    color: "#ffffff",
  },
  bet: {
    color: "#00d4ff",
  },
  iz: {
    color: "#ff00ff",
  },
  a: {
    color: "#ffff00",
  },
  plus: {
    color: "#00ff00",
  },
  illustrationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    gap: 20,
  },
  booksImage: {
    width: 120,
    height: 120,
  },
  robotImage: {
    width: 150,
    height: 150,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 2,
    borderColor: "#4d4dff",
    borderRadius: 20,
    padding: 40,
    width: "100%",
    maxWidth: 500,
    shadowColor: "#4d4dff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  formTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    letterSpacing: 2,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 14,
    color: "#333",
    borderWidth: 0,
  },
  button: {
    backgroundColor: "#00d4ff",
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#00d4ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: "#0a0a2e",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  quemSomosButton: {
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 10,
  },
  quemSomosText: {
    color: "#00d4ff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
