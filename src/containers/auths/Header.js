import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Link } from 'react-router-dom';

import classes from "./Header.css";

class Header extends Component {
  contentHandler = () => {
    
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <a href="/auth/google">Login With Google</a>
          </div>
        );
      default:
        return (
          <div>
            <a href="/api/logout">Logout</a>
          </div>
        );
    }
  };

  render() {
    return <div className={classes.Login}>{this.contentHandler()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth._id
  };
};

export default connect(mapStateToProps)(Header);
