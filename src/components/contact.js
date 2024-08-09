// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeContact } from '../features/contacts/contactsSlice';

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

const Contact = ({ contact, onEdit }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <ContactItem>
      <div>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <Button onClick={onEdit}>Editar</Button>
        <Button onClick={handleRemove}>Remover</Button>
      </div>
    </ContactItem>
  );
};

export default Contact;
