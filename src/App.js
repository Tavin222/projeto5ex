// src/App.js
import React, { useState } from 'react';
import ContactList from './components/contactList';
import ContactForm from './components/contactForm';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const App = () => {
  const [contactToEdit, setContactToEdit] = useState(null);

  return (
    <AppContainer>
      <h1>Lista de Contato</h1>
      <ContactForm contactToEdit={contactToEdit} onClose={() => setContactToEdit(null)} />
      <ContactList onEdit={setContactToEdit} />
    </AppContainer>
  );
};

export default App;
