'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
let arr =str.split(' ')
let len=arr.length
if (len%2==0){
    var word =arr[(arr.length/2)]

}
else{
    var word =arr[((arr.length+1)/2)-1]

}
let arr2=word.split('')

return arr2.length

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
let arr1=str1.split('')
let arr2=str2.split('')
let arr3=[]



if (arr2.length!=arr1.length) {
    return false
}


for (let index = 0; index < arr1.length; index++) {
if (arr2.includes(arr1[index])) {
    arr3.push( arr2.filter (element =>element===arr1[index]))
}
  
    
}



return arr3.length==arr1.length 

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
for (let index = 0; index < arr.length; index++) {
    if (arr[index]==int) {
        return index
    }
   else if(int==(arr[index]+1)){
return index+1

   } 
}














}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };