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

export default function LandingPage({ nomeUsuario, onExplorar }) {
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

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.welcomeMessage}>
            Bem-vindo(a), {nomeUsuario || "Educador"}! 
          </Text>

          <View style={styles.illustrationContainer}>
            <Image
              source={require("./assets/livros.png")}
              style={styles.heroBooksImage}
              resizeMode="contain"
            />
            <Image
              source={require("./assets/robo.png")}
              style={styles.robotImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Cards de Funcionalidades */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>COMECE AGORA</Text>
          <View style={styles.divider} />

          <View style={styles.featureGrid}>
            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}></Text>
              <Text style={styles.featureTitle}>Minha Biblioteca</Text>
              <Text style={styles.featureDescription}>
                Acesse livros e materiais de leitura interativos
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}></Text>
              <Text style={styles.featureTitle}>Exercícios</Text>
              <Text style={styles.featureDescription}>
                Atividades personalizadas de escrita e alfabetização
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}></Text>
              <Text style={styles.featureTitle}>Jogos Educativos</Text>
              <Text style={styles.featureDescription}>
                Aprenda brincando com jogos divertidos
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}></Text>
              <Text style={styles.featureTitle}>Progresso</Text>
              <Text style={styles.featureDescription}>
                Acompanhe o desenvolvimento dos alunos
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}></Text>
              <Text style={styles.featureTitle}>Assistente IA</Text>
              <Text style={styles.featureDescription}>
                Converse com nosso assistente inteligente
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}></Text>
              <Text style={styles.featureTitle}>Minha Turma</Text>
              <Text style={styles.featureDescription}>
                Gerencie e acompanhe sua turma
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Seção de Recursos Destaque */}
        <View style={styles.highlightSection}>
          <Text style={styles.sectionTitle}>RECURSOS EM DESTAQUE</Text>
          <View style={styles.divider} />

          <View style={styles.highlightCard}>
            <Image
              source={require("./assets/livros.png")}
              style={styles.highlightImage}
              resizeMode="contain"
            />
            <View style={styles.highlightContent}>
              <Text style={styles.highlightTitle}>
                Leitura Assistida por IA
              </Text>
              <Text style={styles.highlightDescription}>
                Nossa inteligência artificial acompanha a leitura em tempo real,
                oferecendo suporte personalizado e feedback imediato para cada
                criança.
              </Text>
              <Pressable style={styles.highlightButton}>
                <Text style={styles.highlightButtonText}>EXPERIMENTAR AGORA</Text>
              </Pressable>
            </View>
          </View>

          <View style={[styles.highlightCard, styles.highlightCardReverse]}>
            <View style={styles.highlightContent}>
              <Text style={styles.highlightTitle}>
                Relatórios Inteligentes
              </Text>
              <Text style={styles.highlightDescription}>
                Receba análises detalhadas sobre o progresso de cada aluno, com
                insights personalizados e sugestões de atividades.
              </Text>
              <Pressable style={styles.highlightButton}>
                <Text style={styles.highlightButtonText}>VER RELATÓRIOS</Text>
              </Pressable>
            </View>
            <Text style={styles.highlightImagePlaceholder}></Text>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>
            Pronto para transformar a alfabetização?
          </Text>
          <Text style={styles.ctaDescription}>
            Explore todos os recursos e comece a usar o Alfabetiza+ hoje mesmo!
          </Text>
          <Pressable style={styles.ctaButton} onPress={onExplorar}>
            <Text style={styles.ctaButtonText}>EXPLORAR PLATAFORMA</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
             2025 Alfabetiza+ | Transformando a educação com tecnologia
          </Text>
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
      alignItems: "center",
    },
    brandText: {
      fontSize: isMobile ? 24 : 36,
      fontWeight: "bold",
      letterSpacing: 1,
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
    heroSection: {
      padding: isMobile ? 20 : 40,
      alignItems: "center",
    },
    welcomeMessage: {
      color: "#ffffff",
      fontSize: isMobile ? 22 : 32,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
      paddingHorizontal: isMobile ? 10 : 0,
    },
    illustrationContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: isMobile ? 10 : 20,
      width: isMobile ? 220 : 300,
      height: isMobile ? 220 : 300,
      position: "relative",
    },
    heroBooksImage: {
      position: "absolute",
      width: isMobile ? 200 : 260,
      height: isMobile ? 200 : 260,
      opacity: 0.9,
      transform: [{ rotate: "-6deg" }],
      zIndex: 1,
    },
    robotImage: {
      width: isMobile ? 190 : 260,
      height: isMobile ? 210 : 280,
      zIndex: 2,
    },
    featuresSection: {
      padding: isMobile ? 20 : 40,
      paddingTop: 20,
    },
    sectionTitle: {
      color: "#ffffff",
      fontSize: isMobile ? 20 : 28,
      fontWeight: "bold",
      marginBottom: 15,
      letterSpacing: 2,
    },
    divider: {
      height: 3,
      backgroundColor: "#00d4ff",
      width: isMobile ? 60 : 80,
      marginBottom: isMobile ? 20 : 30,
    },
    featureGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: isMobile ? "center" : "space-between",
      gap: isMobile ? 15 : 20,
    },
    featureCard: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "rgba(77, 77, 255, 0.3)",
      borderRadius: 15,
      padding: isMobile ? 20 : 25,
      width: isMobile ? "100%" : "30%",
      minWidth: isMobile ? undefined : 250,
      maxWidth: isMobile ? 400 : undefined,
      alignItems: "center",
      shadowColor: "#4d4dff",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    featureIcon: {
      fontSize: isMobile ? 40 : 48,
      marginBottom: 15,
    },
    featureTitle: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },
    featureDescription: {
      color: "#ffffff",
      fontSize: isMobile ? 13 : 14,
      textAlign: "center",
      opacity: 0.8,
      lineHeight: isMobile ? 18 : 20,
    },
    highlightSection: {
      padding: isMobile ? 20 : 40,
      paddingTop: 20,
    },
    highlightCard: {
      flexDirection: isMobile ? "column" : "row",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "#00d4ff",
      borderRadius: 20,
      padding: isMobile ? 20 : 30,
      marginBottom: isMobile ? 20 : 30,
      alignItems: "center",
      gap: isMobile ? 20 : 30,
    },
    highlightCardReverse: {
      flexDirection: isMobile ? "column" : "row-reverse",
    },
    highlightImage: {
      width: isMobile ? 120 : 150,
      height: isMobile ? 120 : 150,
    },
    highlightImagePlaceholder: {
      fontSize: isMobile ? 80 : 120,
      opacity: 0.8,
    },
    highlightContent: {
      flex: 1,
      width: isMobile ? "100%" : undefined,
    },
    highlightTitle: {
      color: "#ffffff",
      fontSize: isMobile ? 20 : 24,
      fontWeight: "bold",
      marginBottom: 15,
      textAlign: isMobile ? "center" : "left",
    },
    highlightDescription: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 16,
      lineHeight: isMobile ? 20 : 24,
      opacity: 0.9,
      marginBottom: 20,
      textAlign: isMobile ? "center" : "left",
    },
    highlightButton: {
      backgroundColor: "#00d4ff",
      borderRadius: 25,
      paddingVertical: isMobile ? 10 : 12,
      paddingHorizontal: isMobile ? 20 : 25,
      alignSelf: isMobile ? "center" : "flex-start",
      shadowColor: "#00d4ff",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    highlightButtonText: {
      color: "#0a0a2e",
      fontSize: isMobile ? 12 : 14,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    ctaSection: {
      padding: isMobile ? 25 : 40,
      alignItems: "center",
      backgroundColor: "rgba(0, 212, 255, 0.1)",
      marginHorizontal: isMobile ? 20 : 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "#00d4ff",
    },
    ctaTitle: {
      color: "#ffffff",
      fontSize: isMobile ? 22 : 28,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 15,
      paddingHorizontal: isMobile ? 10 : 0,
    },
    ctaDescription: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 16,
      textAlign: "center",
      marginBottom: 25,
      opacity: 0.9,
      paddingHorizontal: isMobile ? 10 : 0,
    },
    ctaButton: {
      backgroundColor: "#00d4ff",
      borderRadius: 25,
      paddingVertical: isMobile ? 12 : 15,
      paddingHorizontal: isMobile ? 30 : 40,
      shadowColor: "#00d4ff",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    ctaButtonText: {
      color: "#0a0a2e",
      fontSize: isMobile ? 14 : 16,
      fontWeight: "bold",
      letterSpacing: 2,
    },
    footer: {
      padding: isMobile ? 20 : 40,
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: "rgba(255, 255, 255, 0.1)",
      marginTop: isMobile ? 20 : 40,
    },
    footerText: {
      color: "#ffffff",
      fontSize: isMobile ? 12 : 14,
      opacity: 0.6,
      textAlign: "center",
      paddingHorizontal: isMobile ? 10 : 0,
    },
  });
}
