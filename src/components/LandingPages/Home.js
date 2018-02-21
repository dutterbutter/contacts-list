import React from 'react';
import classes from './Home.css';

const home = (props) => {
    return (
        <div className={classes.Home}>
            <div className={classes.Greeting}>Hey! Thanks for checking out my contacts application</div>
            <div className={classes.LoginNotice}>To continue please login with a Google Account above</div>
            <p  className={classes.Notice}>This is a WIP so there may be some bugs... <br/> if you notice any please email workingonittogetbetter[at]gmail.com</p>
        </div>
    )
}
 
export default home;