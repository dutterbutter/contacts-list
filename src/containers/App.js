import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import AddContactButton from "../components/UI/Navigation/Button/AddContact";
import Layout from "../hoc/Layout/Layout";
import ContactModal from "../components/UI/Modal/ContactModal";
import AddContactsInfo from "./contacts/Contacts";
import ContactList from "./contacts/ContactList";
import Test from "../components/test";

class App extends Component {
  state = {
    addContactClicked: false
  };

  componentDidMount() {
    this.props.onFetchUsers();
  }

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

    const test = props => {
      return <Test />;
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

        <Route path={"/contactsList"} component={contactAdded} />
       
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUser())
  };
};

export default connect(null, mapDispatchToProps)(App);
