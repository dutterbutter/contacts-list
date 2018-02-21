import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './ContactList.css'

import Contact from '../../components/ContactList/Contact';


class ContactList extends Component {

    async componentDidMount() {
       await this.props._user
       console.log("I need this prop", this.props._user)
        //console.log("yes", userId);
     await this.props.onFetchContacts(this.props._user);
        
}

    render() {
        
        return ( 
            <div className={classes.ContactList}>
                {this.props.contacts.map(contact => 
                   <Contact 
                        key={contact._id}
                        _id={contact._id}
                        name={contact.name}
                        email={contact.email}
                        address={contact.streetAddress}
                        phoneNumber={contact.phoneNumber}
                        postalCode={contact.postalCode}
                        />
                )}
            </div>
         )
    }
}

const mapStateToProps = state => {
    return {
        _user: state.auth._id,
        contacts: state.contact.contacts,
        loading: state.contact.loading,
       
    };
}
 
const mapDispatchToProps= dispatch => {
    return {
        onFetchContacts: (_user) => dispatch(actions.fetchContacts(_user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);