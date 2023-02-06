function mindGame(number){

    /* Atfirst it will multiply the number with 3 then it will add 10 with the number after that it will multiply the number with 2 then lastly it will substract 5 from the number and finally return the number 
    */
   if(typeof number != "number" || number  < 0){
    console.log("please enter a valid input");
    return;
   }
   
   number *= 3;
   number += 10;
   number /= 2;
   number -=  5;

   return number;

}



