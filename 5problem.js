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

    if(totallDiamond > (1000 *2) ){
        return totallDiamond - 2000;
    }
    else{
        return totallDiamond;
    }

}

let res  = gemsToDiamond(100, 5, 1);
console.log(res);

