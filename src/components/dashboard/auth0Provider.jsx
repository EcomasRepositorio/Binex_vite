import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'autentications-adminpass.us.auth0.com';
  const clientId = 'dBM7EWzxdw4zWY43hVzA6Y5BMAN6Pbfq';
  const redirectUri = window.location.origin;

  const onRedirecting = (state) => {

    if (state && state.appState && state.appState.registration) {

      window.location.replace('/'); 
    }
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirecting={onRedirecting}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
