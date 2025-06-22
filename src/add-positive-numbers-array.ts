// add the positive numbers in the array

//solving steps
// * inital value = 0
// * loop through the array
// * if the number is positive, add it to the inital value


function sumOfPositiveNumbers(arr:number[]):number{
    let initValue =0;
    for(let i =0; i<arr.length; i++){
     if(arr[i] > 0 ){
        initValue += arr[i]
     }
    }
    return initValue;
}


console.log(sumOfPositieNumbers2([1,2,3,4,5]))

// solution 2 with built-in

function sumOfPositieNumbers2(arr:number[]):number{
    return arr.filter(num => num > 0).reduce((acc , curr)=> acc + curr,0)
}




