import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import colors from '../../theme/colors';

const historyData = [
  {
    date: 'Jueves 16 abr',
    records: [
      { initials: 'CG', name: 'Carlos García', range: '08:30 — 18:10', hours: '9h 40m', km: '12.7 km' },
      { initials: 'ML', name: 'María López', range: '08:05 — 17:45', hours: '9h 40m', km: '10.2 km' },
      { initials: 'RV', name: 'Roberto Vera', range: '09:10 — 18:00', hours: '8h 50m', km: '8.5 km' },
      { initials: 'AM', name: 'Ana Mamani', range: '08:50 — 17:30', hours: '8h 40m', km: '9.1 km' },
    ],
  },
  {
    date: 'Miércoles 15 abr',
    records: [
      { initials: 'CG', name: 'Carlos García', range: '08:15 — 17:45', hours: '9h 30m', km: '11.3 km' },
      { initials: 'ML', name: 'María López', range: '08:00 — 17:30', hours: '9h 30m', km: '9.8 km' },
      { initials: 'RV', name: 'Roberto Vera', range: '08:45 — 17:50', hours: '9h 05m', km: '7.9 km' },
      { initials: 'AM', name: 'Ana Mamani', range: '08:30 — 17:00', hours: '8h 30m', km: '8.4 km' },
      { initials: 'JP', name: 'Jorge Pinto', range: '09:00 — 17:00', hours: '8h 00m', km: '6.2 km' },
    ],
  },
];

const avatarColors = ['#1e2a40', '#1a2e1a', '#2a2010', '#251a35', '#2a1a1a'];

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Historial</Text>
          <Text style={styles.appSub}>Registro de jornadas</Text>
        </View>
        <View style={styles.adminBadge}>
          <Text style={styles.adminBadgeText}>Admin</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statRow}>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>5</Text>
            <Text style={styles.statLbl}>Empleados</Text>
          </View>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>18</Text>
            <Text style={styles.statLbl}>Jornadas mes</Text>
          </View>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>9h</Text>
            <Text style={styles.statLbl}>Prom. diario</Text>
          </View>
        </View>

        {historyData.map((day, dayIndex) => (
          <View key={dayIndex}>
            <Text style={styles.sectionLabel}>{day.date}</Text>
            {day.records.map((rec, recIndex) => (
              <View key={recIndex} style={styles.recordRow}>
                <View style={[
                  styles.avatar,
                  { backgroundColor: avatarColors[recIndex % avatarColors.length] }
                ]}>
                  <Text style={styles.avatarText}>{rec.initials}</Text>
                </View>
                <View style={styles.recInfo}>
                  <Text style={styles.recName}>{rec.name}</Text>
                  <Text style={styles.recRange}>{rec.range}</Text>
                </View>
                <View style={styles.recRight}>
                  <Text style={styles.recHours}>{rec.hours}</Text>
                  <Text style={styles.recKm}>{rec.km}</Text>
                </View>
              </View>
            ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  adminBadge: {
    backgroundColor: '#1e1a30',
    borderWidth: 0.5,
    borderColor: '#3a2a50',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  adminBadgeText: {
    fontSize: 11,
    color: colors.admin,
  },
  scroll: { flex: 1 },
  scrollContent: {
    padding: 16,
    gap: 8,
  },
  statRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  statTile: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 12,
    alignItems: 'center',
  },
  statVal: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  statLbl: {
    fontSize: 9,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginTop: 8,
    marginBottom: 6,
  },
  recordRow: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.white,
  },
  recInfo: { flex: 1 },
  recName: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  recRange: {
    fontSize: 10,
    color: colors.textHint,
  },
  recRight: { alignItems: 'flex-end', gap: 2 },
  recHours: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.primaryLight,
  },
  recKm: {
    fontSize: 10,
    color: colors.textHint,
  },
});

export default HistoryScreen;