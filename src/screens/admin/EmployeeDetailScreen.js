import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from '../../theme/colors';

const timeline = [
  { time: '08:30', label: 'Inicio de jornada', addr: 'Ubicación de salida', color: '#4caf50' },
  { time: '09:15', label: 'Parada · 18 min', addr: 'Av. Heroínas 342', color: '#ff9800' },
  { time: '10:50', label: 'Parada · 22 min', addr: 'Calle Sucre 890', color: '#ff9800' },
  { time: '12:30', label: 'Parada · 35 min', addr: 'Calle 25 de Mayo 110', color: '#ff9800' },
  { time: 'ahora', label: 'En movimiento', addr: 'Dirección norte', color: colors.primaryLight },
];

const EmployeeDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { employee } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>← Volver</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.appName}>Detalle</Text>
          <Text style={styles.appSub}>Ruta del día</Text>
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
        <View style={styles.empCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{employee.initials}</Text>
          </View>
          <View style={styles.empInfo}>
            <Text style={styles.empName}>{employee.name}</Text>
            <Text style={styles.empSub}>{employee.role} · activo ahora</Text>
          </View>
          <View style={styles.empRight}>
            <Text style={styles.empHours}>{employee.hours ?? '—'}</Text>
            <Text style={styles.empSince}>
              {employee.since ? `desde ${employee.since}` : 'sin iniciar'}
            </Text>
          </View>
        </View>

        <View style={styles.statRow}>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>4.2</Text>
            <Text style={styles.statLbl}>km hoy</Text>
          </View>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>3</Text>
            <Text style={styles.statLbl}>paradas</Text>
          </View>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>{employee.since ?? '—'}</Text>
            <Text style={styles.statLbl}>ingreso</Text>
          </View>
        </View>

        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Mapa · ruta en tiempo real</Text>
          <Text style={styles.mapSub}>Se conectará con Google Maps</Text>
        </View>

        <Text style={styles.sectionLabel}>Línea de tiempo</Text>

        {timeline.map((item, index) => (
          <View key={index}>
            <View style={styles.timelineItem}>
              <Text style={styles.timelineTime}>{item.time}</Text>
              <View style={[styles.timelineDot, { backgroundColor: item.color }]} />
              <View style={styles.timelineInfo}>
                <Text style={[styles.timelineLabel, { color: item.color === colors.primaryLight ? colors.primaryLight : colors.text }]}>
                  {item.label}
                </Text>
                <Text style={styles.timelineAddr}>{item.addr}</Text>
              </View>
            </View>
            {index < timeline.length - 1 && (
              <View style={styles.timelineLine} />
            )}
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
  backBtn: {
    fontSize: 13,
    color: colors.primaryLight,
  },
  appName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
  },
  appSub: {
    fontSize: 10,
    color: colors.textHint,
    textAlign: 'center',
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
    gap: 10,
  },
  empCard: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1e2a40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
  },
  empInfo: { flex: 1 },
  empName: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  empSub: {
    fontSize: 11,
    color: colors.textHint,
  },
  empRight: { alignItems: 'flex-end' },
  empHours: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.primaryLight,
    marginBottom: 2,
  },
  empSince: {
    fontSize: 10,
    color: colors.textHint,
  },
  statRow: {
    flexDirection: 'row',
    gap: 8,
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
    fontSize: 18,
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
  mapPlaceholder: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.border,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  mapText: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
  mapSub: {
    fontSize: 11,
    color: colors.textHint,
  },
  sectionLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginTop: 4,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 4,
  },
  timelineTime: {
    fontSize: 10,
    color: colors.primaryLight,
    minWidth: 36,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  timelineInfo: { flex: 1 },
  timelineLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  timelineAddr: {
    fontSize: 10,
    color: colors.textHint,
  },
  timelineLine: {
    width: 1,
    height: 16,
    backgroundColor: colors.border,
    marginLeft: 50,
  },
});

export default EmployeeDetailScreen;