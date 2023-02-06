function mindGame(number){

    /* Atfirst it will multiply the given number with 3 then it will add 10 with the number after that it will multiply the number with 2 then lastly it will substract 5 from the number and finally return the number 
    */
    if(typeof number != "number" || number  < 0){
        return "please enter a valid input";
    }
   
    number *= 3;
    number += 10;
    number /= 2;
    number -=  5;

    return number;

}




function evenOdd(message){

    // Here in this function we are checking is the length of the given message is even or odd.

    if(typeof message != "string"){
        return "please enter a valid input";
    }
    
    let size = message.length;

    if(size % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }

}



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




function findingBadData(aray){
    
    // here in this problem we have to find how many of the given array element is negetive number.
    

    if(Array.isArray(aray) != true){
        return "please enter a valid input";
    }

    let badDataCount = 0;
    for(let i = 0; i<aray.length; i++){

        if(aray[i] < 0){
            badDataCount++;
        }

    }

    return badDataCount;

}




function gemsToDiamond(number1, number2, number3){

    /* 
    here in this problem we have to conver 3 friend gems into diamond
    where, friend one per gems = 21 diamond , friend two per gems =  32 diamond , friend three per gems = 43 diamond
    after converting if the totall diamond amount is greater then 2000 return (diamond amount - 2000) 
    otherwise return the original result of diamond
    */

    if( typeof number1 != "number" || typeof number2 != "number" || typeof number3 != "number"){
        return "please enter a valid input";
    }

    let friendOneGemsPower = 21;
    let friendTwoGemsPower = 32;
    let friendThreeGemsPower = 43;

    let totallDiamond = (number1 * friendOneGemsPower) + (number2 * friendTwoGemsPower) + (number3 * friendThreeGemsPower);

    if(totallDiamond >= (1000 *2) ){
        return totallDiamond - 2000;
    }
    else{
        return totallDiamond;
    }

}
