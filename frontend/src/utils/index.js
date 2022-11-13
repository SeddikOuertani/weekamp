export const compareDates = (startDate, endDate) => {
    if(new Date(startDate) <= new Date(endDate)){
        return true;
    }else{
        return false;
    }
}