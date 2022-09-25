//Given an array of integers, Find the count of occurrence of elements inthe array where one of thr neighbours of the element id a prime number.

//Input: [2,6,7,12,19,10]
//Output: 3

//DESCRIPTION: Here there are 3 items where one of the neighbour is a prime number.

// * 6 has a neighbour 7 which is a prime.
// * 12 has a neighbour 19 which is a prime number.
// * 10 has a neighbour 19 which is a prime number.


function checkPrime(num){
  let prime=true;
  if(num==1){
    return false;
  } else{
    for(let i=2;i<num;i++){
      if(num%i==0){
       prime=false;
        break;
      }
    }
    if(prime===true){
    return true;
    } else {
    return false;
    }
  }
  
}

// let output=checkPrime(12);
// console.log(output);

let arr=[2,6,7,12,19,10];
let count=0;
  if(checkPrime(arr[1])){
    count++;
  }
for(let i=1;i<arr.length-2;i++){
    if(checkPrime(i-1)||checkPrime(i+1)){
      count++;
  } else {
      if(checkPrime(arr[length-2])){
      count++
    }
  }
  }
    
    console.log(count);