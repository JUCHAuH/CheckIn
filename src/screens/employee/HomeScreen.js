import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import ClockCard from '../../components/employee/ClockCard';
import Button from '../../components/common/Button';
import colors from '../../theme/colors';

const mockHistory = [
  { date: 'Miércoles 15 abr', range: '08:15 — 17:45', hours: '9h 30m' },
  { date: 'Martes 14 abr', range: '08:50 — 18:10', hours: '9h 20m' },
  { date: 'Lunes 13 abr', range: '08:05 — 17:30', hours: '9h 25m' },
];

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Buen día';
  if (h < 18) return 'Buenas tardes';
  return 'Buenas noches';
};

const HomeScreen = () => {
  const { user } = useAuth();
  const [isWorking, setIsWorking] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    const now = new Date();
    setStartTime(now);
    setIsWorking(true);
    intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsWorking(false);
    setSeconds(0);
    setStartTime(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Registro</Text>
        <Text style={styles.appSub}>Control de asistencia</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>{getGreeting()},</Text>
          <Text style={styles.workerName}>{user?.name}</Text>
        </View>

        <ClockCard isWorking={isWorking} seconds={seconds} startTime={startTime} />

        {!isWorking ? (
          <Button label="Iniciar jornada" onPress={handleStart} variant="primary" />
        ) : (
          <Button label="Finalizar jornada" onPress={handleStop} variant="danger" />
        )}

        <View>
          <Text style={styles.sectionLabel}>Últimas jornadas</Text>
          {mockHistory.map((item, i) => (
            <View key={i} style={styles.historyItem}>
              <View>
                <Text style={styles.historyDate}>{item.date}</Text>
                <Text style={styles.historyRange}>{item.range}</Text>
              </View>
              <Text style={styles.historyHours}>{item.hours}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    padding: 16,
    paddingBottom: 10,
    backgroundColor: colors.surface,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  appName: { fontSize: 16, fontWeight: '500', color: colors.text },
  appSub: { fontSize: 10, color: colors.textHint },
  scroll: { flex: 1 },
  body: { padding: 16, gap: 12 },
  greeting: { marginBottom: 4 },
  greetingText: { fontSize: 13, color: colors.textHint },
  workerName: { fontSize: 20, fontWeight: '500', color: colors.text },
  sectionLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  historyItem: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  historyDate: { fontSize: 12, color: colors.text, fontWeight: '500' },
  historyRange: { fontSize: 10, color: colors.textHint },
  historyHours: { fontSize: 13, color: colors.primaryLight, fontWeight: '500' },
});

export default HomeScreen;
