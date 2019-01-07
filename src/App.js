import React, { Component, createContext, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './views/Contact-list-page';
import ContactFormPage from './views/Contact-form-page';
import { client } from './client/client';
import './App.css';

const url = '/contact';


const ContactContext = createContext();

class App extends Component {


  state ={
    contacts: [],
    contact: {name:{}},
    loading: false,
    errors: {},
    redirect: false
  };

  cancelForm = () =>{
    return this.setState({...this.state, redirect: true});
  };

  newContact = () =>{
    return this.setState({...this.state, contact: {name:{}}, redirect: false});
  };

  saveContact = (contact) =>{
    return client.post(url, contact)
      .then(res =>{
        console.log('------------------------------------');
        console.log('saveContact res ->', res);
        console.log('------------------------------------');
        this.setState({...this.state, redirect: true});
      });
  };

  fetchContact = (_id) =>{
    return client.get(`${url}/${_id}`)
      .then(res => {
        console.log('------------------------------------');
        console.log('fetchContact res ->', res);
        console.log('------------------------------------');
        return this.setState({...this.state, contact: res.data, redirect: false});
      });
  };


  fetchContacts = () => {
    return client.get(url).then(res => {
      console.log('------------------------------------');
      console.log('fetchContacts res ->', res);
      console.log('------------------------------------');
      return this.setState({...this.state, contacts: res.data.data, redirect: false});
    });
  }

  deleteContact = (_id) => {
    return client.delete(`${url}/${_id}`)
      .then(res => {
        console.log('------------------------------------');
        console.log('deleteContact res ->', res);
        console.log('------------------------------------');
        this.fetchContacts();
      });
  };

  updateContact = (contact) =>{
    return client.put(`${url}/${contact._id}`, contact)
      .then(res =>{
        console.log('------------------------------------');
        console.log('updateContact res ->', res);
        console.log('------------------------------------');
        this.setState({...this.state, redirect: true});
      });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <div className='ui pointing secondary menu'>
            <NavLink className="item" 
              activeClassName="active" 
              exact to="/">Contacts List
            </NavLink>
            <NavLink className="item" 
              activeClassName="active" 
              exact to="/contacts/new">Add Contact
            </NavLink>
          </div>
          
          <div className='twelve wide stretched column'>
          <div className="ui segment">

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
              <ContactContext.Consumer>
                { ({ fetchContact, contacts, deleteContact, fetchContacts, contact, redirect, cancelForm, saveContact, updateContact, newContact}) => (
                  <Fragment>
                    <Route 
                      exact path="/"
                      render={
                        () => <ContactListPage
                          contacts={contacts}
                          deleteContact={deleteContact}
                          fetchContacts={fetchContacts}
                        />
                      }
                    />

                    <Route 
                      path="/contacts/new"
                      render={
                        () => <ContactFormPage
                          contact={contact}
                          redirect={redirect}
                          cancelForm={cancelForm}
                          saveContact={saveContact}
                          updateContact={updateContact}
                          newContact={newContact}
                        />
                      }
                    />
                    
                    <Route 
                      path="/contacts/edit/:_id"
                      render={
                        () => <ContactFormPage
                          contact={contact}
                          redirect={redirect}
                          cancelForm={cancelForm}
                          saveContact={saveContact}
                          updateContact={updateContact}
                          newContact={newContact}
                          fetchContact={fetchContact}
                        />
                      }
                    />
                  </Fragment>

                )}
              </ContactContext.Consumer>
            </ContactContext.Provider>
          </div>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default App;
