//   let arr = [1, 2, 3, 4, 5, 6]

//     function add(arr) {
//         if (arr.length === 1) return arr[0]
//         return arr[0] + add(arr.slice(1))
//     }
//     console.log(add(arr))
    
//     let array = [1, 2, 3, 4, 5];
    
//         let sum = array.reduce(function(a, b){
//             return a + b;
//         }, 0);
    
//         console.log(sum);   

let array = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log('Sum is : ' + sum);