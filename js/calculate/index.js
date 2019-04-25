var calculateBounce = function(performanceLevel,salary) {
    if(performanceLevel = null){
        console.log('falut');
    }else if(performanceLevel = 'A'){
        return salary*4;
    }else if (performanceLevel = 'B'){
        return salary*3;
    }else if (performanceLevel = 'C'){
        return salary*2;
    }else if (performanceLevel = 'D'){
        return salary*1;
    }else if (performanceLevel = 'S'){
        return salary*5;
    }
}
// var performanceS = function(salary){
//     return salary*5;
// }

// var calculateBounce = function(performanceLevel,salary){
// }
console.log(calculateBounce('A',20000));