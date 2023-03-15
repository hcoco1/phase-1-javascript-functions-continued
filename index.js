function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog');

function mondayWork(activity = "go to the office" ) {
    return `This Monday, I will ${activity}.`;
}
/*
let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
*/

function wrapAdjective(wrapper='*') {
    return function inner(adjetive='special') {
      return `You are ${wrapper}${adjetive}${wrapper}!`
    }
  }
