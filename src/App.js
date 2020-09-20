import React from 'react';
import Header from './components/Header';
import Bebidas from './components/Bebidas';
import CategoriasProvider from './context/CategoriasContext';
import IngredientesProvider from './context/IngredientesContext';
import BebidasProvider from './context/BebidasContext';

function App() {
  return (
    <BebidasProvider>
      <IngredientesProvider>
        <CategoriasProvider>
            <Header title="Buscador de Bebidas"></Header>
            <main>
              <Bebidas></Bebidas>
            </main>
        </CategoriasProvider>
      </IngredientesProvider>
    </BebidasProvider>
    );
}

export default App;
