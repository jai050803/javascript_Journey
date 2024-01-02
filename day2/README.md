# Important point about array in javascript

- Array in javascript are use to store multiple variables in single variable.

- Arrays are indexed and the indexing starts from 0.

- there are number of ways to create the array in javascript.

the simplest method is

array1 = new Array();

- it take the number of elements in the  array as the parameter value. For example if you want to have 7 elements in your array then you can give the parameter 7. That will create 7 empty boxes in the array

for example -

array2 = new Array(7)

- array elements are stored in the square brackets mostly and are separated by commas. For example - 

- array can store values of multiple data types.

arr3 = [1,2,3,3.15, "monday"]

- to see the array,we can use the console.log() method to print the array in the console.

console.log(arr3)

- To access a particular element of an array, we can refer to its index number.

console.log(arr3[3]) - it will print the third element of the arr3

- to add any element in an array you can use the following method 

arr1[1] = 3

- it wil ad an element at the index position 1 of the array. It does not matter if there is any previous element is there at the previous index position but it will just add the element at that position of the array.

