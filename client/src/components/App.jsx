import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../context/ContactsProvider';
import { ConversationsProvider } from '../context/ConversationsProvider';
import { SocketProvider } from '../context/SocketProvider';

const App = () => {
  const [id, setID] = useLocalStorage('id');
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIDSubmit={setID} />;
};

export default App;
