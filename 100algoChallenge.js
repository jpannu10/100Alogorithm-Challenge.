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




/*   Alphabetics Shift   */
 
  function alphabeticsShift1( inStr ){ 
     let newArr = [];
   inStr.split('').map((item, index)=>{
   //getting  'charCodes' and Pushing them into 'new Arr'.
   newArr.push(inStr.charCodeAt(index) + 1 );
  })

   // Check for 'charcodes' : '123/{', If there then replace with 'charcodes' 'a: 97'. 
  newArr = newArr.map((item,index)=>{
     if(item === 123){
       return item = 97 ;
     }else {
       return item;
     }
  })
//Converting 'UniCode' to 'Actual Values'.
  newArr = newArr.map((item,index)=>{
    return String.fromCharCode(item);
  })
 return newArr.join('');

}
 
//Better Way.
    function alphabeticsShift2( strName ) {
      let newArr = [];
        let alphabets = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
      ];

    let arrList = strName.split('');

      let index = 0;
      for ( let i = 0 ; i < arrList.length ; i++ ){

          if (arrList[i] !== 'z' ) {
           index = alphabets.indexOf(arrList[i]) + 1;
          }else {
         index = 0;
          }

          newArr.push(alphabets[index]) ;

      }
    return newArr.join('');
    }



    alphabeticsShift1('crazy');
    alphabeticsShift2('crazy');





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

