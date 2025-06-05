// src/core/navigation/AppNavigator.tsx
import React from 'react'; // Asegúrate que React esté importado si usas JSX.
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'; // O tu librería de iconos
import HomeNavigator from '../../features/home/navigation/HomeNavigator';
import ProductNavigator from '../../features/products/navigation/ProductNavigator'; // <-- ¡Nueva importación!

export type AppTabsParamList = {
  HomeTab: undefined;
  ProductsTab: undefined; // <-- Nueva pestaña
};

const Tab = createBottomTabNavigator<AppTabsParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#007AFF', // O el color que prefieras
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Inicio',
            // tabBarIcon: ({ color, size }) => (
            //   <Ionicons name="home-outline" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen // <-- Nueva Pestaña de Productos
          name="ProductsTab"
          component={ProductNavigator}
          options={{
            tabBarLabel: 'Herramientas',
            // tabBarIcon: ({ color, size }) => (
            //   <Ionicons name="hammer-outline" color={color} size={size} /> // Ejemplo de ícono
            // ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;