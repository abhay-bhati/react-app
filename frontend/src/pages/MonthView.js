import Appointments from '../components/Appointments';
import Filter from '../components/Filter';
import MonthFilter from '../components/MonthFilter';

function MonthView(){

    return (
        <>
        <Filter />
        <MonthFilter />
        <Appointments view='month' />
        </>
    )
};


export default MonthView;