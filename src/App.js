import React from 'react';
import Header from './components/Header';
import Bebidas from './components/Bebidas';
import CategoriasProvider from './context/CategoriasContext';
import IngredientesProvider from './context/IngredientesContext';
import BebidasProvider from './context/BebidasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <BebidasProvider>
      <IngredientesProvider>
        <CategoriasProvider>
          <ModalProvider>
            <Header title="Buscador de Bebidas"></Header>
            <main>
              <Bebidas></Bebidas>
            </main>
          </ModalProvider>
        </CategoriasProvider>
      </IngredientesProvider>
    </BebidasProvider>
    );
}

export default App;
