// code your solution here
//Implement a function called saturdayFun:


function saturdayFun( activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!` //return actual value here
}

console.log (saturdayFun("rugby"))
//Implement a function called mondayWork:


function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

console.log (mondayWork("work from home"))


// define wrapAdjective function with default flair '*'
function wrapAdjective(flair = "*") {

    // return inner function with default adjective 'special'
    return function(adjective = "special") {
  
      // return final message with flair wrapping the adjective
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  