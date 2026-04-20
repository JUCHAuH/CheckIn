import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmployeeRow from '../../components/admin/EmployeeRow';
import StatTile from '../../components/admin/StatTile';
import colors from '../../theme/colors';

const employees = [
  { id: '1', initials: 'CG', name: 'Carlos García', role: 'Promotor', since: '08:30', hours: '02:15', status: 'active' },
  { id: '2', initials: 'ML', name: 'María López', role: 'Promotora', since: '08:05', hours: '02:40', status: 'active' },
  { id: '3', initials: 'RV', name: 'Roberto Vera', role: 'Promotor', since: '09:10', hours: '01:35', status: 'late' },
  { id: '4', initials: 'AM', name: 'Ana Mamani', role: 'Promotora', since: '08:50', hours: '01:55', status: 'active' },
  { id: '5', initials: 'JP', name: 'Jorge Pinto', role: 'Promotor', since: null, hours: null, status: 'inactive' },
];

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
              weekday: 'long', day: 'numeric', month: 'short', year: 'numeric',
            })}
          </Text>
        </View>
        <View style={styles.adminBadge}>
          <Text style={styles.adminBadgeText}>Admin</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statRow}>
          <StatTile value={active} label="Activos" />
          <StatTile value={inactive} label="Sin iniciar" />
          <StatTile value={employees.length} label="Total hoy" />
        </View>

        <Text style={styles.sectionLabel}>Empleados de hoy</Text>

        {employees.map((emp, i) => (
          <EmployeeRow
            key={emp.id}
            employee={emp}
            avatarColor={avatarColors[i]}
            onPress={() => navigation.navigate('EmployeeDetail', { employee: emp })}
          />
        ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: { fontSize: 16, fontWeight: '500', color: colors.text },
  appSub: { fontSize: 10, color: colors.textHint, textTransform: 'capitalize' },
  adminBadge: {
    backgroundColor: '#1e1a30',
    borderWidth: 0.5,
    borderColor: '#3a2a50',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  adminBadgeText: { fontSize: 11, color: colors.admin },
  scroll: { flex: 1 },
  body: { padding: 16, gap: 8 },
  statRow: { flexDirection: 'row', gap: 8, marginBottom: 8 },
  sectionLabel: {
    fontSize: 10,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 4,
    marginTop: 4,
  },
});

export default DashboardScreen;
