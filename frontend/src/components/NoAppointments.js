import styles from './NoAppointments.module.css';

function NoAppointments(props) {

    return (
        <div className = {styles.container}>
            <h2 style={{color:props.color, textDecoration:'underline'}}>No Appointments Found</h2>
        </div>
    )
};


export default NoAppointments;