function CheckNumber(param){
    if(param < 100){
        console.log(`the ${param} is  less than 100`)
        if(param%2 == 0){
            return console.log(`the ${param} is even`);
        }
        else{
          return  console.log(`the ${param} is odd`);
        }
    }
    else{
        return console.log(`the ${param} is more than 100!`)
    }
}
CheckNumber(2);
