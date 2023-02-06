function isLGSeven(number){

    /*  
    here we have to find the difference between the given number and 7.
    if the difference is less then 7 return the difference otherwise return the double of the given number
    */

    if(typeof number != "number"){
        return "please enter a valid input";
    }

    let difference = number - 7;

    if(difference < 7){
        return difference;
    }
    else{
        return number*2;
    }

}

let res = isLGSeven(15);
console.log(res);