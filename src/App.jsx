import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
// "@auth0/auth0-react": "^1.8.0", (package.json)
import { UserContext } from 'context/userContext';
import {ApolloProvider,ApolloClient,/*createHttpLink,*/InMemoryCache} from '@apollo/client';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import IndexCategory1 from 'pages/category1/Index';
import IndexUsuarios from 'pages/users/index';
import EditarUsuario from 'pages/users/edit';
import Category1 from 'pages/category1/CategoryPage1';
import 'styles/globals.css';
import 'styles/tabla.css';

// import PrivateRoute from 'components/PrivateRoute';

// const httpLink = createHttpLink({
//   uri:'https://artmotics.herokuapp.com/graphql'
// })

const client = new ApolloClient({
  uri:'https://artmotics.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>
      {/* <Auth0Provider
        domain='misiontic-concesionario.us.auth0.com'
        clientId='WsdhjjQzDLIZEHA6ouuxXGxFONFGAQ4g'
        redirectUri='http://localhost:3000/admin'
        audience='api-autenticacion-concesionario-mintic'
      > */}
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<PrivateLayout />}>
                <Route path='' element={<Index />} />
                <Route path='/usuarios' element={<IndexUsuarios />} />
                <Route path='/usuarios/editar/:_id' element={<EditarUsuario />} />
                <Route path='page2' element={<Page2 />} />
                <Route path='category1' element={<IndexCategory1 />} />
                <Route path='category1/page1' element={<Category1 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      {/* </Auth0Provider> */}
    </ApolloProvider>
  );
}

export default App;
