import './App.css';
import Home from './components/Home';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'


function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/"
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home/>
      </div>
    </ApolloProvider>
  );
}

export default App;
