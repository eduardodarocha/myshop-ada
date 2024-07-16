import React from 'react';
// import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
// import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductList } from './components/ProductList/ProductList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './components/Conter/Counter';


//Componente estilizado
// const Title = styled.h1`
//   font-size: 2em;
//   color: blue;
// `;

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <GlobalStyle />

    </Provider>
  );
}

export default App;
