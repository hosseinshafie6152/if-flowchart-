function equation(param1 , param2 , param3){
    if(param1 !== 0){
       let delta = param2**2 - 4*param1*param3;
       if(delta < 0){
        return console.log('the equation is not real root!')
       }
       else{
        let x1 = (-param2 + Math.sqrt(delta))/(2*param1);
        let x2 = (-param2 - Math.sqrt(delta))/(2*param1);
        return console.log(`the roots of equation : x1 = ${x1} , x2 = ${x2}`)
       }
    }
    else{
        return console.log(`the equation is not second degree equation`)
    }
}
equation(7,10,6);