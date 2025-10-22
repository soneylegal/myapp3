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
import BibliotecaScreen from "./BibliotecaScreen";
import AtividadesScreen from "./AtividadesScreen";
import JogosScreen from "./JogosScreen";
import AcompanhamentoScreen from "./AcompanhamentoScreen";
import AssistenteIAScreen from "./AssistenteIAScreen";

export default function App() {
  const [telaAtual, setTelaAtual] = useState("cadastro");
  const [nomeUsuario, setNomeUsuario] = useState("");

  // Navegação entre telas
  if (telaAtual === "quemSomos") {
    return (
      <QuemSomosScreen onVoltar={() => setTelaAtual("cadastro")} />
    );
  }

  if (telaAtual === "biblioteca") {
    return (
      <BibliotecaScreen 
        nomeUsuario={nomeUsuario}
        onVoltar={() => setTelaAtual("explorar")} 
      />
    );
  }

  if (telaAtual === "atividades") {
    return (
      <AtividadesScreen 
        nomeUsuario={nomeUsuario}
        onVoltar={() => setTelaAtual("explorar")} 
      />
    );
  }

  if (telaAtual === "jogos") {
    return (
      <JogosScreen 
        nomeUsuario={nomeUsuario}
        onVoltar={() => setTelaAtual("explorar")} 
      />
    );
  }

  if (telaAtual === "acompanhamento") {
    return (
      <AcompanhamentoScreen 
        nomeUsuario={nomeUsuario}
        onVoltar={() => setTelaAtual("explorar")} 
      />
    );
  }

  if (telaAtual === "assistenteIA") {
    return (
      <AssistenteIAScreen 
        nomeUsuario={nomeUsuario}
        onVoltar={() => setTelaAtual("explorar")} 
      />
    );
  }

  if (telaAtual === "explorar") {
    return (
      <ExplorarPlataformaScreen 
        nomeUsuario={nomeUsuario}
        onVoltar={() => setTelaAtual("landing")}
        onBiblioteca={() => setTelaAtual("biblioteca")}
        onAtividades={() => setTelaAtual("atividades")}
        onJogos={() => setTelaAtual("jogos")}
        onAcompanhamento={() => setTelaAtual("acompanhamento")}
        onAssistenteIA={() => setTelaAtual("assistenteIA")}
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
  
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
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
