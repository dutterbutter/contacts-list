import React from "react";
import classes from './TopNav.css';
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle";

// 

const topNav = (props) => (

    <header className={classes.TopNavBar}>
      <SideDrawerToggle drawerToggleClicked={props.drawerToggleClicked} />
    
      Dustin Contact
    
      {/* <nav>
        <li>this</li>
      </nav> */}
    </header>
  
);

export default topNav;
