import React, { Component, createContext, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './views/Contact-list-page';
import ContactFormPage from './views/Contact-form-page';
import { client } from './client/client';
import { ContactContext } from './container/Provider';
import './App.css';

// const url = '/contact';


// const ContactContext = createContext();

class App extends Component {


  // state ={
  //   contacts: [],
  //   contact: {name:{}},
  //   loading: false,
  //   errors: {},
  //   redirect: false
  // };

  // cancelForm = () =>{
  //   return this.setState({...this.state, redirect: true});
  // };

  // newContact = () =>{
  //   return this.setState({...this.state, contact: {name:{}}, redirect: false});
  // };

  // saveContact = (contact) =>{
  //   return client.post(url, contact)
  //     .then(res =>{
  //       console.log('------------------------------------');
  //       console.log('saveContact res ->', res);
  //       console.log('------------------------------------');
  //       this.setState({...this.state, redirect: true});
  //     });
  // };

  // fetchContact = (_id) =>{
  //   return client.get(`${url}/${_id}`)
  //     .then(res => {
  //       console.log('------------------------------------');
  //       console.log('fetchContact res ->', res);
  //       console.log('------------------------------------');
  //       return this.setState({...this.state, contact: res.data, redirect: false});
  //     });
  // };


  // fetchContacts = () => {
  //   return client.get(url).then(res => {
  //     console.log('------------------------------------');
  //     console.log('fetchContacts res ->', res);
  //     console.log('------------------------------------');
  //     return this.setState({...this.state, contacts: res.data.data, redirect: false});
  //   });
  // }

  // deleteContact = (_id) => {
  //   return client.delete(`${url}/${_id}`)
  //     .then(res => {
  //       console.log('------------------------------------');
  //       console.log('deleteContact res ->', res);
  //       console.log('------------------------------------');
  //       this.fetchContacts();
  //     });
  // };

  // updateContact = (contact) =>{
  //   return client.put(`${url}/${contact._id}`, contact)
  //     .then(res =>{
  //       console.log('------------------------------------');
  //       console.log('updateContact res ->', res);
  //       console.log('------------------------------------');
  //       this.setState({...this.state, redirect: true});
  //     });
  // };

  render() {
    return (
      <div className="App">
        {console.log('this ->', this)}
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

                  <Fragment>
                    <Route 
                      exact path="/"
                      render={
                        () => <ContactListPage
                          contacts={this.props.contacts}
                          deleteContact={this.props.deleteContact}
                          fetchContacts={this.props.fetchContacts}
                        />
                      }
                    />

                    <Route 
                      path="/contacts/new"
                      render={
                        () => <ContactFormPage
                          contact={this.props.contact}
                          redirect={this.props.redirect}
                          cancelForm={this.props.cancelForm}
                          saveContact={this.props.saveContact}
                          updateContact={this.props.updateContact}
                          newContact={this.props.newContact}
                        />
                      }
                    />
                    
                    <Route 
                      path="/contacts/edit/:_id"
                      render={
                        () => <ContactFormPage
                          contact={this.props.contact}
                          redirect={this.props.redirect}
                          cancelForm={this.props.cancelForm}
                          saveContact={this.props.saveContact}
                          updateContact={this.props.updateContact}
                          newContact={this.props.newContact}
                          fetchContact={this.props.fetchContact}
                        />
                      }
                    />
                  </Fragment>
            
          </div>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default App;
