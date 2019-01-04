import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './views/contact-list-page';
import ContactFormPage from './views/contact-form-page';
import './App.css';

class App extends Component {
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

            <Route exact path="/" component={ContactListPage}/>
            <Route path="/contacts/new" component={ContactFormPage}/>
            <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
        </Container>
      </div>
    );
  }
}

export default App;
