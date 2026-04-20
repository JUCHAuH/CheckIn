import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const StatTile = ({ value, label, valueSize = 22 }) => (
  <View style={styles.tile}>
    <Text style={[styles.value, { fontSize: valueSize }]}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: 12,
    alignItems: 'center',
  },
  value: {
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  label: {
    fontSize: 9,
    color: colors.textHint,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
});

export default StatTile;
