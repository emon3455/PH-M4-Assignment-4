function mindGame(number){

    /* Atfirst it will multiply the number with 3 then it will add 10 with the number after that it will multiply the number with 2 then lastly it will substract 5 from the number and finally return the number 
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

    // Here in this function we are checking is the length of the message is even or odd.
    
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