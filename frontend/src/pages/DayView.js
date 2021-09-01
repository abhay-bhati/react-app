import Appointments from '../components/Appointments';
import Filter from '../components/Filter';

function DayView(){

    const todaysDate = new Date().toDateString();

    return (
        <>
        <div style={{width:'85%', margin:'50px auto', fontWeight:'600'}}>Date : {todaysDate}</div>
        <Filter />
        <Appointments />
        </>
    )
};


export default DayView;