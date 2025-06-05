// src/features/products/navigation/ProductNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

// Define los parámetros que cada pantalla en este stack podría recibir
export type ProductStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: string };
};

const Stack = createStackNavigator<ProductStackParamList>();

const ProductNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="ProductList" 
        component={ProductListScreen}
        options={{ title: 'Herramientas Industriales' }}
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen}
        options={{ title: 'Detalles del Producto' }}
      />
    </Stack.Navigator>
  );
};

export default ProductNavigator;