import AppointmentForm from "../components/AppointmentForm";
import AuthForm from'../components/AuthForm';
import {AuthContext} from '../store/authcontext';
import React, {useContext} from "react";

function HomePage(){

    const AuthCtx = useContext(AuthContext);

    return (
        <>
        {AuthCtx.login && (<div>
            <h2 style = {{textAlign: 'center', marginTop:'50px'}}>Book Appointment</h2>
            <AppointmentForm />
        </div>)}
        {!AuthCtx.login && <AuthForm />}
        </>

    )
};


export default HomePage;