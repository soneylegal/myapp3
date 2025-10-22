import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CadastroScreen({ onQuemSomos, onCadastroCompleto }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [escola, setEscola] = useState("");

  // Função para validar email usando regex
  const validarEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
  };

  const handleEnviar = () => {
    if (!nome || !email || !escola) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    
    // Validar formato do email
    if (!validarEmail(email)) {
      alert("Por favor, digite um email válido!\nExemplo: usuario@dominio.com");
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

  const styles = createStyles(isMobile);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <StatusBar style="light" />

      {/* Parte superior/esquerda com elementos visuais */}
      <View style={styles.leftSection}>
        <Text style={styles.welcomeText}>Seja bem vindo(a) à</Text>
        <Text style={styles.platformText}>PLATAFORMA</Text>
        <Text style={styles.brandText}>
          <Text style={styles.letraA}>A</Text>
          <Text style={styles.letraL}>L</Text>
          <Text style={styles.letraF}>F</Text>
          <Text style={styles.letraA2}>A</Text>
          <Text style={styles.letraB}>B</Text>
          <Text style={styles.letraE}>E</Text>
          <Text style={styles.letraT}>T</Text>
          <Text style={styles.letraI}>I</Text>
          <Text style={styles.letraZ}>Z</Text>
          <Text style={styles.letraA3}>A</Text>
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
    </ScrollView>
  );
}

function createStyles(isMobile) {
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a2e",
  },
  scrollContent: {
    flexDirection: isMobile ? "column" : "row",
    minHeight: isMobile ? undefined : "100%",
    alignItems: "center",
    paddingBottom: isMobile ? 40 : 0,
  },
  leftSection: {
    flex: isMobile ? undefined : 1,
    padding: isMobile ? 20 : 40,
    justifyContent: "flex-start",
    paddingTop: isMobile ? 50 : 60,
    alignItems: isMobile ? "center" : "flex-start",
    marginBottom: isMobile ? 30 : 0,
    width: isMobile ? "100%" : "auto",
  },
  rightSection: {
    flex: isMobile ? undefined : 1,
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? 20 : 40,
    width: isMobile ? "100%" : "auto",
  },
  welcomeText: {
    color: "#ffffff",
    fontSize: isMobile ? 22 : 28,
    fontWeight: "300",
    marginBottom: 5,
    textAlign: isMobile ? "center" : "left",
  },
  platformText: {
    color: "#ffffff",
    fontSize: isMobile ? 16 : 20,
    fontWeight: "600",
    letterSpacing: 2,
    marginBottom: 10,
    textAlign: isMobile ? "center" : "left",
  },
  brandText: {
    fontSize: isMobile ? 32 : 48,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: isMobile ? "center" : "left",
  },
  letraA: {
    color: "#FF3B5C",
  },
  letraL: {
    color: "#FF8A3D",
  },
  letraF: {
    color: "#FFD23F",
  },
  letraA2: {
    color: "#2DD4BF",
  },
  letraB: {
    color: "#3A86FF",
  },
  letraE: {
    color: "#845EF7",
  },
  letraT: {
    color: "#FF006E",
  },
  letraI: {
    color: "#06D6A0",
  },
  letraZ: {
    color: "#FF9F1C",
  },
  letraA3: {
    color: "#2ECC71",
  },
  plus: {
    color: "#00F0FF",
  },
  illustrationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: isMobile ? 20 : 60,
    marginBottom: isMobile ? 10 : 0,
    width: isMobile ? 220 : 280,
    height: isMobile ? 220 : 280,
    position: "relative",
  },
  booksImage: {
    position: "absolute",
    width: isMobile ? 200 : 240,
    height: isMobile ? 200 : 240,
    opacity: 0.9,
    transform: [{ rotate: "-8deg" }],
    zIndex: 1,
  },
  robotImage: {
    width: isMobile ? 190 : 220,
    height: isMobile ? 210 : 240,
    zIndex: 2,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 2,
    borderColor: "#4d4dff",
    borderRadius: 20,
    padding: isMobile ? 25 : 40,
    width: "100%",
    maxWidth: isMobile ? undefined : 500,
    shadowColor: "#4d4dff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  formTitle: {
    color: "#ffffff",
    fontSize: isMobile ? 24 : 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: isMobile ? 25 : 30,
    letterSpacing: 2,
  },
  inputGroup: {
    marginBottom: isMobile ? 20 : 25,
  },
  label: {
    color: "#ffffff",
    fontSize: isMobile ? 11 : 12,
    fontWeight: "bold",
    marginBottom: 8,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: isMobile ? 15 : 20,
    paddingVertical: isMobile ? 12 : 15,
    fontSize: isMobile ? 13 : 14,
    color: "#333",
    borderWidth: 0,
  },
  button: {
    backgroundColor: "#00d4ff",
    borderRadius: 25,
    paddingVertical: isMobile ? 12 : 15,
    marginTop: isMobile ? 15 : 20,
    alignItems: "center",
    shadowColor: "#00d4ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: "#0a0a2e",
    fontSize: isMobile ? 14 : 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  quemSomosButton: {
    marginTop: isMobile ? 15 : 20,
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: isMobile ? 20 : 0,
  },
  quemSomosText: {
    color: "#00d4ff",
    fontSize: isMobile ? 13 : 14,
    textDecorationLine: "underline",
  },
  });
}
