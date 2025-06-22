// calculate the sum of numbers in array without the biggst and the lowest number
// -if empty or null or 1 value return 0
// - remove the highsest and the lowest numbers



// solution
 function sumOfNumbers(arr:number[]):number{
     if(arr === null) return 0

     let soretedArray = arr.sort((a,b)=> a-b)
     let filterArr = soretedArray.slice(1,-1)

     let sumOfArr = filterArr.reduce((acc , curr)=> acc + curr , 0)

     return sumOfArr

 }

 console.log(sumOfNumbers([1,2,3,4,5,5]))