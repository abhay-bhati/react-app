import styles from './MainNavigation.module.css';
import { Link } from 'react-router-dom';
import {useState, useContext} from 'react';
import {AuthContext} from '../store/authcontext';


function MainNavigation() {

    const AuthCtx = useContext(AuthContext);
    console.log(AuthCtx);
    console.log(AuthCtx.login)

    const logoutHandler = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        AuthCtx.setlogin(false);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/'>
                <h2>React Health</h2>
                </Link>
            </div>
            {AuthCtx.login && (<div className={styles.navlinks}>
                <Link to='/'>
                    <div>Book Appointment</div>
                </Link>
                <Link to='/dayview'>
                    <div>DayView</div>
                </Link>
                <Link to='/monthview'>
                    <div>MonthView</div>
                </Link>
                <button onClick = {logoutHandler}>Logout</button>
            </div>)}
        </nav>
    )
};


export default MainNavigation;