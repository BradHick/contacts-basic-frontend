import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './Contact-card';

export default function ContactList({contacts, deleteContact}){

  const cards = () => {
    if (contacts.length <= 1){
      return (
        <h3>Nenhum contato</h3>
      );
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
      {console.log('contacts -> ', contacts)}
      { cards() }
    </Card.Group>
  );
};