// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers = ['driver1','driver2']){ return [drivers[0],drivers[1]]}
const returnLastTwoDrivers = function(drivers = []) { return [drivers[drivers.length-2],drivers[drivers.length-1]] }
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
const createFareMultiplier = arg => () => arg*arg 
const fareDoubler = arg => arg*2
const fareTripler = arg => arg*3
const selectDifferentDrivers = (arrayOfDrivers, fun) => fun(arrayOfDrivers)
