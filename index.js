// // Code your solution in this file



function findMatching(drivers_arr, name){
  return drivers_arr.filter(function(n) { return n.toLowerCase() === name.toLowerCase() });
}

function fuzzyMatch(drivers_arr, letters){
  let lengthOfName = letters.length
  return drivers_arr.filter(function(n) { return n.slice(0, lengthOfName) === letters });
}

function matchName(drivers_arr, driver){
  return drivers_arr.filter(function(n) { return n.name.toLowerCase() === driver.toLowerCase()})
}
