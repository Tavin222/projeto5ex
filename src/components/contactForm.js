// src/components/ContactForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../features/contacts/contactsSlice';

const ContactForm = ({ contactToEdit, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactToEdit) {
      dispatch(updateContact({
        id: contactToEdit.id,
        newData: { name, email, phone }
      }));
    } else {
      dispatch(addContact({
        id: Date.now(),
        name,
        email,
        phone
      }));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">{contactToEdit ? 'Adicionar' : 'Add'} Contato</button>
    </form>
  );
};

export default ContactForm;
