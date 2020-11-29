import React from 'react';
import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { store,persistor } from "./redux/store";
import { Header, SideMenu, Overlay } from './components/custom';
import { ProductList } from './components/screens';

import './App.css';

function App() {

  const client = new ApolloClient({ uri: 'https://pangaea-interviews.now.sh/api/graphql' });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <div className="bg">
        <Header />
        <div className="container-fluid">
          <div className="row banner">
              <div className="col-md-6">
                  All Products
              </div>
              <div className="col-md-6"></div>
          </div>
        </div>
        
        <div className="container mt-30">
          <ApolloProvider client={client}>
            <SideMenu />
            {Overlay}
            <ProductList />
          </ApolloProvider>
        </div> 
    </div>
    </Provider>
  );
}

export default App;
