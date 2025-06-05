// src/features/home/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../../products/navigation/ProductNavigator';

type HomeScreenNavigationProp = StackNavigationProp<ProductStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const featuredProducts = [
    {
      id: '1',
      name: 'Cajón de Herramientas Profesional',
      price: 299.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Set de Llaves Combinadas',
      price: 89.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const categories = [
    { id: '1', name: 'Herramientas Manuales', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Herramientas Eléctricas', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Cajones y Organizadores', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Banner Principal */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Herramientas Industriales</Text>
        <Text style={styles.bannerSubtitle}>Calidad profesional para tu taller</Text>
      </View>

      {/* Categorías */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorías</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Productos Destacados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos Destacados</Text>
        {featuredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
          >
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 120,
    height: 120,
  },
  productInfo: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default HomeScreen;