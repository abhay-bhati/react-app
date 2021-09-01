import styles from './Appointments.module.css';
import { useEffect, useState, useContext } from 'react';
import SingleAppointment from './SingleAppointment';
import FilterContext from '../store/context';
import { MonthFilterContext } from '../store/context';
import NoAppointments from './NoAppointments';


function Appointments(props) {
    console.log(props.view);
    let pendingAppointments;
    let completedAppointments;
    let filteredData
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModified, setIsModified] = useState(null);

    const FilterCtx = useContext(FilterContext);
    console.log(FilterCtx);

    const MonthFilterCtx = useContext(MonthFilterContext);
    console.log(MonthFilterCtx);

    useEffect(() => {
        console.log('bhati');
        fetch(process.env.REACT_APP_BACKEND_URL + '/search-appointments',{
            headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        })
            .then(res => {
                if (res.ok) {
                    console.log('res ok');
                    res.json().then(data => {
                        console.log(data);
                        setData(data)
                        setIsLoading(false);
                    });
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
    }, [isModified])

    const btnHandler = (id) => {
        console.log(id);
        console.log('abhay');
        setIsLoading(true);
        setIsLoading(false);
        console.log('akshay');
        setIsModified(id);
    }


    if (!props.view) {
        filteredData = data.filter(element => new Date(element.appointmentSlot).getDate() === new Date().getDate());
        if (FilterCtx.filtervalue === 'All Appointments') {
            pendingAppointments = filteredData.filter(element => element.appointmentStatus === 'pending');
            completedAppointments = filteredData.filter(element => element.appointmentStatus === 'complete');
        }
        else {
            pendingAppointments = filteredData.filter(element => element.appointmentStatus === 'pending' && element.appointmentType === FilterCtx.filtervalue);
            completedAppointments = filteredData.filter(element => element.appointmentStatus === 'complete' && element.appointmentType === FilterCtx.filtervalue);
        }

    }

    else {
        //filteredData = data.filter(element => new Date(element.appointmentSlot).getMonth() === new Date().getMonth())

        if (MonthFilterCtx.monthfiltervalue === 'All Appointments' && FilterCtx.filtervalue==='All Appointments') {
            pendingAppointments = data.filter(element => element.appointmentStatus === 'pending');
        }
        else if(MonthFilterCtx.monthfiltervalue === 'All Appointments' && FilterCtx.filtervalue !=='All Appointments'){
            pendingAppointments = data.filter(element => element.appointmentStatus==='pending' && element.appointmentType===FilterCtx.filtervalue);
        }
        else if(MonthFilterCtx.monthfiltervalue !== 'All Appointments' && FilterCtx.filtervalue ==='All Appointments'){
            pendingAppointments = data.filter(element => element.appointmentStatus==='pending' && new Date(element.appointmentSlot).getMonth() == MonthFilterCtx.monthfiltervalue)
        }
        else {
            console.log(data.filter(element => new Date(element.appointmentSlot).getMonth() == MonthFilterCtx.monthfiltervalue));
            pendingAppointments = data.filter(element => element.appointmentStatus === 'pending' && new Date(element.appointmentSlot).getMonth() == MonthFilterCtx.monthfiltervalue && element.appointmentType===FilterCtx.filtervalue) ;
            console.log(pendingAppointments);
        }
    }




    return (
        <>
            {isLoading && <p style={{ textAlign: 'center' }}>Loading...</p>}
            {!isLoading && <h2 style={{ textAlign: 'center', margin: '50px' }}>Active Appointments</h2>}
            {!isLoading && pendingAppointments.length > 0 ? pendingAppointments.map(element => <SingleAppointment key={element._id} data={element} btn={btnHandler} />) : !isLoading && <NoAppointments color='red' />}
            {!props.view && !isLoading && <h2 style={{ textAlign: 'center', margin: '50px' }}>Completed Appointments</h2>}
            {!props.view && !isLoading &&  completedAppointments.length > 0 ? completedAppointments.map(element => <SingleAppointment key={element._id} data={element} />) : !props.view && !isLoading && <NoAppointments color='red' />}
        </>
    )
};


export default Appointments;