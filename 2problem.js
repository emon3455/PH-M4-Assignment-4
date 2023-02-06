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

let res = evenOdd("emon");
console.log(res);