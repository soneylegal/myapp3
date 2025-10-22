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

export default function ExplorarPlataformaScreen({ 
  onVoltar, 
  nomeUsuario,
  onBiblioteca,
  onAtividades,
  onJogos,
  onAcompanhamento,
  onAssistenteIA,
}) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = createStyles(isMobile);

  const menuItems = [
    {
      title: "📚 BIBLIOTECA DIGITAL",
      description: "Acesse livros digitais, audiolivros e materiais didáticos",
      color: "#FF3B5C",
      onPress: onBiblioteca,
    },
    {
      title: "✏️ ATIVIDADES INTERATIVAS",
      description: "Exercícios personalizados e planos de aula",
      color: "#FFD23F",
      onPress: onAtividades,
    },
    {
      title: "🎮 JOGOS EDUCATIVOS",
      description: "Aprenda brincando com jogos pedagógicos",
      color: "#2DD4BF",
      onPress: onJogos,
    },
    {
      title: "📊 ACOMPANHAMENTO",
      description: "Monitore o progresso e gere relatórios",
      color: "#845EF7",
      onPress: onAcompanhamento,
    },
    {
      title: "🤖 ASSISTENTE IA",
      description: "Tire dúvidas e receba sugestões personalizadas",
      color: "#3A86FF",
      onPress: onAssistenteIA,
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
            <Text style={styles.title}>EXPLORE A PLATAFORMA</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
              Olá, {nomeUsuario || "Educador"}! Escolha uma seção para começar
            </Text>
          </View>

          {/* Menu de Navegação */}
          <View style={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <Pressable
                key={index}
                style={[styles.menuCard, { borderLeftColor: item.color }]}
                onPress={item.onPress}
              >
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuDescription}>{item.description}</Text>
                <Text style={[styles.menuArrow, { color: item.color }]}>→</Text>
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
    menuGrid: {
      gap: isMobile ? 15 : 20,
      marginTop: isMobile ? 20 : 30,
    },
    menuCard: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderLeftWidth: 5,
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRightColor: "rgba(77, 77, 255, 0.2)",
      borderTopColor: "rgba(77, 77, 255, 0.2)",
      borderBottomColor: "rgba(77, 77, 255, 0.2)",
      borderRadius: 15,
      padding: isMobile ? 20 : 30,
      marginBottom: 15,
    },
    menuTitle: {
      color: "#ffffff",
      fontSize: isMobile ? 18 : 22,
      fontWeight: "bold",
      marginBottom: 10,
    },
    menuDescription: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 16,
      lineHeight: isMobile ? 20 : 24,
      opacity: 0.8,
      marginBottom: 15,
    },
    menuArrow: {
      fontSize: isMobile ? 24 : 28,
      fontWeight: "bold",
      alignSelf: "flex-end",
    },
  });
}
