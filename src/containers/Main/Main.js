import React, { Component } from "react";
import { Route } from "react-router-dom";

import AddContactButton from "../../components/UI/Navigation/Button/AddContact";
import Layout from "../../hoc/Layout/Layout";
import ContactModal from "../../components/UI/Modal/ContactModal";
import AddContactsInfo from "../contacts/Contacts";
import ContactList from "../contacts/ContactList";
import Aux from "../../hoc/Aux/Aux";

class Main extends Component {
  state = {
    addContactClicked: false
  };

  addContactHandler = () => {
    this.setState({ addContactClicked: true });
  };

  modalClosedHandler = () => {
    this.setState({ addContactClicked: false });
  };

  render() {
    const contactAdded = props => {
      return <ContactList />;
    };

    return (
      <Layout>
        <ContactModal
          show={this.state.addContactClicked}
          closed={this.modalClosedHandler}
        >
          <AddContactsInfo
            closed={this.modalClosedHandler}
            history={this.props.history}
          />
        </ContactModal>
        <AddContactButton addContactInputModalShow={this.addContactHandler} />
      </Layout>
    );
  }
}

export default Main;
