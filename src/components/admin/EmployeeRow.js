import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from '../common/Avatar';
import colors from '../../theme/colors';

const statusConfig = {
  active: { label: 'activo', color: colors.success },
  late: { label: 'retrasado', color: colors.warning },
  inactive: { label: 'inactivo', color: colors.textHint },
};

const EmployeeRow = ({ employee, onPress, avatarColor = '#1e2a40' }) => {
  const status = statusConfig[employee.status] ?? statusConfig.inactive;

  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.75}>
      <Avatar initials={employee.initials} size={38} color={avatarColor} />
      <View style={styles.info}>
        <Text style={styles.name}>{employee.name}</Text>
        <Text style={styles.sub}>
          {employee.since ? `Desde ${employee.since}` : employee.location ?? 'Sin iniciar'}
        </Text>
      </View>
      <View style={styles.right}>
        {employee.hours != null && (
          <Text style={styles.hours}>{employee.hours}</Text>
        )}
        <Text style={[styles.status, { color: status.color }]}>● {status.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
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
  info: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
  sub: {
    fontSize: 10,
    color: colors.textHint,
  },
  right: {
    alignItems: 'flex-end',
    gap: 3,
  },
  hours: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.primaryLight,
  },
  status: {
    fontSize: 10,
  },
});

export default EmployeeRow;
