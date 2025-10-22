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

export default function AtividadesScreen({ onVoltar, nomeUsuario }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const styles = createStyles(isMobile);

  const atividades = [
    { 
      id: 1, 
      titulo: "Reconhecimento de Letras", 
      tipo: "Alfabeto",
      dificuldade: "Fácil",
      icone: "🔤",
      cor: "#FF3B5C"
    },
    { 
      id: 2, 
      titulo: "Formação de Sílabas", 
      tipo: "Fonética",
      dificuldade: "Médio",
      icone: "🔡",
      cor: "#FFD23F"
    },
    { 
      id: 3, 
      titulo: "Completar Palavras", 
      tipo: "Vocabulário",
      dificuldade: "Médio",
      icone: "✏️",
      cor: "#2DD4BF"
    },
    { 
      id: 4, 
      titulo: "Escrita Criativa", 
      tipo: "Redação",
      dificuldade: "Difícil",
      icone: "📝",
      cor: "#845EF7"
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
            <Text style={styles.pageIcon}>✏️</Text>
            <Text style={styles.title}>ATIVIDADES INTERATIVAS</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
              Exercícios personalizados com correção automática da IA
            </Text>
          </View>

          {/* Ferramentas de Criação */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FERRAMENTAS</Text>
            
            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>📋</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Planos de Aula</Text>
                <Text style={styles.toolDescription}>
                  Crie planos personalizados com a ajuda da IA
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>

            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>🎯</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Atividades Personalizadas</Text>
                <Text style={styles.toolDescription}>
                  Gere exercícios adaptados ao nível de cada aluno
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>

            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>✅</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Correção Automática</Text>
                <Text style={styles.toolDescription}>
                  Feedback instantâneo com sugestões de melhoria
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>
          </View>

          {/* Atividades Disponíveis */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ATIVIDADES DISPONÍVEIS</Text>
            
            {atividades.map((atividade) => (
              <Pressable 
                key={atividade.id} 
                style={[styles.atividadeCard, { borderLeftColor: atividade.cor }]}
              >
                <Text style={styles.atividadeIcon}>{atividade.icone}</Text>
                <View style={styles.atividadeInfo}>
                  <Text style={styles.atividadeTitulo}>{atividade.titulo}</Text>
                  <View style={styles.atividadeTags}>
                    <Text style={[styles.tag, styles.tagTipo]}>{atividade.tipo}</Text>
                    <Text style={[styles.tag, styles.tagDificuldade]}>
                      {atividade.dificuldade}
                    </Text>
                  </View>
                </View>
                <Pressable style={styles.comecarButton}>
                  <Text style={styles.comecarButtonText}>COMEÇAR</Text>
                </Pressable>
              </Pressable>
            ))}
          </View>

          {/* Estatísticas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROGRESSO</Text>
            
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>24</Text>
                <Text style={styles.statLabel}>Atividades Concluídas</Text>
              </View>
              
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>87%</Text>
                <Text style={styles.statLabel}>Taxa de Acerto</Text>
              </View>
              
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Dias Consecutivos</Text>
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
      fontSize: isMobile ? 22 : 32,
      fontWeight: "bold",
      marginBottom: 15,
      letterSpacing: 2,
      textAlign: "center",
    },
    divider: {
      height: 3,
      backgroundColor: "#FFD23F",
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
      borderColor: "rgba(255, 210, 63, 0.3)",
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
      color: "#FFD23F",
      fontSize: isMobile ? 24 : 28,
      fontWeight: "bold",
    },
    atividadeCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderLeftWidth: 4,
      borderRadius: 10,
      padding: isMobile ? 15 : 18,
      marginBottom: 12,
    },
    atividadeIcon: {
      fontSize: isMobile ? 40 : 50,
      marginRight: 15,
    },
    atividadeInfo: {
      flex: 1,
    },
    atividadeTitulo: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    atividadeTags: {
      flexDirection: "row",
      gap: 8,
    },
    tag: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: 12,
      fontSize: isMobile ? 11 : 12,
      fontWeight: "600",
    },
    tagTipo: {
      backgroundColor: "rgba(45, 212, 191, 0.2)",
      color: "#2DD4BF",
    },
    tagDificuldade: {
      backgroundColor: "rgba(255, 138, 61, 0.2)",
      color: "#FF8A3D",
    },
    comecarButton: {
      backgroundColor: "#FFD23F",
      borderRadius: 20,
      paddingVertical: isMobile ? 8 : 10,
      paddingHorizontal: isMobile ? 18 : 22,
    },
    comecarButtonText: {
      color: "#0a0a2e",
      fontSize: isMobile ? 12 : 13,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    statsGrid: {
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 12 : 15,
      justifyContent: "space-between",
    },
    statCard: {
      backgroundColor: "rgba(0, 212, 255, 0.1)",
      borderWidth: 2,
      borderColor: "rgba(0, 212, 255, 0.3)",
      borderRadius: 15,
      padding: isMobile ? 20 : 25,
      flex: isMobile ? 0 : 1,
      alignItems: "center",
    },
    statNumber: {
      color: "#00d4ff",
      fontSize: isMobile ? 32 : 40,
      fontWeight: "bold",
      marginBottom: 8,
    },
    statLabel: {
      color: "#ffffff",
      fontSize: isMobile ? 13 : 14,
      textAlign: "center",
      opacity: 0.8,
    },
  });
}
