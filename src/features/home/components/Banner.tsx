// src/features/home/components/Banner.tsx
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl?: string; // Para una imagen de fondo real
  onPress?: () => void;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, imageUrl, onPress }) => {
  const content = (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );

  if (imageUrl) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
        <ImageBackground source={{ uri: imageUrl }} style={styles.bannerImage} resizeMode="cover">
          <View style={styles.overlay} />
          {content}
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  // Banner sin imagen, solo con color de fondo
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
      <View style={styles.bannerColor}>
        {content}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden', // Asegura que el overlay no se salga del borde redondeado
    marginBottom: 20,
  },
  bannerColor: {
    height: 150,
    backgroundColor: '#007AFF', // Un color primario
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Cubre toda la ImageBackground
    backgroundColor: 'rgba(0,0,0,0.3)', // Un overlay oscuro para legibilidad del texto
  },
  textContainer: {
    // El zIndex asegura que el texto esté sobre el overlay en ImageBackground
    // No es estrictamente necesario aquí si el overlay está antes en el JSX, pero es buena práctica
    zIndex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Banner;