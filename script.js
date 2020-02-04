

///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////

// function getRecursionFibonachi(n) {
//   let res;
//   if (n === 0) { 
//     return 0;
//   }
//   if (n === 1) {  
//     return 1;
//   } else {
//     res = getRecursionFibonachi(n - 1) + getRecursionFibonachi(n - 2);
//     return res; 
//   }  
// }




function getRecursionFibonachi(n, d, b, j) {
  let c 
  if (n === 0) { 
    return 0;
  }
  if (n === 1) {  
    return 1;
  } 
  if (n > 1) {
    c = d + b
    d = b
    b = c
    if (j === n) {
      return b       
    } 
    if (j < n) {
      j++
      return getRecursionFibonachi(n, d, b, j)
    } 
  }  
}

function getCycleFibonachi(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  } else {
    let a = 0
    let b = 1
    for (let i = 2; i <= n; i++) {
      let c = a + b
      a = b
      b = c   
    }
    return b 
  }
}  

function getFibElement(index, callback) {
  let c 
  let numberIndex = index - 1
  if (numberIndex < 100) { 
    c = getRecursionFibonachi(numberIndex, 0, 1, 2)
    callback(index, c)  
  } else { 
    c = getCycleFibonachi(numberIndex)
    callback(index, c) 
  }
  return c
}

/////////////////////////////////
// const indexToFind = 6
// const fibElement = getFibElement(indexToFind, callbackFunc)

// function callbackFunc(num, numFib) {
//   console.log("The " + num + " element of Fibonacci sequence is " + numFib)
//   return
// }
////////////////////////////////

let i = 0
while (i < 20) {
  let resultX = Math.floor(Math.random() * (200 - 2 + 1)) + 2
  getFibElement(resultX, callback)
  i++   
}

function callback(numbInde, numberFib) {
  console.log("The " + numbInde + " element of Fibonacci sequence is " + numberFib)
  return
}




