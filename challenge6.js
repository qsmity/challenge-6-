challenge 6; 

var arraySort = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
var strSort = [1,2,4,"591",392,"391",2,5,10,"2",1,1,1,"20",20];

function subArray(arr){
  //make a tmp array to make each sub array
  let tmpArray = []; 
  //make empty array to put sub array and individuals components
  let result = []; 

  //sort array
  let sortArray = arr.sort((a,b)=> a-b);
  console.log(sortArray);
 

  for (i = 0; i < sortArray.length; i++) {
    if (i === 0 || sortArray[i] === sortArray[i-1]) {
      tmpArray.push(sortArray[i]);
    } else if (sortArray[i] === sortArray[i+1] && sortArray[i] !== sortArray[i-1]) {
          if (sortArray[i-1] !== sortArray[i-2]){
            tmpArray.push(sortArray[i]);
          } else {
            result.push(tmpArray);
            tmpArray = [];
            tmpArray.push(sortArray[i]);
          }
     } else {
          if (sortArray[i-1] !== sortArray[i-2]){
          result.push(sortArray[i]);
          } else {
          result.push(tmpArray);
          result.push(sortArray[i]);
          tmpArray = [];
          }
      }
  };
  return result
};

function sepArray(arr){
  let finalArray = []; 
  let numArray = [];
  let strArray = []; 

  for (i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string') {
      strArray.push(arr[i]);
    } else if (typeof arr[i] === 'number') {
      numArray.push(arr[i]);
    }
  }
  console.log(numArray, strArray);
  let orderedArray = subArray(numArray);
  console.log(orderedArray); 
  finalArray.push(orderedArray, strArray);
  console.log(finalArray); 
};

//checks if there are strings in the array, sorts them from #'s, sort numbered array into sub arrays, then add string array
sepArray(strSort); 

//just sorts all number arrays into sub arrays
// console.log(subArray(arraySort)); 