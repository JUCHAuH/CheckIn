import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const formatTime = (secs) => {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const formatHour = (date) => {
  if (!date) return '--:--';
  return date.toLocaleTimeString('es-BO', { hour: '2-digit', minute: '2-digit' });
};

const getDate = () =>
  new Date().toLocaleDateString('es-BO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const ClockCard = ({ isWorking, seconds, startTime }) => (
  <View style={styles.card}>
    <Text style={styles.label}>Tiempo de jornada</Text>
    <Text style={styles.time}>{formatTime(seconds)}</Text>
    {isWorking ? (
      <Text style={[styles.statusText, { color: colors.success }]}>● Jornada en curso</Text>
    ) : (
      <Text style={[styles.statusText, { color: colors.textHint }]}>Jornada no iniciada</Text>
    )}
    <Text style={styles.date}>{getDate()}</Text>
    {isWorking && (
      <Text style={styles.since}>Inicio: {formatHour(startTime)}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 24,
    alignItems: 'center',
    gap: 6,
  },
  label: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  time: {
    fontSize: 44,
    fontWeight: '500',
    color: colors.text,
    letterSpacing: 3,
  },
  statusText: {
    fontSize: 12,
  },
  date: {
    fontSize: 11,
    color: colors.textHint,
    textTransform: 'capitalize',
  },
  since: {
    fontSize: 11,
    color: colors.primaryLight,
  },
});

export default ClockCard;
