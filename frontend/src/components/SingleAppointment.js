import styles from './SingleAppointment.module.css';
import {useState} from 'react';




function SingleAppointment(props) {


    const clickHandler = (event) => {
        event.preventDefault();

        fetch(process.env.REACT_APP_BACKEND_URL+'/update', {
            method:'POST', 
            body:JSON.stringify({id:props.data._id}),
            headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${localStorage.getItem('token')}`}
        })
        .then(res => {
            if(res.ok){
                console.log('res ok');
                res.json().then(data => {
                    console.log(data);
                    console.log(props); 
                    props.btn(props.data._id)
                    
                });
            }
            else{
                console.log('res not ok')
            }
        })
        .catch(err => {
            throw new Error(err);
        })
    }
    if(props.btn){
        console.log('btn');
    }
    else{
        console.log('no btn');
    }
    

    return (
        <>
        <div className={`${styles.container} ${props.btn ? styles.active:styles.complete}`}>
            <div className = {styles.info}>
                <div><span className = {styles.fields}>Appointment Name :</span> <span>{props.data.appointmentName}</span></div>
                <div><span className = {styles.fields}>Patient Name :</span> <span>{props.data.patientName}</span></div>
                <div><span className = {styles.fields}>Appointment Type :</span><span>{props.data.appointmentType}</span></div>
            </div>
            {props.btn && (<div className = {styles.btn}>
                <button onClick = {clickHandler}>Mark as Complete</button>
            </div>)}
        </div>
        </>
    )
};


export default SingleAppointment;