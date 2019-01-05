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
    // contacts: client.get(url).then(res => res.data ) || [],
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
    return this.setState({...this.state, contact: {name:{}}});
  };

  saveContact = (contact) =>{
    return client.post(url, contact)
      .then(res =>{
        console.log('------------------------------------');
        console.log('saveContact res ->', res);
        console.log('------------------------------------');
      });
  };


  fetchContacts = () => {
    return client.get(url).then(res => {
      console.log('------------------------------------');
      console.log('fetchContacts res ->', res);
      console.log('------------------------------------');
      return this.setState({contacts: res.data.data})
    });
  }

  deleteContact = (_id) => {
    return client.delete(`${url}/${_id}`)
      .then(res => {
        console.log('------------------------------------');
        console.log('deleteContact res ->', res);
        console.log('------------------------------------');
      });
  };

  updateContact(contact){
    return client.put(`${url}/${contact._id}`, contact)
      .then(res =>{
        console.log('------------------------------------');
        console.log('updateContact res ->', res);
        console.log('------------------------------------');
      });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <div className='ui two item menu'>
            <NavLink className="item" 
              activeClassName="active" 
              exact to="/">Contacts List
            </NavLink>
            <NavLink className="item" 
              activeClassName="active" 
              exact to="/contacts/new">Add Contact
            </NavLink>
          </div>

            {/* <Route exact path="/" component={ContactListPage}/> */}
              <ContactContext.Provider 
                value={{
                  contacts: this.state.contacts,
                  contact: this.state.contact,
                  saveContact: this.saveContact,
                  fetchContacts: this.fetchContacts,
                  deleteContact: this.deleteContact,
                  updateContact: this.updateContact,
                  newContact: this.newContact,
                  cancelForm: this.cancelForm
                }}
              >
                <ContactContext.Consumer>
                  { ({contacts, deleteContact, fetchContacts, contact, redirect, cancelForm, saveContact, updateContact, newContact}) => (
                    <Fragment>
                      <Route exact path="/">
                        <ContactListPage
                          contacts={contacts}
                          deleteContact={deleteContact}
                          fetchContacts={fetchContacts}
                        />
                      </Route>

                      <Route path="/contacts/new">
                        <ContactFormPage
                          contact={contact}
                          redirect={redirect}
                          cancelForm={cancelForm}
                          saveContact={saveContact}
                          updateContact={updateContact}
                          newContact={newContact}
                        />
                      </Route>
                      
                      <Route path="/contacts/edit/:_id">
                        <ContactFormPage
                          contact={contact}
                          redirect={redirect}
                          cancelForm={cancelForm}
                          saveContact={saveContact}
                          updateContact={updateContact}
                          newContact={newContact}
                        />
                      </Route>
                    </Fragment>

                  )}
                </ContactContext.Consumer>
              </ContactContext.Provider>
            {/* <Route path="/contacts/new" component={ContactFormPage}/> */}
            {/* <Route path="/contacts/new">
              <ContactContext.Provider 
                value={{
                  contacts: this.state.contacts,
                  contact: this.state.contact,
                  saveContact: this.saveContact,
                  fetchContacts: this.fetchContacts,
                  deleteContact: this.deleteContact,
                  updateContact: this.updateContact,
                  newContact: this.newContact,
                  redirect: this.state.redirect,
                  cancelForm: this.cancelForm
                }}
              >
                <ContactContext.Consumer>
                  { ({ contact, redirect, cancelForm, saveContact, updateContact, newContact }) => (
                    <ContactFormPage
                      contact={contact}
                      redirect={redirect}
                      cancelForm={cancelForm}
                      saveContact={saveContact}
                      updateContact={updateContact}
                      newContact={newContact}
                    />
                  )}
                </ContactContext.Consumer>
              </ContactContext.Provider>
            </Route> */}
            {/* <Route path="/contacts/edit/:_id" component={ContactFormPage}/> */}
            {/* <Route path="/contacts/edit/:_id">
              <ContactContext.Provider 
                value={{
                  contacts: this.state.contacts,
                  contact: this.state.contact,
                  saveContact: this.saveContact,
                  fetchContacts: this.fetchContacts,
                  deleteContact: this.deleteContact,
                  updateContact: this.updateContact,
                  newContact: this.newContact,
                  redirect: this.state.redirect,
                  cancelForm: this.cancelForm
                }}
              >
                <ContactContext.Consumer>
                  { ({ contact, redirect, cancelForm, saveContact, updateContact, newContact }) => (
                    <ContactFormPage
                      contact={contact}
                      redirect={redirect}
                      cancelForm={cancelForm}
                      saveContact={saveContact}
                      updateContact={updateContact}
                      newContact={newContact}
                    />
                  )}
                </ContactContext.Consumer>
              </ContactContext.Provider>
            </Route> */}
        </Container>
      </div>
    );
  }
}

export default App;
