// src/App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './core/navigation/AppNavigator'; // Importa tu navegador principal
// Si vas a usar un gestor de estado global como Redux o Zustand,
// importarías y configurarías su Provider aquí.

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      {/* Ejemplo con un Store Provider (si usaras Redux/Zustand)
      <StoreProvider> */}
      <AppNavigator />
      {/* </StoreProvider> */}
    </SafeAreaProvider>
  );
};

export default App;