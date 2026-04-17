import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import colors from '../../theme/colors';

const HomeScreen = () => {
  const { user } = useAuth();
  const [isWorking, setIsWorking] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const formatHour = (date) => {
    if (!date) return '--:--';
    return date.toLocaleTimeString('es-BO', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buen día';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  const getDate = () => {
    return new Date().toLocaleDateString('es-BO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleStart = () => {
    const now = new Date();
    setStartTime(now);
    setIsWorking(true);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
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

      <View style={styles.body}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>{getGreeting()},</Text>
          <Text style={styles.workerName}>{user?.name}</Text>
        </View>

        <View style={styles.clockCard}>
          <Text style={styles.clockLabel}>Tiempo de jornada</Text>
          <Text style={styles.clockTime}>{formatTime(seconds)}</Text>
          {isWorking ? (
            <Text style={[styles.clockStatus, { color: colors.success }]}>
              ● Jornada en curso
            </Text>
          ) : (
            <Text style={[styles.clockStatus, { color: colors.textHint }]}>
              Jornada no iniciada
            </Text>
          )}
          <Text style={styles.clockDate}>{getDate()}</Text>
          {isWorking && (
            <Text style={styles.clockSince}>
              Inicio: {formatHour(startTime)}
            </Text>
          )}
        </View>

        {!isWorking ? (
          <TouchableOpacity style={styles.btnStart} onPress={handleStart}>
            <Text style={styles.btnText}>Iniciar jornada</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btnStop} onPress={handleStop}>
            <Text style={[styles.btnText, { color: colors.danger }]}>
              Finalizar jornada
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.historySection}>
          <Text style={styles.sectionLabel}>Últimas jornadas</Text>
          {[
            { date: 'Miércoles 15 abr', range: '08:15 — 17:45', hours: '9h 30m' },
            { date: 'Martes 14 abr', range: '08:50 — 18:10', hours: '9h 20m' },
            { date: 'Lunes 13 abr', range: '08:05 — 17:30', hours: '9h 25m' },
          ].map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <View>
                <Text style={styles.historyDate}>{item.date}</Text>
                <Text style={styles.historyRange}>{item.range}</Text>
              </View>
              <Text style={styles.historyHours}>{item.hours}</Text>
            </View>
          ))}
        </View>
      </View>
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
  body: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  greetingBox: {
    marginBottom: 4,
  },
  greeting: {
    fontSize: 13,
    color: colors.textHint,
  },
  workerName: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.text,
  },
  clockCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 24,
    alignItems: 'center',
    gap: 6,
  },
  clockLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  clockTime: {
    fontSize: 44,
    fontWeight: '500',
    color: colors.text,
    letterSpacing: 3,
  },
  clockStatus: {
    fontSize: 12,
  },
  clockDate: {
    fontSize: 11,
    color: colors.textHint,
    textTransform: 'capitalize',
  },
  clockSince: {
    fontSize: 11,
    color: colors.primaryLight,
  },
  btnStart: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  btnStop: {
    backgroundColor: 'transparent',
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.danger,
    padding: 16,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.white,
  },
  historySection: {
    gap: 6,
  },
  sectionLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 2,
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
  },
  historyDate: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
  historyRange: {
    fontSize: 10,
    color: colors.textHint,
  },
  historyHours: {
    fontSize: 13,
    color: colors.primaryLight,
    fontWeight: '500',
  },
});

export default HomeScreen;