// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun("bathe my dog!");

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork("work from home.");

function wrapAdjective(flair="*") {
    const innerFunction = function (name="special") {
        return `You are ${flair}${name}${flair}!`
    }
    return innerFunction
}    
wrapAdjective("||a dedicated programmer||")();