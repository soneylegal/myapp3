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

export default function ExplorarPlataformaScreen({ onVoltar, nomeUsuario }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = createStyles(isMobile);

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
            <Text style={styles.title}>EXPLORE A PLATAFORMA</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
              Olá, {nomeUsuario || "Educador"}! Descubra todas as ferramentas disponíveis
            </Text>
          </View>

          {/* Seção de Ferramentas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📚 BIBLIOTECA DIGITAL</Text>
            <View style={styles.toolCard}>
              <View style={styles.toolIconContainer}>
                <Text style={styles.toolIcon}>📖</Text>
              </View>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Acervo Completo</Text>
                <Text style={styles.toolDescription}>
                  Mais de 500 livros digitais organizados por nível de leitura e tema
                </Text>
                <Pressable style={styles.toolButton}>
                  <Text style={styles.toolButtonText}>ACESSAR AGORA</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.toolCard}>
              <View style={styles.toolIconContainer}>
                <Text style={styles.toolIcon}>🎧</Text>
              </View>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Leitura com Áudio</Text>
                <Text style={styles.toolDescription}>
                  Audiobooks narrados profissionalmente para apoiar o aprendizado
                </Text>
                <Pressable style={styles.toolButton}>
                  <Text style={styles.toolButtonText}>COMEÇAR</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Seção de Atividades */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✍️ ATIVIDADES INTERATIVAS</Text>
            <View style={styles.toolCard}>
              <View style={styles.toolIconContainer}>
                <Text style={styles.toolIcon}>🔤</Text>
              </View>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Reconhecimento de Letras</Text>
                <Text style={styles.toolDescription}>
                  Exercícios personalizados para aprender o alfabeto
                </Text>
                <Pressable style={styles.toolButton}>
                  <Text style={styles.toolButtonText}>PRATICAR</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.toolCard}>
              <View style={styles.toolIconContainer}>
                <Text style={styles.toolIcon}>✏️</Text>
              </View>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Escrita Criativa</Text>
                <Text style={styles.toolDescription}>
                  Atividades de escrita com correção automática da IA
                </Text>
                <Pressable style={styles.toolButton}>
                  <Text style={styles.toolButtonText}>ESCREVER</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Seção de Jogos */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎮 JOGOS EDUCATIVOS</Text>
            <View style={styles.gamesGrid}>
              <View style={styles.gameCard}>
                <Text style={styles.gameIcon}>🎯</Text>
                <Text style={styles.gameName}>Caça Palavras</Text>
                <Text style={styles.gameLevel}>Nível: Iniciante</Text>
              </View>

              <View style={styles.gameCard}>
                <Text style={styles.gameIcon}>🧩</Text>
                <Text style={styles.gameName}>Quebra-Cabeça de Sílabas</Text>
                <Text style={styles.gameLevel}>Nível: Intermediário</Text>
              </View>

              <View style={styles.gameCard}>
                <Text style={styles.gameIcon}>🎪</Text>
                <Text style={styles.gameName}>Teatro de Histórias</Text>
                <Text style={styles.gameLevel}>Nível: Avançado</Text>
              </View>

              <View style={styles.gameCard}>
                <Text style={styles.gameIcon}>🎨</Text>
                <Text style={styles.gameName}>Desenhar e Escrever</Text>
                <Text style={styles.gameLevel}>Nível: Todos</Text>
              </View>
            </View>
          </View>

          {/* Seção de Relatórios */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📊 ACOMPANHAMENTO</Text>
            <View style={styles.toolCard}>
              <View style={styles.toolIconContainer}>
                <Text style={styles.toolIcon}>📈</Text>
              </View>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Dashboard do Professor</Text>
                <Text style={styles.toolDescription}>
                  Visualize o progresso da turma com gráficos e relatórios detalhados
                </Text>
                <Pressable style={styles.toolButton}>
                  <Text style={styles.toolButtonText}>VER DASHBOARD</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.toolCard}>
              <View style={styles.toolIconContainer}>
                <Text style={styles.toolIcon}>🎯</Text>
              </View>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Metas Personalizadas</Text>
                <Text style={styles.toolDescription}>
                  Defina objetivos individuais para cada aluno
                </Text>
                <Pressable style={styles.toolButton}>
                  <Text style={styles.toolButtonText}>CONFIGURAR</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Seção IA */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🤖 ASSISTENTE INTELIGENTE</Text>
            <View style={styles.aiCard}>
              <Image
                source={require("./assets/robo.png")}
                style={styles.aiImage}
                resizeMode="contain"
              />
              <Text style={styles.aiTitle}>Converse com o Assistente</Text>
              <Text style={styles.aiDescription}>
                Tire dúvidas, peça sugestões de atividades e receba orientações pedagógicas em tempo real
              </Text>
              <Pressable style={styles.aiButton}>
                <Text style={styles.aiButtonText}>INICIAR CONVERSA</Text>
              </Pressable>
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
      paddingBottom: isMobile ? 20 : 40,
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
    title: {
      color: "#ffffff",
      fontSize: isMobile ? 26 : 36,
      fontWeight: "bold",
      marginBottom: 15,
      letterSpacing: 2,
      textAlign: "center",
    },
    divider: {
      height: 3,
      backgroundColor: "#00d4ff",
      width: isMobile ? 80 : 120,
      marginBottom: 20,
    },
    subtitle: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 20,
      textAlign: "center",
      opacity: 0.9,
      paddingHorizontal: isMobile ? 10 : 0,
    },
    section: {
      marginBottom: isMobile ? 35 : 50,
    },
    sectionTitle: {
      color: "#00d4ff",
      fontSize: isMobile ? 18 : 22,
      fontWeight: "bold",
      marginBottom: 20,
      letterSpacing: 1,
    },
    toolCard: {
      flexDirection: isMobile ? "column" : "row",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "rgba(77, 77, 255, 0.3)",
      borderRadius: 15,
      padding: isMobile ? 20 : 25,
      marginBottom: 20,
      alignItems: isMobile ? "center" : "flex-start",
    },
    toolIconContainer: {
      marginRight: isMobile ? 0 : 20,
      marginBottom: isMobile ? 15 : 0,
    },
    toolIcon: {
      fontSize: isMobile ? 50 : 60,
    },
    toolContent: {
      flex: 1,
      alignItems: isMobile ? "center" : "flex-start",
    },
    toolName: {
      color: "#ffffff",
      fontSize: isMobile ? 18 : 20,
      fontWeight: "bold",
      marginBottom: 8,
      textAlign: isMobile ? "center" : "left",
    },
    toolDescription: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 15,
      lineHeight: isMobile ? 20 : 22,
      opacity: 0.8,
      marginBottom: 15,
      textAlign: isMobile ? "center" : "left",
    },
    toolButton: {
      backgroundColor: "#00d4ff",
      borderRadius: 20,
      paddingVertical: isMobile ? 8 : 10,
      paddingHorizontal: isMobile ? 18 : 22,
    },
    toolButtonText: {
      color: "#0a0a2e",
      fontSize: isMobile ? 12 : 13,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    gamesGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: isMobile ? "center" : "space-between",
      gap: isMobile ? 15 : 20,
    },
    gameCard: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "rgba(77, 77, 255, 0.3)",
      borderRadius: 15,
      padding: isMobile ? 20 : 25,
      width: isMobile ? "100%" : "47%",
      maxWidth: isMobile ? 400 : undefined,
      alignItems: "center",
    },
    gameIcon: {
      fontSize: isMobile ? 50 : 60,
      marginBottom: 12,
    },
    gameName: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 8,
      textAlign: "center",
    },
    gameLevel: {
      color: "#00d4ff",
      fontSize: isMobile ? 13 : 14,
      textAlign: "center",
    },
    aiCard: {
      backgroundColor: "rgba(0, 212, 255, 0.1)",
      borderWidth: 2,
      borderColor: "#00d4ff",
      borderRadius: 20,
      padding: isMobile ? 25 : 35,
      alignItems: "center",
    },
    aiImage: {
      width: isMobile ? 120 : 150,
      height: isMobile ? 120 : 150,
      marginBottom: 20,
    },
    aiTitle: {
      color: "#ffffff",
      fontSize: isMobile ? 22 : 26,
      fontWeight: "bold",
      marginBottom: 12,
      textAlign: "center",
    },
    aiDescription: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 16,
      lineHeight: isMobile ? 20 : 24,
      opacity: 0.9,
      marginBottom: 25,
      textAlign: "center",
      paddingHorizontal: isMobile ? 10 : 20,
    },
    aiButton: {
      backgroundColor: "#00d4ff",
      borderRadius: 25,
      paddingVertical: isMobile ? 12 : 15,
      paddingHorizontal: isMobile ? 25 : 35,
      shadowColor: "#00d4ff",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    aiButtonText: {
      color: "#0a0a2e",
      fontSize: isMobile ? 14 : 16,
      fontWeight: "bold",
      letterSpacing: 2,
    },
  });
}
