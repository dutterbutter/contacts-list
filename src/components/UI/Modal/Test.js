import React from "react";

import Aux from "../../../hoc/Aux/Aux";
import BackTest from "../Backdrop/BackTest";
import classes from './ContactModal.css';

const contactModal = (props) => {

  return (
    <Aux>
      <BackTest show={props.show} back={props.back} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
        <div className={classes.MobileButton}>
          <button className= "btn btn-primary" onClick={props.back}>Back</button>
        </div>
      </div>
    </Aux>
  );
};

export default contactModal;
