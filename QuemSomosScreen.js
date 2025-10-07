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

export default function QuemSomosScreen({ onVoltar }) {
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
            <Text style={styles.alfa}>ALFA</Text>
            <Text style={styles.bet}>BET</Text>
            <Text style={styles.iz}>IZ</Text>
            <Text style={styles.a}>A</Text>
            <Text style={styles.plus}>+</Text>
          </Text>
        </View>

        {/* Conteúdo Principal */}
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>QUEM NÓS SOMOS</Text>
            <View style={styles.divider} />

            <Text style={styles.description}>
              O <Text style={styles.highlight}>Alfabetiza+</Text> é uma
              plataforma inovadora de inteligência artificial desenvolvida para
              auxiliar no processo de letramento e alfabetização infantil. Nossa
              missão é tornar o aprendizado mais acessível, divertido e eficaz
              para crianças em fase de alfabetização.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>NOSSOS SERVIÇOS</Text>
            <View style={styles.divider} />

            <View style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>📚</Text>
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceName}>
                  Leitura Interativa Assistida
                </Text>
                <Text style={styles.serviceDescription}>
                  Nossa IA acompanha a leitura da criança em tempo real,
                  oferecendo suporte personalizado, correções gentis e incentivo
                  constante para desenvolver fluência e compreensão.
                </Text>
              </View>
            </View>

            <View style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>✍️</Text>
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceName}>
                  Exercícios de Escrita Adaptáveis
                </Text>
                <Text style={styles.serviceDescription}>
                  Atividades personalizadas que se adaptam ao nível de cada
                  criança, incluindo reconhecimento de letras, formação de
                  palavras e construção de frases, com feedback imediato.
                </Text>
              </View>
            </View>

            <View style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🎮</Text>
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceName}>Jogos Educativos</Text>
                <Text style={styles.serviceDescription}>
                  Jogos lúdicos que ensinam fonemas, sílabas e palavras de forma
                  divertida, mantendo as crianças engajadas no processo de
                  aprendizagem.
                </Text>
              </View>
            </View>

            <View style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🎯</Text>
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceName}>
                  Avaliação de Progresso
                </Text>
                <Text style={styles.serviceDescription}>
                  Sistema inteligente de acompanhamento que identifica pontos
                  fortes e áreas que precisam de mais atenção, fornecendo
                  relatórios detalhados para educadores e responsáveis.
                </Text>
              </View>
            </View>

            <View style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🤖</Text>
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceName}>
                  Assistente Virtual Personalizado
                </Text>
                <Text style={styles.serviceDescription}>
                  Um companheiro de aprendizagem que responde dúvidas, oferece
                  dicas e encoraja a criança durante toda a jornada de
                  alfabetização, criando uma experiência única e motivadora.
                </Text>
              </View>
            </View>

            <View style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>📊</Text>
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceName}>
                  Dashboard para Educadores
                </Text>
                <Text style={styles.serviceDescription}>
                  Painel completo para professores acompanharem o desempenho da
                  turma, identificarem dificuldades coletivas e individuais, e
                  personalizarem estratégias pedagógicas.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>NOSSA VISÃO</Text>
            <View style={styles.divider} />
            <Text style={styles.description}>
              Acreditamos que cada criança aprende em seu próprio ritmo e
              merece uma experiência educacional que respeite suas
              individualidades. Com tecnologia de ponta e metodologias
              comprovadas, o <Text style={styles.highlight}>Alfabetiza+</Text>{" "}
              está revolucionando a forma como as crianças aprendem a ler e
              escrever.
            </Text>
          </View>

          {/* Imagem decorativa */}
          <View style={styles.illustrationContainer}>
            <Image
              source={require("./assets/robo.png")}
              style={styles.robotImage}
              resizeMode="contain"
            />
          </View>
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
  },
  voltarButton: {
    marginBottom: 20,
    padding: 10,
    alignSelf: "flex-start",
  },
  voltarText: {
    color: "#00d4ff",
    fontSize: 16,
    fontWeight: "600",
  },
  brandText: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },
  alfa: {
    color: "#ffffff",
  },
  bet: {
    color: "#00d4ff",
  },
  iz: {
    color: "#ff00ff",
  },
  a: {
    color: "#ffff00",
  },
  plus: {
    color: "#00ff00",
  },
  content: {
    padding: 20,
    paddingHorizontal: 40,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  section: {
    marginBottom: 40,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 2,
  },
  subtitle: {
    color: "#00d4ff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 1,
  },
  divider: {
    height: 3,
    backgroundColor: "#00d4ff",
    width: 80,
    marginBottom: 20,
  },
  description: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    opacity: 0.9,
  },
  highlight: {
    color: "#00d4ff",
    fontWeight: "bold",
  },
  serviceCard: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "rgba(77, 77, 255, 0.3)",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#4d4dff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  iconContainer: {
    marginRight: 20,
    justifyContent: "flex-start",
    paddingTop: 5,
  },
  icon: {
    fontSize: 32,
  },
  serviceContent: {
    flex: 1,
  },
  serviceName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  serviceDescription: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
  },
  illustrationContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  robotImage: {
    width: 200,
    height: 200,
  },
});
