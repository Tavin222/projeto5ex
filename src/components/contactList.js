// src/components/ContactList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './contact';

const ContactList = ({ onEdit }) => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onEdit={() => onEdit(contact)} />
      ))}
    </div>
  );
};

export default ContactList;
