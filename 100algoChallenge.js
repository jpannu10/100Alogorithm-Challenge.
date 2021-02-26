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



/*  AlphabetSubSequence  */
function alphabetSubSequence(inStr) {

  let baseElement = inStr.charCodeAt(0);
  let inputArr = inStr.split('');
 
  let  newArr = inputArr.map( (item, index) =>{
    if( inStr.charCodeAt(index) >= baseElement  ) {
      baseElement = inStr.charCodeAt(index);
      return true;
    }else {
      return false;
    }
  })

   if(newArr.includes(false)){
     return false;
   }else {
     return true;
   }
 }
console.log(alphabetSubSequence('zab'));
console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));
console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));




/*  alternatingSums  */
function alternatingSums( inArr ) {

let team1EvenSum  = 0;
let team2OddSum = 0;


inArr.forEach((item, index)=>{

    if(index % 2 === 0){
      team1EvenSum += item;
    }else {
      team2OddSum += item;
    }

 })
 return [team1EvenSum, team2OddSum]
}

alternatingSums([50, 60, 60, 45, 70])

/*  Equally Strong  */
function equallyStrong( mL, mR, fL, fR ) {

    let myW =  mL <= mR ? mL : mR;
    let myS =  mL >= mR ? mL : mR;

    let frW =  fL <= fR ? fL : fR;
    let frS =  fL >= fR ? fL : fR;

   return ((myW == frW && myS == frS ) ? true : false);
}

console.log(equallyStrong(10, 15, 15, 10));
console.log(equallyStrong(15, 10, 15, 10));
console.log(equallyStrong(15, 10, 15, 9));




/*  Similar Array  */

function similarArr ( arr1 , arr2 ) {
 
 //First way.
 arr1 = arr1.sort((a,b)=>{
  return a-b;
 });
  arr2 = arr2.sort((a,b)=>{
  return a-b;
 });
  if(arr1.length !== arr2.length){
    return false;
   } else {
    for ( let i = 0 ; i <= arr1.length ; i++ ) {
      if(arr1[i] !== arr2[i]){
        return false
      }
    }
  }
      return true;

  //2nd Way.
  arr1 = arr1.sort((a,b)=>{return a-b}).toString();
  arr2 = arr2.sort((a,b)=>{return a-b}).toString();

   return  arr1 == arr2 ? true : false;

}

console.log(similarArr([1, 4, 3] , [ 1, 2, 3]));
console.log(similarArr([1, 2, 3], [2 ,1 ,3]));
console.log(similarArr([ 1 , 2, 2], [ 2, 1 ,1]))

/*  Array Conversion  */
// It will calculate, "2-consecutive numbers",sum if even iterations and Product of odd iterations.
function arrayConversion( inArr ) {
 let isOdd = true;

 while ( inArr.length !== 1 ) {
  inArr = sumProduct(inArr , isOdd);
  isOdd = !isOdd;
 }
 return inArr[0];
}


function sumProduct( inArr  , isBoolean ) {
  let sumProducts = [];

  if(isBoolean) {

for ( let i = 0 ; i < inArr.length ; i+=2 ){
   sumProducts.push(inArr[i] + inArr[i + 1])
   }
  } else {
  for ( let i = 0 ; i < inArr.length ; i+=2 ){
   sumProducts.push(inArr[i] * inArr[i + 1])
  }
 }
 return sumProducts;
}



arrayConversion([1,2,3,4,5,6,7,8]);

/*    */


/*    */


/*    */


/*    */


/*    */

