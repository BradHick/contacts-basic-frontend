import React, { Component } from 'react';
import { withRouter } from 'react-router';

import ContactList from '../components/Contact-list';


class ContactListPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  };
  
  render(){
    return (
      <div>
        {console.log('list-page this.props ->',this.props)}
        <h1>List of contacts</h1>
        <ContactList 
          contacts={this.props.contacts} 
          deleteContact={this.props.deleteContact} 
        />
      </div>
    );
  };
};


export default withRouter(ContactListPage);