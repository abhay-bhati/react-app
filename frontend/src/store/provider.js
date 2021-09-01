import React, {useState} from "react";
import FilterContext from "./context";
import {MonthFilterContext} from './context';

function FilterProvider(props){
    const [filterVal, setFilterVal] = useState('All Appointments');

    const filtervalueHandler = (value) => {
        setFilterVal(value)
    }
   
    let defValues = {
        filtervalue:filterVal,
        setfiltervalue:filtervalueHandler
    }

    return(
        <FilterContext.Provider value = {defValues}>
            {props.children}
        </FilterContext.Provider>
    )
};

export function MonthFilterProvider(props){
    const [monthfilterVal, setMonthFilterVal] = useState('All Appointments');

    const monthfiltervalueHandler = (value) => {
        setMonthFilterVal(value)
    }
   
    let defValues = {
        monthfiltervalue:monthfilterVal,
        setmonthfiltervalue:monthfiltervalueHandler
    }

    return(
        <MonthFilterContext.Provider value = {defValues}>
            {props.children}
        </MonthFilterContext.Provider>
    )
};


export default FilterProvider;