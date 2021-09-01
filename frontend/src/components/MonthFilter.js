import styles from './Filter.module.css';
import {useState, useContext} from 'react';
import {MonthFilterContext} from '../store/context';

function MonthFilter() {
    const MonthFilterCtx = useContext(MonthFilterContext);
    console.log(MonthFilterCtx);
    
    const optionChangeHandler = (event) => {
        console.log('opt change');
        console.log(event.target.value);
        MonthFilterCtx.setmonthfiltervalue(event.target.value);

    }

    return (
        <form className = {styles.container} style={{marginTop:'10px'}}>
            <span>Filter By Month  : </span>
            <span className = {styles.filter}>
                <select name="filter" id="filter" onChange = {optionChangeHandler}>
                    <option value='All Appointments'>All Appointments</option>
                    <option value="0">Jan</option>
                    <option value="1">Feb</option>
                    <option value="2">Mar</option>
                    <option value="3">Apr</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">Aug</option>
                    <option value="8">Sep</option>
                    <option value="9">Oct</option>
                    <option value="10">Nov</option>
                    <option value="11">Dec</option>
                </select>
            </span>
        </form>
    )
};


export default MonthFilter;