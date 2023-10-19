// Code your solution in this file!



const returnFirstTwoDrivers = function(drivers) {

  return drivers.slice(0,2);
   
}

const returnLastTwoDrivers = function(drivers) {

  return drivers.slice(2,4);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(num){

   return createFareMultiplier => createFareMultiplier * num
   

}


const fareDoubler = function createFareMultiplier(num){

return num * 2

}



  
const fareTripler = function createFareMultiplier(num){

  return num * 3
}




const arrayOfDrivers = drivers


function selectDifferentDrivers(arrayOfDrivers, callback) {

return callback(arrayOfDrivers)
  
};
 