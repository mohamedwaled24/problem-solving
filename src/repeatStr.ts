// write a function that repeats the string within the sent number

// solutuin 1
function repeatStr(str:string , num:number):string{

    let result ="";
    for(let i = 0 ; i<num ; i++){
        result += str  ;
    }
    return result
}

console.log(repeatStr2("hello" , 3))


// solution 2


function repeatStr2(str:string , num:number):string{
    return str.repeat(num)
}