import React, { Component } from 'react';
// import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
// import ContactListPage from './views/contact-list-page';
// import ContactFormPage from './views/contact-form-page';
import { client } from './client/client';
import './App.css';

const url = '/contact';

class App extends Component {


  state ={
    contacts: client.get(url).then(res => res.data ) || [],
    contact: {name:{}}
  };

  saveContact = (contact) =>{
    return client.post(url, contact)
      .then(res =>{
        console.log('------------------------------------');
        console.log('saveContact res ->', res);
        console.log('------------------------------------');
      });
  };

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
            {/* <NavLink className="item" 
              activeClassName="active" 
              exact to="/">Contacts List
            </NavLink>
            <NavLink className="item" 
              activeClassName="active" 
              exact to="/contacts/new">Add Contact
            </NavLink> */}
          </div>

            {/* <Route exact path="/" component={ContactListPage}/>
            <Route path="/contacts/new" component={ContactFormPage}/>
            <Route path="/contacts/edit/:_id" component={ContactFormPage}/> */}
        </Container>
      </div>
    );
  }
}

export default App;
