import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import colors from '../../theme/colors';

const mockData = [
  { date: 'Jueves 16 abr', range: '08:30 — 18:10', hours: '9h 40m', completed: true },
  { date: 'Miércoles 15 abr', range: '08:15 — 17:45', hours: '9h 30m', completed: true },
  { date: 'Martes 14 abr', range: '08:50 — 18:10', hours: '9h 20m', completed: true },
  { date: 'Lunes 13 abr', range: '08:05 — 17:30', hours: '9h 25m', completed: true },
  { date: 'Viernes 11 abr', range: '09:00 — 17:00', hours: '8h 00m', completed: true },
  { date: 'Jueves 10 abr', range: '08:30 — 17:50', hours: '9h 20m', completed: true },
  { date: 'Miércoles 9 abr', range: '08:20 — 18:00', hours: '9h 40m', completed: true },
  { date: 'Martes 8 abr', range: '08:45 — 17:30', hours: '8h 45m', completed: true },
];

const HistoryScreen = () => {
  const totalHours = '47h';
  const totalDays = 18;
  const avgHours = '9h';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Historial</Text>
        <Text style={styles.appSub}>Mis jornadas</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryVal}>{totalHours}</Text>
            <Text style={styles.summaryLbl}>Esta semana</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryVal}>{totalDays}</Text>
            <Text style={styles.summaryLbl}>Días este mes</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryVal}>{avgHours}</Text>
            <Text style={styles.summaryLbl}>Prom. diario</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>Abril 2026</Text>

        {mockData.map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <View style={styles.historyLeft}>
              <Text style={styles.historyDate}>{item.date}</Text>
              <Text style={styles.historyRange}>{item.range}</Text>
            </View>
            <Text style={styles.historyHours}>{item.hours}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    paddingBottom: 10,
    backgroundColor: colors.surface,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  appName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  appSub: {
    fontSize: 10,
    color: colors.textHint,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 8,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryVal: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  summaryLbl: {
    fontSize: 10,
    color: colors.textHint,
    textAlign: 'center',
  },
  summaryDivider: {
    width: 0.5,
    height: 36,
    backgroundColor: colors.border,
  },
  sectionLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 4,
    marginTop: 4,
  },
  historyItem: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  historyLeft: {
    gap: 2,
  },
  historyDate: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
  },
  historyRange: {
    fontSize: 10,
    color: colors.textHint,
  },
  historyHours: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.primaryLight,
  },
});

export default HistoryScreen;