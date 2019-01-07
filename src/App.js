import React, { Component, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './views/Contact-list-page';
import ContactFormPage from './views/Contact-form-page';

import './App.css';

class App extends Component {

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
