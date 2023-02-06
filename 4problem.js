function findingBadData(aray){
    /* 
    here in this problem we have to find how many of the given array element is negetive number.
    */

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

let ary =  [ 10,20,30,-50 ];
let res  = findingBadData(ary);
console.log(res);