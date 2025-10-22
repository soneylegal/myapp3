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

export default function QuemSomosScreen({ onVoltar }) {
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
  section: {
    marginBottom: isMobile ? 30 : 40,
  },
  title: {
    color: "#ffffff",
    fontSize: isMobile ? 24 : 32,
    fontWeight: "bold",
    marginBottom: isMobile ? 12 : 15,
    letterSpacing: isMobile ? 1 : 2,
  },
  subtitle: {
    color: "#00d4ff",
    fontSize: isMobile ? 20 : 24,
    fontWeight: "bold",
    marginBottom: isMobile ? 12 : 15,
    letterSpacing: 1,
  },
  divider: {
    height: 3,
    backgroundColor: "#00d4ff",
    width: isMobile ? 60 : 80,
    marginBottom: isMobile ? 15 : 20,
  },
  description: {
    color: "#ffffff",
    fontSize: isMobile ? 14 : 16,
    lineHeight: isMobile ? 22 : 26,
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
    padding: isMobile ? 15 : 20,
    marginBottom: isMobile ? 15 : 20,
    shadowColor: "#4d4dff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  iconContainer: {
    marginRight: isMobile ? 12 : 20,
    justifyContent: "flex-start",
    paddingTop: 5,
  },
  icon: {
    fontSize: isMobile ? 28 : 32,
  },
  serviceContent: {
    flex: 1,
  },
  serviceName: {
    color: "#ffffff",
    fontSize: isMobile ? 16 : 18,
    fontWeight: "bold",
    marginBottom: isMobile ? 6 : 8,
  },
  serviceDescription: {
    color: "#ffffff",
    fontSize: isMobile ? 13 : 14,
    lineHeight: isMobile ? 20 : 22,
    opacity: 0.8,
  },
  illustrationContainer: {
    alignItems: "center",
    marginTop: isMobile ? 15 : 20,
  },
  robotImage: {
    width: isMobile ? 150 : 200,
    height: isMobile ? 150 : 200,
  },
  });
}
