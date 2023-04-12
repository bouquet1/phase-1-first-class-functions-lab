const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0, 2); 
//.slice(0, 2): the first is the index where the slice should begin and the second is the index before which it should end.

const returnLastTwoDrivers = () => drivers.slice(2); 
// .slice(2): If no second argument is provided, the slice will run from the index specified by the first argument to the end of the Array.


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// error = selectingDrivers has the `returnFirstTwoDrivers` function to as its first element: AssertionError: expected [ 'Antonia', 'Nuru' ] to deeply equal [Function: returnFirstTwoDrivers]
//THOMPSON: Remember what we need to consider with our functions: INPUT-ACTION-OUTPUT. What does arguments selectingDrivers() accept?
// This function takes two arguments, an array of the names of Scuber’s drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. What does selectingDrivers() return?
// Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers. SO: DOES your function accept two arguments? Does it accept the correct arguments? Based on the incoming arguments, what does it return? What should it return if you do not like what it is returning?
// NICK: So selectingDrivers is the variable and you're setting that to an array.  Start there.  Once you've set the variable to an empty array, provide the array with the two elements it needs for the test.  These two elements are the other variables you've made that have there values set as functions.  


// function createFareMultiplier(){
//    function fareMultiplier(num) {
//    return num + (num * 4);
//  }
//    return fareMultiplier(2)
// }

const createFareMultiplier = (num) => {
    return (fare) => num * num
    }

const fareDoubler = function fareDoubler(fare){
    return fare *2;
}

const fareTripler = function fareDoubler(fare){
    return fare *3;
}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => returnFirstTwoDrivers()


