import React from 'react';
import { client } from '../client/client';

const DEFAULT_STATE = {
  contacts: [],
  contact: {name:{}},
  loading: false,
  errors: {},
  redirect: false
};

const url = '/contact';

export const ContactContext = React.createContext();

export default class Provider extends React.Component {
  
  state = DEFAULT_STATE;

  cancelForm = () =>{
    return this.setState({...this.state, redirect: true});
  };

  newContact = () =>{
    return this.setState({...this.state, contact: {name:{}}, redirect: false});
  };

  saveContact = (contact) =>{
    return client.post(url, contact)
      .then(res =>{
        this.setState({...this.state, redirect: true});
      });
  };

  fetchContact = (_id) =>{
    return client.get(`${url}/${_id}`)
      .then(res => {
        return this.setState({...this.state, contact: res.data, redirect: false});
      });
  };


  fetchContacts = () => {
    return client.get(url).then(res => {
      return this.setState({...this.state, contacts: res.data.data, redirect: false});
    });
  }

  deleteContact = (_id) => {
    return client.delete(`${url}/${_id}`)
      .then(res => {
        this.fetchContacts();
      });
  };

  updateContact = (contact) =>{
    return client.put(`${url}/${contact._id}`, contact)
      .then(res =>{
        this.setState({...this.state, redirect: true});
      });
  };

  render(){
    return (
      <ContactContext.Provider
        value={{
          contacts: this.state.contacts,
          contact: this.state.contact,
          redirect: this.state.redirect,
          saveContact: this.saveContact,
          fetchContacts: this.fetchContacts,
          fetchContact: this.fetchContact,
          deleteContact: this.deleteContact,
          updateContact: this.updateContact,
          newContact: this.newContact,
          cancelForm: this.cancelForm
        }}
      >
        {this.props.children}
      </ContactContext.Provider>
    );
  };

};