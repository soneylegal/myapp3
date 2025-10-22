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

export default function BibliotecaScreen({ onVoltar, nomeUsuario }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = createStyles(isMobile);

  const livros = [
    { id: 1, titulo: "A Borboleta Azul", nivel: "Iniciante", icone: "🦋" },
    { id: 2, titulo: "O Castelo das Letras", nivel: "Iniciante", icone: "🏰" },
    { id: 3, titulo: "Aventuras na Floresta", nivel: "Intermediário", icone: "🌳" },
    { id: 4, titulo: "O Mistério do Mar", nivel: "Intermediário", icone: "🌊" },
    { id: 5, titulo: "Viagem ao Espaço", nivel: "Avançado", icone: "🚀" },
    { id: 6, titulo: "Histórias Encantadas", nivel: "Avançado", icone: "✨" },
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
            <Text style={styles.pageIcon}>📚</Text>
            <Text style={styles.title}>BIBLIOTECA DIGITAL</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
              Mais de 500 livros digitais organizados por nível
            </Text>
          </View>

          {/* Ferramentas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FERRAMENTAS</Text>
            
            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>📖</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Acervo Completo</Text>
                <Text style={styles.toolDescription}>
                  Navegue por categorias e encontre o livro ideal
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>

            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>🎧</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Audiolivros</Text>
                <Text style={styles.toolDescription}>
                  Narração profissional para apoiar o aprendizado
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>

            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>⭐</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Favoritos</Text>
                <Text style={styles.toolDescription}>
                  Livros salvos para leitura rápida
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>
          </View>

          {/* Livros em Destaque */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LIVROS EM DESTAQUE</Text>
            
            {livros.map((livro) => (
              <Pressable key={livro.id} style={styles.livroCard}>
                <Text style={styles.livroIcon}>{livro.icone}</Text>
                <View style={styles.livroInfo}>
                  <Text style={styles.livroTitulo}>{livro.titulo}</Text>
                  <Text style={styles.livroNivel}>Nível: {livro.nivel}</Text>
                </View>
                <Pressable style={styles.lerButton}>
                  <Text style={styles.lerButtonText}>LER</Text>
                </Pressable>
              </Pressable>
            ))}
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
      backgroundColor: "#FF3B5C",
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
    toolCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "rgba(255, 59, 92, 0.3)",
      borderRadius: 12,
      padding: isMobile ? 15 : 20,
      marginBottom: 12,
    },
    toolIcon: {
      fontSize: isMobile ? 35 : 45,
      marginRight: 15,
    },
    toolContent: {
      flex: 1,
    },
    toolName: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    toolDescription: {
      color: "#ffffff",
      fontSize: isMobile ? 13 : 14,
      opacity: 0.7,
    },
    toolArrow: {
      color: "#FF3B5C",
      fontSize: isMobile ? 24 : 28,
      fontWeight: "bold",
    },
    livroCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderLeftWidth: 4,
      borderLeftColor: "#FFD23F",
      borderRadius: 10,
      padding: isMobile ? 15 : 18,
      marginBottom: 12,
    },
    livroIcon: {
      fontSize: isMobile ? 40 : 50,
      marginRight: 15,
    },
    livroInfo: {
      flex: 1,
    },
    livroTitulo: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    livroNivel: {
      color: "#FFD23F",
      fontSize: isMobile ? 12 : 14,
    },
    lerButton: {
      backgroundColor: "#FF3B5C",
      borderRadius: 20,
      paddingVertical: isMobile ? 8 : 10,
      paddingHorizontal: isMobile ? 18 : 22,
    },
    lerButtonText: {
      color: "#ffffff",
      fontSize: isMobile ? 12 : 13,
      fontWeight: "bold",
      letterSpacing: 1,
    },
  });
}
