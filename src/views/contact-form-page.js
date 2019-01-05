import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import ContactForm from '../components/Contact-form';




class ContactFormPage extends Component{

  


  // componentDidMount = () => {
  //   const { _id } = this.props.match.params;
  //   if (_id) {
  //     this.props.fetchContact(_id);
  //   }else{
  //     this.props.newContact()
  //   }
  // };
  

  render() {
    return (
      <div>
        {
          this.props.redirect ?
          <Redirect to='/' /> :
          <ContactForm 
            contact={this.props.contact} 
            // loading={this.props.contact.loading}
            saveContact={this.props.saveContact}
            updateContact={this.props.updateContact}
            onSubmit={this.submit}
            errors={this.props.errors}
            redirect={this.props.redirect}
            cancelForm={this.props.cancelForm}
            />
        }
      </div>
    );
  };
};



export default ContactFormPage;
