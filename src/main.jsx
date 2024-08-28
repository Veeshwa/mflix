
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

const domain = "dev-4s1himcstxiqoz2e.us.auth0.com";
const clientId= "tM56AcdFBZFrAc0NmyvEsYQg6WprlyLX";
const main =document.getElementById('root');
const root=createRoot(main);
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri:window.location.origin,
    }}
    
    >
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </Auth0Provider>
);
