import styles from './AppointmentForm.module.css';
import { useRef, useState, useContext } from 'react';
import AlertDialog from '../layout/Modal';
import { ModalContext } from '../store/modal-context';
import { AuthContext } from '../store/authcontext';
import Button from '@material-ui/core/Button';


function AppointmentForm() {
    const [patient, setPatient] = useState('');

    const [invalidToken, setInvalidToken] = useState(false);

    const ModalCtx = useContext(ModalContext);
    console.log(ModalCtx)

    const AuthCtx = useContext(AuthContext);
    console.log(AuthCtx);


    const appNameRef = useRef();
    const patNameRef = useRef();
    const appTypeRef = useRef();
    const appSlotRef = useRef();

    const valueChangeHandler = () => {
        setInvalidToken(false);
    }

    const formSubmitHandler = (event) => {
        console.log(process.env.REACT_APP_BACKEND_URL);

        event.preventDefault();
        console.log(appNameRef.current.value, patNameRef.current.value);
        console.log(appTypeRef.current.value);
        console.log(appSlotRef.current.value);
        if(appNameRef.current.value === '' || patNameRef.current.value === '' || appTypeRef.current.value === '' || appSlotRef.current.value===''){
            console.log(appNameRef.current.value);
            setInvalidToken(true);
            return 
        }
        const data = { appName: appNameRef.current.value, patName: patNameRef.current.value, appType: appTypeRef.current.value, appSlot: appSlotRef.current.value };
        console.log('44444444444444444');
        fetch(process.env.REACT_APP_BACKEND_URL + '/add-appointment', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then(res => {
                if (res.ok) {
                    console.log('res ok');
                    res.json().then(data => console.log(data));
                    setPatient(data.patName);
                    ModalCtx.submitclick(true);


                }
                else {
                    console.log('res not ok');
                    res.json().then(data => {
                        console.log(data);
                        throw new Error(data.message);
                    })
                }
            })
            .catch(err => {
                throw new Error(err);
            })

    }
    console.log(patient);
    return (
        <>
            <form className={styles.formcontainer}>
                <div>
                    <label htmlFor='appname'>Appointment Name</label>
                    <input type='text' id='appname' ref={appNameRef} onChange = {valueChangeHandler}/>
                </div>
                <div>
                    <label htmlFor='patname'>Patient Name</label>
                    <input type='text' id='patname' ref={patNameRef} onChange = {valueChangeHandler}/>
                </div>
                <div>
                    <label htmlFor='apptype'>Appointment Type</label>
                    <select name="apptype" id="apptype" ref={appTypeRef}>
                        <option value="Fitness Coach Appointment">Fitness Coach Appointment</option>
                        <option value="Nutrition Coach Appointment">Nutrition Coach Appointment</option>
                        <option value="Doctor Appointment">Doctor Appointment</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='appslot'>Appointment Slot</label>
                    <input type='date' id='appslot' ref={appSlotRef} onChange = {valueChangeHandler}/>
                </div>
                <AlertDialog pat={patient} />
            </form>
            <div style={{textAlign:'center'}}>
                <Button onClick = {formSubmitHandler} variant='contained' color='primary'>Submit</Button>
            </div>
            {invalidToken && <h4 style={{textAlign:'center'}}>Appointment Not Booked. Try Again!</h4>}
            
        </>
    )
};


export default AppointmentForm;