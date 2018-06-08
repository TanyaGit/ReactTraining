let myarray = [10,20,30,40,50]
//add 30 to array
arr2=[...myarray,90]
console.log(arr2)
arr3=[...arr2.slice(0,1), ...arr2.slice(2)]
console.log(" after Sliceing"+arr3)
