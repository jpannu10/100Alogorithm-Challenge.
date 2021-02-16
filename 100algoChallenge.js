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


/*    */


/*    */

