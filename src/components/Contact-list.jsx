import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './Contact-card';

export default function ContactList({contacts, deleteContact}){

  const cards = () => {
    if (contacts.length <= 0){
      return <h3>You don`t have any contact saved yet, please click on "Add Contact" to save a contact</h3>
    }
    return contacts.map(contact => {
      return (
        <ContactCard key={contact._id} 
          contact={contact} 
          deleteContact={deleteContact}/>
      );
    });
  };
  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  );
};