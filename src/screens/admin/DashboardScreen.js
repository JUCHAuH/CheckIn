import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors';

const employees = [
  { id: '1', initials: 'CG', name: 'Carlos García', role: 'Promotor', since: '08:30', hours: '02:15', status: 'active' },
  { id: '2', initials: 'ML', name: 'María López', role: 'Promotora', since: '08:05', hours: '02:40', status: 'active' },
  { id: '3', initials: 'RV', name: 'Roberto Vera', role: 'Promotor', since: '09:10', hours: '01:35', status: 'late' },
  { id: '4', initials: 'AM', name: 'Ana Mamani', role: 'Promotora', since: '08:50', hours: '01:55', status: 'active' },
  { id: '5', initials: 'JP', name: 'Jorge Pinto', role: 'Promotor', since: null, hours: null, status: 'inactive' },
];

const statusConfig = {
  active: { label: 'activo', color: colors.success },
  late: { label: 'retrasado', color: colors.warning },
  inactive: { label: 'inactivo', color: colors.textHint },
};

const avatarColors = ['#1e2a40', '#1a2e1a', '#2a2010', '#251a35', '#2a1a1a'];

const DashboardScreen = () => {
  const navigation = useNavigation();
  const active = employees.filter((e) => e.status === 'active').length;
  const inactive = employees.filter((e) => e.status === 'inactive').length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Panel admin</Text>
          <Text style={styles.appSub}>
            Hoy · {new Date().toLocaleDateString('es-BO', {
              weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
            })}
          </Text>
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
            <Text style={styles.statVal}>{active}</Text>
            <Text style={styles.statLbl}>Activos</Text>
          </View>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>{inactive}</Text>
            <Text style={styles.statLbl}>Sin iniciar</Text>
          </View>
          <View style={styles.statTile}>
            <Text style={styles.statVal}>{employees.length}</Text>
            <Text style={styles.statLbl}>Total hoy</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>Empleados de hoy</Text>

        {employees.map((emp, index) => (
          <TouchableOpacity
            key={emp.id}
            style={styles.empRow}
            onPress={() =>
              navigation.navigate('EmployeeDetail', { employee: emp })
            }
          >
            <View style={[styles.avatar, { backgroundColor: avatarColors[index] }]}>
              <Text style={styles.avatarText}>{emp.initials}</Text>
            </View>
            <View style={styles.empInfo}>
              <Text style={styles.empName}>{emp.name}</Text>
              <Text style={styles.empTime}>
                {emp.since ? `Desde ${emp.since}` : 'Sin iniciar'}
              </Text>
            </View>
            <View style={styles.empRight}>
              <Text style={styles.empHours}>{emp.hours ?? '—'}</Text>
              <Text style={[styles.empStatus, { color: statusConfig[emp.status].color }]}>
                ● {statusConfig[emp.status].label}
              </Text>
            </View>
          </TouchableOpacity>
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
    textTransform: 'capitalize',
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
    marginBottom: 4,
    marginTop: 4,
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
  empInfo: {
    flex: 1,
    gap: 2,
  },
  empName: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
  empTime: {
    fontSize: 10,
    color: colors.textHint,
  },
  empRight: {
    alignItems: 'flex-end',
    gap: 3,
  },
  empHours: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.primaryLight,
  },
  empStatus: {
    fontSize: 10,
  },
});

export default DashboardScreen;