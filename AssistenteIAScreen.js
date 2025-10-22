import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function AssistenteIAScreen({ onVoltar, nomeUsuario }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = createStyles(isMobile);

  const sugestoes = [
    "Como criar um plano de aula para alfabetização?",
    "Sugestões de atividades para alunos com dificuldade na leitura",
    "Como adaptar exercícios para diferentes níveis?",
    "Ideias de jogos educativos para a sala de aula",
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Pressable style={styles.voltarButton} onPress={onVoltar}>
            <Text style={styles.voltarText}>← VOLTAR</Text>
          </Pressable>

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
        </View>

        {/* Conteúdo Principal */}
        <View style={styles.content}>
          <View style={styles.heroSection}>
            <Image
              source={require("./assets/robo.png")}
              style={styles.roboImage}
              resizeMode="contain"
            />
            <Text style={styles.title}>ASSISTENTE INTELIGENTE</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
              Tire dúvidas e receba orientações pedagógicas personalizadas
            </Text>
          </View>

          {/* Interface de Chat */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CONVERSA</Text>
            
            <View style={styles.chatContainer}>
              {/* Mensagem do Assistente */}
              <View style={styles.messageContainer}>
                <View style={styles.assistenteMessage}>
                  <Text style={styles.messageText}>
                    Olá, {nomeUsuario || "Educador"}! 👋
                  </Text>
                  <Text style={styles.messageText}>
                    Sou seu assistente pedagógico. Como posso ajudar você hoje?
                  </Text>
                </View>
              </View>

              {/* Input de Chat */}
              <View style={styles.inputContainer}>
                <View style={styles.chatInput}>
                  <Text style={styles.inputPlaceholder}>
                    Digite sua pergunta aqui...
                  </Text>
                </View>
                <Pressable style={styles.sendButton}>
                  <Text style={styles.sendIcon}>📤</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Sugestões */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PERGUNTAS SUGERIDAS</Text>
            
            {sugestoes.map((sugestao, index) => (
              <Pressable key={index} style={styles.sugestaoCard}>
                <Text style={styles.sugestaoIcon}>💡</Text>
                <Text style={styles.sugestaoText}>{sugestao}</Text>
                <Text style={styles.sugestaoArrow}>→</Text>
              </Pressable>
            ))}
          </View>

          {/* Recursos */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>O QUE POSSO FAZER</Text>
            
            <View style={styles.recursoCard}>
              <Text style={styles.recursoIcon}>📝</Text>
              <View style={styles.recursoContent}>
                <Text style={styles.recursoTitulo}>Criar Planos de Aula</Text>
                <Text style={styles.recursoDesc}>
                  Gero planos personalizados baseados no seu objetivo pedagógico
                </Text>
              </View>
            </View>

            <View style={styles.recursoCard}>
              <Text style={styles.recursoIcon}>🎯</Text>
              <View style={styles.recursoContent}>
                <Text style={styles.recursoTitulo}>Sugerir Atividades</Text>
                <Text style={styles.recursoDesc}>
                  Recomendo exercícios adaptados ao nível de cada aluno
                </Text>
              </View>
            </View>

            <View style={styles.recursoCard}>
              <Text style={styles.recursoIcon}>💬</Text>
              <View style={styles.recursoContent}>
                <Text style={styles.recursoTitulo}>Tirar Dúvidas</Text>
                <Text style={styles.recursoDesc}>
                  Respondo perguntas sobre metodologias e estratégias de ensino
                </Text>
              </View>
            </View>

            <View style={styles.recursoCard}>
              <Text style={styles.recursoIcon}>📊</Text>
              <View style={styles.recursoContent}>
                <Text style={styles.recursoTitulo}>Analisar Progresso</Text>
                <Text style={styles.recursoDesc}>
                  Analiso dados e ofereço insights sobre o desenvolvimento dos alunos
                </Text>
              </View>
            </View>
          </View>

          {/* Dica */}
          <View style={styles.dicaCard}>
            <Text style={styles.dicaIcon}>💡</Text>
            <View style={styles.dicaContent}>
              <Text style={styles.dicaTitulo}>Dica:</Text>
              <Text style={styles.dicaTexto}>
                Seja específico em suas perguntas para receber respostas mais precisas e úteis!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function createStyles(isMobile) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0a0a2e",
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
    },
    header: {
      padding: isMobile ? 15 : 20,
      paddingTop: isMobile ? 50 : 40,
      borderBottomWidth: 1,
      borderBottomColor: "rgba(255, 255, 255, 0.1)",
    },
    voltarButton: {
      marginBottom: isMobile ? 15 : 20,
      padding: 10,
      alignSelf: "flex-start",
    },
    voltarText: {
      color: "#00d4ff",
      fontSize: isMobile ? 14 : 16,
      fontWeight: "600",
    },
    brandText: {
      fontSize: isMobile ? 24 : 36,
      fontWeight: "bold",
      letterSpacing: 1,
      textAlign: "center",
    },
    letraA: { color: "#FF3B5C" },
    letraL: { color: "#FF8A3D" },
    letraF: { color: "#FFD23F" },
    letraA2: { color: "#2DD4BF" },
    letraB: { color: "#3A86FF" },
    letraE: { color: "#845EF7" },
    letraT: { color: "#FF006E" },
    letraI: { color: "#06D6A0" },
    letraZ: { color: "#FF9F1C" },
    letraA3: { color: "#2ECC71" },
    plus: { color: "#00F0FF" },
    content: {
      padding: isMobile ? 15 : 20,
      paddingHorizontal: isMobile ? 20 : 40,
      maxWidth: 1200,
      alignSelf: "center",
      width: "100%",
    },
    heroSection: {
      alignItems: "center",
      marginBottom: isMobile ? 30 : 40,
      marginTop: isMobile ? 20 : 30,
    },
    roboImage: {
      width: isMobile ? 140 : 180,
      height: isMobile ? 140 : 180,
      marginBottom: 20,
    },
    title: {
      color: "#ffffff",
      fontSize: isMobile ? 22 : 32,
      fontWeight: "bold",
      marginBottom: 15,
      letterSpacing: 2,
      textAlign: "center",
    },
    divider: {
      height: 3,
      backgroundColor: "#3A86FF",
      width: isMobile ? 80 : 120,
      marginBottom: 20,
    },
    subtitle: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 18,
      textAlign: "center",
      opacity: 0.9,
      paddingHorizontal: isMobile ? 10 : 0,
    },
    section: {
      marginBottom: isMobile ? 30 : 40,
    },
    sectionTitle: {
      color: "#00d4ff",
      fontSize: isMobile ? 16 : 20,
      fontWeight: "bold",
      marginBottom: 15,
      letterSpacing: 1,
    },
    chatContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "rgba(58, 134, 255, 0.3)",
      borderRadius: 15,
      padding: isMobile ? 18 : 22,
      minHeight: isMobile ? 250 : 300,
    },
    messageContainer: {
      marginBottom: 20,
    },
    assistenteMessage: {
      backgroundColor: "rgba(58, 134, 255, 0.2)",
      borderRadius: 12,
      padding: isMobile ? 15 : 18,
      maxWidth: "85%",
      alignSelf: "flex-start",
    },
    messageText: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 16,
      lineHeight: isMobile ? 20 : 24,
      marginBottom: 8,
    },
    inputContainer: {
      flexDirection: "row",
      gap: 10,
      marginTop: "auto",
    },
    chatInput: {
      flex: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 25,
      paddingVertical: isMobile ? 12 : 15,
      paddingHorizontal: isMobile ? 18 : 22,
      justifyContent: "center",
    },
    inputPlaceholder: {
      color: "#ffffff",
      opacity: 0.5,
      fontSize: isMobile ? 14 : 15,
    },
    sendButton: {
      backgroundColor: "#3A86FF",
      borderRadius: 25,
      width: isMobile ? 50 : 55,
      height: isMobile ? 50 : 55,
      alignItems: "center",
      justifyContent: "center",
    },
    sendIcon: {
      fontSize: isMobile ? 22 : 24,
    },
    sugestaoCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderLeftWidth: 3,
      borderLeftColor: "#00d4ff",
      borderRadius: 10,
      padding: isMobile ? 15 : 18,
      marginBottom: 12,
    },
    sugestaoIcon: {
      fontSize: isMobile ? 24 : 28,
      marginRight: 12,
    },
    sugestaoText: {
      flex: 1,
      color: "#ffffff",
      fontSize: isMobile ? 14 : 15,
      lineHeight: isMobile ? 20 : 22,
    },
    sugestaoArrow: {
      color: "#00d4ff",
      fontSize: isMobile ? 20 : 24,
      fontWeight: "bold",
    },
    recursoCard: {
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: "rgba(58, 134, 255, 0.1)",
      borderWidth: 2,
      borderColor: "rgba(58, 134, 255, 0.3)",
      borderRadius: 12,
      padding: isMobile ? 15 : 18,
      marginBottom: 12,
    },
    recursoIcon: {
      fontSize: isMobile ? 35 : 40,
      marginRight: 15,
    },
    recursoContent: {
      flex: 1,
    },
    recursoTitulo: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 6,
    },
    recursoDesc: {
      color: "#ffffff",
      fontSize: isMobile ? 13 : 14,
      opacity: 0.7,
      lineHeight: isMobile ? 18 : 20,
    },
    dicaCard: {
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: "rgba(255, 210, 63, 0.1)",
      borderWidth: 2,
      borderColor: "rgba(255, 210, 63, 0.3)",
      borderRadius: 12,
      padding: isMobile ? 18 : 20,
    },
    dicaIcon: {
      fontSize: isMobile ? 30 : 35,
      marginRight: 15,
    },
    dicaContent: {
      flex: 1,
    },
    dicaTitulo: {
      color: "#FFD23F",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 6,
    },
    dicaTexto: {
      color: "#ffffff",
      fontSize: isMobile ? 13 : 14,
      lineHeight: isMobile ? 18 : 20,
      opacity: 0.9,
    },
  });
}
