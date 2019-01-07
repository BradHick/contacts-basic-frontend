import React from 'react';
import { ContactContext } from './Provider';


export default class Consumer extends React.Component {
  render() {
    const { children } = this.props;
    console.log('====================================');
    console.log('consumer props -> ', children);
    console.log('====================================');
    return(
      <ContactContext.Consumer>
        {({ fetchContact, contacts, deleteContact, fetchContacts, contact, redirect, cancelForm, saveContact, updateContact, newContact }) => 
          {
            return React.Children.map(children, child =>
              React.cloneElement(child, {
                fetchContact, 
                contacts, 
                deleteContact, 
                fetchContacts, 
                contact, 
                redirect, 
                cancelForm, 
                saveContact, 
                updateContact, 
                newContact
              })
            );
          }
        }
      </ContactContext.Consumer>
    );
  };
};