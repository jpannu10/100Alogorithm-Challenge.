/*  Adding Numbers  */
function add( ...numbers ){
   let total = 0;
    let arr = numbers;
  arr.forEach(element => {
        total += element;
  });
  return total; 
}

console.log(add(10,12,28,100));


/* Adding borders   */

let picture = [ 'first Val', 'ded']

function addBorder( arr ){
  let newArr = [];
  arr.forEach(( item:any ) => { 
    newArr.push('*'+ item+ '*'); 
  });
  newArr.push('****');
  newArr.unshift('****')
  return newArr;
}
console.log(addBorder(picture));


/*  Adding 'n' Digits   */
function addDigits( inputNums ) {
 let output = 0;
 let inputArrSt = inputNums.toString().split('');
  inputArrSt.forEach( item =>  output += parseInt(item) )
  return output;
}
console.log(addDigits(1117))



/*   Adjacent Element Product    */

function adjacentElementsProducts(inputArray) {
    let maxProduct = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let temp = (inputArray[i] * inputArray[i + 1]);
        maxProduct = temp > maxProduct ? temp : maxProduct;
    }
    return maxProduct;
}
console.log(adjacentElementsProducts([3, 6, 100, -2, -5, 7 ,100 , 3, 2]));


/*  longestStringOutput  */
function longestStringOutput(arrayInput) {

    //Getting Longest Length.
    let longestLength = 0;
    arrayInput.forEach(element => longestLength = element.length > longestLength ? element.length : longestLength);

    let outputinMatchedLongestLength = [];
    //Matching Longest Length.
    outputinMatchedLongestLength = arrayInput.filter(item => item.length === longestLength);

    return longestLength;
}
console.log(longestStringOutput(['abs', 'jask','0273402397' ,'fd', 'yoh', 'we', '62nn34']));




/*    */

/*    */


/*    */


/*    */


/*    */


/*    */

/*    */


/*    */


/*    */


/*    */


/*    */

