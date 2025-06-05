// src/features/products/components/ProductCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export interface Product {
  id: string;
  name: string;
  price: number;
  // Idealmente, la imagen sería una URI, pero para el ejemplo usamos un placeholder o un string simple.
  imageUrl?: string; // Opcional por ahora
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Si tuvieras product.imageUrl, podrías usar <Image source={{ uri: product.imageUrl }} style={styles.image} /> */}
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imagePlaceholderText}>Imagen</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 16,
  },
  imagePlaceholderText: {
    color: '#757575',
    fontSize: 12,
  },
  // image: { // Descomenta y usa si tienes imágenes reales
  //   width: 80,
  //   height: 80,
  //   borderRadius: 8,
  //   marginRight: 16,
  // },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#007AFF', // Un color azul para el precio
  },
});

export default ProductCard;