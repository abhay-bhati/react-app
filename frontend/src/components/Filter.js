import styles from './Filter.module.css';
import {useState, useContext} from 'react';
import FilterContext from '../store/context';

function Filter() {
    const FilterCtx = useContext(FilterContext);
    console.log(FilterCtx);
    
    const optionChangeHandler = (event) => {
        console.log('opt change');
        console.log(event.target.value);
        FilterCtx.setfiltervalue(event.target.value);

    }

    return (
        <form className = {styles.container}>
            <span>Filter By Appointment Type  : </span>
            <span className = {styles.filter}>
                <select name="filter" id="filter" onChange = {optionChangeHandler}>
                    <option value='All Appointments'>All Appointments</option>
                    <option value="Fitness Coach Appointment">Fitness Coach Appointment</option>
                    <option value="Nutrition Coach Appointment">Nutrition Coach Appointment</option>
                    <option value="Doctor Appointment">Doctor Appointment</option>
                </select>
            </span>
        </form>
    )
};


export default Filter;