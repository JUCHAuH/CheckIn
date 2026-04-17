import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import DashboardScreen from '../screens/admin/DashboardScreen';
import MapScreen from '../screens/admin/MapScreen';
import HistoryScreen from '../screens/admin/HistoryScreen';
import EmployeeDetailScreen from '../screens/admin/EmployeeDetailScreen';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardMain" component={DashboardScreen} />
      <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          borderTopWidth: 0.5,
        },
        tabBarActiveTintColor: colors.admin,
        tabBarInactiveTintColor: colors.textHint,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18, color }}>⊞</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18, color }}>◎</Text>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Historial',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18, color }}>◷</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminNavigator;