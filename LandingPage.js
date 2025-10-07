import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LandingPage({ nomeUsuario }) {
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
            Bem-vindo(a), {nomeUsuario || "Educador"}! 🎉
          </Text>

          <View style={styles.illustrationContainer}>
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
              <Text style={styles.featureIcon}>📚</Text>
              <Text style={styles.featureTitle}>Minha Biblioteca</Text>
              <Text style={styles.featureDescription}>
                Acesse livros e materiais de leitura interativos
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}>✍️</Text>
              <Text style={styles.featureTitle}>Exercícios</Text>
              <Text style={styles.featureDescription}>
                Atividades personalizadas de escrita e alfabetização
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}>🎮</Text>
              <Text style={styles.featureTitle}>Jogos Educativos</Text>
              <Text style={styles.featureDescription}>
                Aprenda brincando com jogos divertidos
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}>📊</Text>
              <Text style={styles.featureTitle}>Progresso</Text>
              <Text style={styles.featureDescription}>
                Acompanhe o desenvolvimento dos alunos
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}>🤖</Text>
              <Text style={styles.featureTitle}>Assistente IA</Text>
              <Text style={styles.featureDescription}>
                Converse com nosso assistente inteligente
              </Text>
            </Pressable>

            <Pressable style={styles.featureCard}>
              <Text style={styles.featureIcon}>👥</Text>
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
            <Text style={styles.highlightImagePlaceholder}>📊</Text>
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
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>EXPLORAR PLATAFORMA</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 Alfabetiza+ | Transformando a educação com tecnologia
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a2e",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
  },
  brandText: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  plus: {
    color: "#00ff00",
  },
  heroSection: {
    padding: 40,
    alignItems: "center",
  },
  welcomeMessage: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heroSubtitle: {
    color: "#00d4ff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  letraA: {
    color: "#ff4757",
  },
  letraL: {
    color: "#ff6348",
  },
  letraF: {
    color: "#ffa502",
  },
  letraA2: {
    color: "#fffa65",
  },
  letraB: {
    color: "#1e90ff",
  },
  letraE: {
    color: "#00d4ff",
  },
  letraT: {
    color: "#5f27cd",
  },
  letraI: {
    color: "#ff00ff",
  },
  letraZ: {
    color: "#ff69b4",
  },
  letraA3: {
    color: "#00ff00",
  },
  illustrationContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  robotImage: {
    width: 200,
    height: 200,
  },
  featuresSection: {
    padding: 40,
    paddingTop: 20,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 2,
  },
  divider: {
    height: 3,
    backgroundColor: "#00d4ff",
    width: 80,
    marginBottom: 30,
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
  featureCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 2,
    borderColor: "rgba(77, 77, 255, 0.3)",
    borderRadius: 15,
    padding: 25,
    width: "30%",
    minWidth: 250,
    alignItems: "center",
    shadowColor: "#4d4dff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  featureTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  featureDescription: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
    opacity: 0.8,
    lineHeight: 20,
  },
  highlightSection: {
    padding: 40,
    paddingTop: 20,
  },
  highlightCard: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 2,
    borderColor: "#00d4ff",
    borderRadius: 20,
    padding: 30,
    marginBottom: 30,
    alignItems: "center",
    gap: 30,
  },
  highlightCardReverse: {
    flexDirection: "row-reverse",
  },
  highlightImage: {
    width: 150,
    height: 150,
  },
  highlightImagePlaceholder: {
    fontSize: 120,
    opacity: 0.8,
  },
  highlightContent: {
    flex: 1,
  },
  highlightTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  highlightDescription: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
    marginBottom: 20,
  },
  highlightButton: {
    backgroundColor: "#00d4ff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignSelf: "flex-start",
    shadowColor: "#00d4ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  highlightButtonText: {
    color: "#0a0a2e",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  ctaSection: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "rgba(0, 212, 255, 0.1)",
    marginHorizontal: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#00d4ff",
  },
  ctaTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  ctaDescription: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: "#00d4ff",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    shadowColor: "#00d4ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  ctaButtonText: {
    color: "#0a0a2e",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  footer: {
    padding: 40,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
    marginTop: 40,
  },
  footerText: {
    color: "#ffffff",
    fontSize: 14,
    opacity: 0.6,
  },
});
