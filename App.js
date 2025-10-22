import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Pressable,
  Text,
} from "react-native";
import MyButton from "./MyButton";
import MyText from "./MyText";
import CadastroScreen from "./CadastroScreen";
import QuemSomosScreen from "./QuemSomosScreen";
import LandingPage from "./LandingPage";
import ExplorarPlataformaScreen from "./ExplorarPlataformaScreen";

export default function App() {
  const [telaAtual, setTelaAtual] = useState("cadastro");
  const [nomeUsuario, setNomeUsuario] = useState("");

  // Navegação entre telas
  if (telaAtual === "quemSomos") {
    return (
      <QuemSomosScreen onVoltar={() => setTelaAtual("cadastro")} />
    );
  }

  if (telaAtual === "explorar") {
    return (
      <ExplorarPlataformaScreen 
        nomeUsuario={nomeUsuario}
        onVoltar={() => setTelaAtual("landing")} 
      />
    );
  }

  if (telaAtual === "landing") {
    return (
      <LandingPage 
        nomeUsuario={nomeUsuario} 
        onExplorar={() => setTelaAtual("explorar")}
      />
    );
  }

  // Tela de cadastro (login)
  return (
    <CadastroScreen
      onQuemSomos={() => setTelaAtual("quemSomos")}
      onCadastroCompleto={(nome) => {
        setNomeUsuario(nome);
        setTelaAtual("landing");
      }}
    />
  );
  
  // Código antigo comentado - pode ser removido se não precisar mais
  /*
  return (
    <View style={styles.container}>
      <Pressable onPress={() => alert("Imagem clicada!")}>
        <Image
          source={require("./assets/logo.webp")}
          style={{ width: 400, height: 400 }}
        />
      </Pressable>

      <Pressable
        onPress={() => alert("Botão Personalizado clicado!")}
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      >
        <Text>Meu Botão Personalizado!</Text>
      </Pressable>

      <MyText
        text="Hello World!"
        color="darkblue"
        items={["Item 1", "Item 2"]}
      />
      <MyButton />
      <TextInput
        placeholder="Digite algo aqui..."
        style={styles.input}
      ></TextInput>
      <StatusBar style="auto" />
    </View>
  );
  */
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff", // Cor de fundo da caixa de texto
    color: "#333", // Cor do texto digitado
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
