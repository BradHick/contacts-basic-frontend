import React, { Component } from 'react';

import ContactList from '../components/contact-list';


class ContactListPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  };
  
  render(){
    return (
      <div>
        <h1>List of contacts</h1>
        <ContactList 
          contacts={this.props.contacts} 
          deleteContact={this.props.deleteContact} 
        />
      </div>
    );
  };
};


export default ContactListPage;