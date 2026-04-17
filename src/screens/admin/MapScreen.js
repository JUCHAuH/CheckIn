import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import colors from '../../theme/colors';

const employees = [
  { id: '1', initials: 'CG', name: 'Carlos García', status: 'active', location: 'Av. Heroínas' },
  { id: '2', initials: 'ML', name: 'María López', status: 'active', location: 'Calle Sucre' },
  { id: '3', initials: 'RV', name: 'Roberto Vera', status: 'late', location: 'Calle 25 de Mayo' },
  { id: '4', initials: 'AM', name: 'Ana Mamani', status: 'active', location: 'Av. Blanco Galindo' },
  { id: '5', initials: 'JP', name: 'Jorge Pinto', status: 'inactive', location: null },
];

const statusConfig = {
  active: { label: 'activo', color: colors.success },
  late: { label: 'retrasado', color: colors.warning },
  inactive: { label: 'inactivo', color: colors.textHint },
};

const avatarColors = ['#1e2a40', '#1a2e1a', '#2a2010', '#251a35', '#2a1a1a'];

const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Mapa</Text>
          <Text style={styles.appSub}>Tiempo real</Text>
        </View>
        <View style={styles.adminBadge}>
          <Text style={styles.adminBadgeText}>Admin</Text>
        </View>
      </View>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapTitle}>Mapa en tiempo real</Text>
        <Text style={styles.mapSub}>Se conectará con Google Maps API</Text>
        <View style={styles.mapDots}>
          {employees.filter(e => e.status !== 'inactive').map((emp, index) => (
            <View
              key={emp.id}
              style={[
                styles.mapDot,
                { backgroundColor: avatarColors[index] }
              ]}
            >
              <Text style={styles.mapDotText}>{emp.initials}</Text>
            </View>
          ))}
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>Ubicaciones actuales</Text>

        {employees.map((emp, index) => (
          <View key={emp.id} style={styles.empRow}>
            <View style={[styles.avatar, { backgroundColor: avatarColors[index] }]}>
              <Text style={styles.avatarText}>{emp.initials}</Text>
            </View>
            <View style={styles.empInfo}>
              <Text style={styles.empName}>{emp.name}</Text>
              <Text style={styles.empLocation}>
                {emp.location ?? 'Sin ubicación'}
              </Text>
            </View>
            <Text style={[
              styles.empStatus,
              { color: statusConfig[emp.status].color }
            ]}>
              ● {statusConfig[emp.status].label}
            </Text>
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
  mapPlaceholder: {
    height: 220,
    backgroundColor: colors.surface,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  mapTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textMuted,
  },
  mapSub: {
    fontSize: 11,
    color: colors.textHint,
  },
  mapDots: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  mapDot: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primaryLight,
  },
  mapDotText: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.white,
  },
  scroll: { flex: 1 },
  scrollContent: {
    padding: 16,
    gap: 8,
  },
  sectionLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  empRow: {
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
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.white,
  },
  empInfo: { flex: 1 },
  empName: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  empLocation: {
    fontSize: 10,
    color: colors.textHint,
  },
  empStatus: {
    fontSize: 10,
  },
});

export default MapScreen;