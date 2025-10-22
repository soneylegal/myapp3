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

export default function AcompanhamentoScreen({ onVoltar, nomeUsuario }) {
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
            <Text style={styles.pageIcon}>📊</Text>
            <Text style={styles.title}>ACOMPANHAMENTO</Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>
              Monitore o progresso e gere relatórios detalhados
            </Text>
          </View>

          {/* Resumo Geral */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>VISÃO GERAL DA TURMA</Text>
            
            <View style={styles.metricsGrid}>
              <View style={styles.metricCard}>
                <Text style={styles.metricIcon}>👥</Text>
                <Text style={styles.metricValue}>28</Text>
                <Text style={styles.metricLabel}>Alunos Ativos</Text>
              </View>

              <View style={styles.metricCard}>
                <Text style={styles.metricIcon}>📈</Text>
                <Text style={styles.metricValue}>85%</Text>
                <Text style={styles.metricLabel}>Taxa de Progresso</Text>
              </View> 

              <View style={styles.metricCard}>
                <Text style={styles.metricIcon}>⭐</Text>
                <Text style={styles.metricValue}>92%</Text>
                <Text style={styles.metricLabel}>Engajamento</Text>
              </View>

              <View style={styles.metricCard}>
                <Text style={styles.metricIcon}>🎯</Text>
                <Text style={styles.metricValue}>156</Text>
                <Text style={styles.metricLabel}>Atividades Concluídas</Text>
              </View>
            </View>
          </View>

          {/* Ferramentas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FERRAMENTAS</Text>
            
            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>📊</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Dashboard Completo</Text>
                <Text style={styles.toolDescription}>
                  Visualize gráficos e estatísticas da turma em tempo real
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>

            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>📄</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Relatórios Personalizados</Text>
                <Text style={styles.toolDescription}>
                  Gere relatórios individuais ou por grupo de alunos
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>

            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>🎯</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Metas e Objetivos</Text>
                <Text style={styles.toolDescription}>
                  Defina e acompanhe metas personalizadas para cada aluno
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>

            <Pressable style={styles.toolCard}>
              <Text style={styles.toolIcon}>🔔</Text>
              <View style={styles.toolContent}>
                <Text style={styles.toolName}>Alertas Inteligentes</Text>
                <Text style={styles.toolDescription}>
                  Receba notificações sobre alunos que precisam de atenção
                </Text>
              </View>
              <Text style={styles.toolArrow}>→</Text>
            </Pressable>
          </View>

          {/* Destaques da Semana */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>DESTAQUES DA SEMANA</Text>
            
            <View style={styles.destaqueCard}>
              <View style={styles.destaqueHeader}>
                <Text style={styles.destaqueTipo}>🏆 MELHOR DESEMPENHO</Text>
              </View>
              <Text style={styles.destaqueAluno}>Maria Silva</Text>
              <Text style={styles.destaqueInfo}>
                Completou 12 atividades com 95% de aproveitamento
              </Text>
            </View>

            <View style={styles.destaqueCard}>
              <View style={styles.destaqueHeader}>
                <Text style={styles.destaqueTipo}>⚡ MAIOR EVOLUÇÃO</Text>
              </View>
              <Text style={styles.destaqueAluno}>João Santos</Text>
              <Text style={styles.destaqueInfo}>
                Melhorou 40% em leitura nas últimas duas semanas
              </Text>
            </View>

            <View style={styles.destaqueCard}>
              <View style={styles.destaqueHeader}>
                <Text style={styles.destaqueTipo}>🎯 DEDICAÇÃO</Text>
              </View>
              <Text style={styles.destaqueAluno}>Ana Paula</Text>
              <Text style={styles.destaqueInfo}>
                14 dias consecutivos de atividades diárias
              </Text>
            </View>
          </View>

          {/* Alertas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ATENÇÃO NECESSÁRIA</Text>
            
            <View style={styles.alertCard}>
              <Text style={styles.alertIcon}>⚠️</Text>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitulo}>3 alunos inativos</Text>
                <Text style={styles.alertDesc}>
                  Sem atividades nos últimos 7 dias
                </Text>
              </View>
              <Pressable style={styles.alertButton}>
                <Text style={styles.alertButtonText}>VER</Text>
              </Pressable>
            </View>

            <View style={styles.alertCard}>
              <Text style={styles.alertIcon}>📉</Text>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitulo}>5 alunos com dificuldade</Text>
                <Text style={styles.alertDesc}>
                  Taxa de acerto abaixo de 60%
                </Text>
              </View>
              <Pressable style={styles.alertButton}>
                <Text style={styles.alertButtonText}>VER</Text>
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
      backgroundColor: "#845EF7",
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
    metricsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: isMobile ? 12 : 15,
      justifyContent: "space-between",
    },
    metricCard: {
      backgroundColor: "rgba(132, 94, 247, 0.1)",
      borderWidth: 2,
      borderColor: "rgba(132, 94, 247, 0.3)",
      borderRadius: 15,
      padding: isMobile ? 18 : 22,
      width: isMobile ? "48%" : "23%",
      alignItems: "center",
    },
    metricIcon: {
      fontSize: isMobile ? 35 : 40,
      marginBottom: 10,
    },
    metricValue: {
      color: "#845EF7",
      fontSize: isMobile ? 28 : 32,
      fontWeight: "bold",
      marginBottom: 5,
    },
    metricLabel: {
      color: "#ffffff",
      fontSize: isMobile ? 12 : 13,
      textAlign: "center",
      opacity: 0.8,
    },
    toolCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 2,
      borderColor: "rgba(132, 94, 247, 0.3)",
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
      color: "#845EF7",
      fontSize: isMobile ? 24 : 28,
      fontWeight: "bold",
    },
    destaqueCard: {
      backgroundColor: "rgba(0, 212, 255, 0.05)",
      borderLeftWidth: 4,
      borderLeftColor: "#00d4ff",
      borderRadius: 12,
      padding: isMobile ? 18 : 22,
      marginBottom: 15,
    },
    destaqueHeader: {
      marginBottom: 12,
    },
    destaqueTipo: {
      color: "#00d4ff",
      fontSize: isMobile ? 12 : 13,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    destaqueAluno: {
      color: "#ffffff",
      fontSize: isMobile ? 18 : 20,
      fontWeight: "bold",
      marginBottom: 8,
    },
    destaqueInfo: {
      color: "#ffffff",
      fontSize: isMobile ? 14 : 15,
      opacity: 0.8,
      lineHeight: isMobile ? 20 : 22,
    },
    alertCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 138, 61, 0.1)",
      borderWidth: 2,
      borderColor: "rgba(255, 138, 61, 0.3)",
      borderRadius: 12,
      padding: isMobile ? 15 : 18,
      marginBottom: 12,
    },
    alertIcon: {
      fontSize: isMobile ? 35 : 40,
      marginRight: 15,
    },
    alertContent: {
      flex: 1,
    },
    alertTitulo: {
      color: "#ffffff",
      fontSize: isMobile ? 16 : 17,
      fontWeight: "bold",
      marginBottom: 5,
    },
    alertDesc: {
      color: "#FF8A3D",
      fontSize: isMobile ? 13 : 14,
    },
    alertButton: {
      backgroundColor: "#FF8A3D",
      borderRadius: 15,
      paddingVertical: isMobile ? 8 : 10,
      paddingHorizontal: isMobile ? 15 : 18,
    },
    alertButtonText: {
      color: "#ffffff",
      fontSize: isMobile ? 12 : 13,
      fontWeight: "bold",
    },
  });
}
