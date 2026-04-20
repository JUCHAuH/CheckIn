import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const variants = {
  primary: {
    container: { backgroundColor: colors.primary },
    text: { color: colors.white },
  },
  danger: {
    container: { backgroundColor: 'transparent', borderWidth: 0.5, borderColor: colors.danger },
    text: { color: colors.danger },
  },
  secondary: {
    container: { backgroundColor: 'transparent', borderWidth: 0.5, borderColor: colors.border },
    text: { color: colors.textMuted },
  },
};

const Button = ({ label, onPress, variant = 'primary', style }) => {
  const v = variants[variant];
  return (
    <TouchableOpacity style={[styles.base, v.container, style]} onPress={onPress} activeOpacity={0.75}>
      <Text style={[styles.text, v.text]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Button;
