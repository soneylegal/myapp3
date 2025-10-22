import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function JogosScreen({ onVoltar, nomeUsuario }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = createStyles(isMobile);

  const jogos = [
    {
      id: 1,
      nome: "Caça Palavras",
      nivel: "Iniciante",
      descricao: "Encontre palavras escondidas no grid",
      icone: "🎯",
      cor: "#FF3B5C",
    },
    {
      id: 2,
      nome: "Quebra-Cabeça de Sílabas",
      nivel: "Intermediário",
      descricao: "Monte palavras juntando as sílabas corretas",
      icone: "🧩",
      cor: "#FFD23F",
    },
    {
      id: 3,
      nome: "Teatro de Histórias",
      nivel: "Avançado",
      descricao: "Crie e dramatize suas próprias histórias",
      icone: "🎪",
      cor: "#2DD4BF",
    },
    {
      id: 4,
      nome: "Desenhar e Escrever",
      nivel: "Todos",
      descricao: "Desenhe e escreva sobre suas criações",
      icone: "🎨",
      cor: "#845EF7",
    },
    {
      id: 5,
      nome: "Corrida das Letras",
      nivel: "Iniciante",
      descricao: "Corra coletando letras para formar palavras",
      icone: "🏃",
      cor: "#3A86FF",
    },
    {
      id: 6,
      nome: "Memória Alfabética",
      nivel: "Intermediário",
      descricao: "Jogo de memória com letras e sons",
      icone: "🃏",
      cor: "#FF006E",
    },
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
            <Text style={styles.pageIcon}>🎮</Text>
            <Text style={styles.title}>JOGOS EDUCATIVOS</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
              Aprenda brincando com jogos pedagógicos divertidos
            </Text>
          </View>

          {/* Categorias */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CATEGORIAS</Text>
            
            <View style={styles.categoriesGrid}>
              <Pressable style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>🔤</Text>
                <Text style={styles.categoryName}>Alfabeto</Text>
              </Pressable>

              <Pressable style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>📚</Text>
                <Text style={styles.categoryName}>Leitura</Text>
              </Pressable>

              <Pressable style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>✍️</Text>
                <Text style={styles.categoryName}>Escrita</Text>
              </Pressable>

              <Pressable style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>🎵</Text>
                <Text style={styles.categoryName}>Fonética</Text>
              </Pressable>
            </View>
          </View>

          {/* Jogos Disponíveis */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>TODOS OS JOGOS</Text>
            
            <View style={styles.jogosGrid}>
              {jogos.map((jogo) => (
                <Pressable 
                  key={jogo.id} 
                  style={[styles.jogoCard, { borderTopColor: jogo.cor }]}
                >
                  <Text style={styles.jogoIcon}>{jogo.icone}</Text>
                  <Text style={styles.jogoNome}>{jogo.nome}</Text>
                  <Text style={[styles.jogoNivel, { color: jogo.cor }]}>
                    {jogo.nivel}
                  </Text>
                  <Text style={styles.jogoDescricao}>{jogo.descricao}</Text>
                  <Pressable style={[styles.jogarButton, { backgroundColor: jogo.cor }]}>
                    <Text style={styles.jogarButtonText}>JOGAR AGORA</Text>
                  </Pressable>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Conquistas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CONQUISTAS RECENTES</Text>
            
            <View style={styles.conquistasContainer}>
              <View style={styles.conquistaItem}>
                <Text style={styles.conquistaIcon}>🏆</Text>
                <View style={styles.conquistaInfo}>
                  <Text style={styles.conquistaTitulo}>Mestre das Palavras</Text>
                  <Text style={styles.conquistaDesc}>Complete 10 jogos</Text>
                </View>
              </View>

              <View style={styles.conquistaItem}>
                <Text style={styles.conquistaIcon}>⭐</Text>
                <View style={styles.conquistaInfo}>
                  <Text style={styles.conquistaTitulo}>Aprendiz Dedicado</Text>
                  <Text style={styles.conquistaDesc}>5 dias consecutivos</Text>
                </View>
              </View>

              <View style={styles.conquistaItem}>
                <Text style={styles.conquistaIcon}>🎯</Text>
                <View style={styles.conquistaInfo}>
                  <Text style={styles.conquistaTitulo}>Pontuação Perfeita</Text>
                  <Text style={styles.conquistaDesc}>100% em um jogo</Text>
                </View>
              </View>
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
    pageIcon: {
      fontSize: isMobile ? 60 : 80,
      marginBottom: 15,
    },
    title: {
      color: "#ffffff",
      fontSize: isMobile ? 24 : 32,
      fontWeight: "bold",
      marginBottom: 15,
      letterSpacing: 2,
      textAlign: "center",
    },
    divider: {
      height: 3,
      backgroundColor: "#2DD4BF",
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
    categoriesGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: isMobile ? 12 : 15,
      justifyContent: "space-between",
    },
    categoryCard: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "rgba(45, 212, 191, 0.3)",
      borderRadius: 12,
      padding: isMobile ? 15 : 20,
      alignItems: "center",
      width: isMobile ? "48%" : "23%",
    },
    categoryIcon: {
      fontSize: isMobile ? 40 : 50,
      marginBottom: 8,
    },
    categoryName: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 16,
      fontWeight: "600",
    },
    jogosGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: isMobile ? 15 : 20,
      justifyContent: isMobile ? "center" : "space-between",
    },
    jogoCard: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderTopWidth: 4,
      borderRadius: 15,
      padding: isMobile ? 20 : 25,
      width: isMobile ? "100%" : "48%",
      maxWidth: isMobile ? 400 : undefined,
      alignItems: "center",
    },
    jogoIcon: {
      fontSize: isMobile ? 60 : 70,
      marginBottom: 12,
    },
    jogoNome: {
      color: "#ffffff",
      fontSize: isMobile ? 18 : 20,
      fontWeight: "bold",
      marginBottom: 8,
      textAlign: "center",
    },
    jogoNivel: {
      fontSize: isMobile ? 13 : 14,
      fontWeight: "600",
      marginBottom: 12,
    },
    jogoDescricao: {
      color: "#ffffff",
      fontSize: isMobile ? 13 : 14,
      opacity: 0.7,
      textAlign: "center",
      marginBottom: 18,
      lineHeight: isMobile ? 18 : 20,
    },
    jogarButton: {
      borderRadius: 20,
      paddingVertical: isMobile ? 10 : 12,
      paddingHorizontal: isMobile ? 20 : 25,
    },
    jogarButtonText: {
      color: "#ffffff",
      fontSize: isMobile ? 12 : 13,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    conquistasContainer: {
      gap: 12,
    },
    conquistaItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(0, 212, 255, 0.1)",
      borderWidth: 2,
      borderColor: "rgba(0, 212, 255, 0.2)",
      borderRadius: 12,
      padding: isMobile ? 15 : 18,
    },
    conquistaIcon: {
      fontSize: isMobile ? 40 : 50,
      marginRight: 15,
    },
    conquistaInfo: {
      flex: 1,
    },
    conquistaTitulo: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    conquistaDesc: {
      color: "#00d4ff",
      fontSize: isMobile ? 13 : 14,
    },
  });
}
