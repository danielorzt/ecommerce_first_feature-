// src/features/products/screens/ProductDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductStackParamList } from '../navigation/ProductNavigator.tsx';

// Datos de ejemplo - En una app real, esto vendría de una API
const MOCK_PRODUCTS = {
  '1': {
    id: '1',
    name: 'Cajón de Herramientas Profesional',
    price: 299.99,
    category: 'Cajones',
    description: 'Cajón de herramientas profesional con múltiples compartimentos y ruedas resistentes. Ideal para mecánicos y profesionales.',
    features: [
      'Material resistente y duradero',
      'Ruedas de alta calidad',
      'Múltiples compartimentos',
      'Cerradura de seguridad',
    ],
  },
  '2': {
    id: '2',
    name: 'Set de Llaves Combinadas',
    price: 89.99,
    category: 'Herramientas Manuales',
    description: 'Set completo de llaves combinadas de alta calidad. Incluye 10 piezas en tamaños estándar.',
    features: [
      '10 piezas en diferentes tamaños',
      'Material cromo vanadio',
      'Acabado pulido',
      'Incluye estuche protector',
    ],
  },
  '3': {
    id: '3',
    name: 'Maletín de Herramientas Eléctricas',
    price: 199.99,
    category: 'Herramientas Eléctricas',
    description: 'Maletín completo con herramientas eléctricas esenciales para cualquier proyecto.',
    features: [
      'Taladro inalámbrico incluido',
      'Baterías recargables',
      'Accesorios múltiples',
      'Maletín resistente',
    ],
  },
};

type ProductDetailScreenRouteProp = RouteProp<ProductStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { productId } = route.params;
  const product = MOCK_PRODUCTS[productId];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.category}>{product.category}</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Características</Text>
          {product.features.map((feature, index) => (
            <Text key={index} style={styles.feature}>• {feature}</Text>
          ))}
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Añadir al Carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  feature: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 4,
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductDetailScreen;