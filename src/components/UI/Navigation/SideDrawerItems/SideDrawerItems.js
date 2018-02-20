import React from "react";
import classes from './SideDrawerItems.css';

const sideDrawerItems = props => {

    let combinedClasses = ["material-icons", classes.SideIcon];

  return (
    <ul className={classes.SideDrawerItems}>
      <li className={classes.SideDrawerListItems}><i className={combinedClasses.join(" ")}>contacts</i>Contacts</li>
      <li className={classes.SideDrawerListItems}><i className={combinedClasses.join(" ")}>star</i>Frequent</li>
      <li className={classes.SideDrawerListItems}><i className={combinedClasses.join(" ")}>content_copy</i>Duplicates</li>
    </ul>
  );
};

export default sideDrawerItems;
