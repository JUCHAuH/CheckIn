import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const Avatar = ({ initials, size = 38, color = '#1e2a40' }) => {
  const radius = size / 2;
  const fontSize = size * 0.32;
  return (
    <View style={[styles.circle, { width: size, height: size, borderRadius: radius, backgroundColor: color }]}>
      <Text style={[styles.text, { fontSize }]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '500',
    color: colors.white,
  },
});

export default Avatar;
