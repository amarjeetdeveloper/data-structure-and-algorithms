// Window Sliding Technique is a computational technique which aims to reduce the use of nested loop and replace it with a single loop, thereby reducing the time complexity.

// Q. maximum sum subarray of size k

// brute force 

// function slidingWindow(arr, k){
// let maxSum = -Infinity
// for (let i=0;i<arr.length-k;i++){
//     let sum = 0
//     for(let j=0;j<k;j++){
//         sum += arr[i+j]
//         maxSum = Math.max(sum,maxSum)
//     }
// } return maxSum
// }

// console.log(slidingWindow([1,2,3,9994,654,98,6,53,4634,5,64,4,31,13,134,6466,31],4))

// Using sliding windows

function slidingWindow(arr, k){
if(arr.length<k) {
    return []
}
let maxSum = -Infinity
let sum = 0
for(let i=0;i<k;i++){
    sum += arr[i]
}
for(let i=k;i<arr.length;i++){
    sum += arr[i]-arr[i-k]
    if(sum>maxSum){
    maxSum = sum  
    }
} 
return maxSum
}

console.log(slidingWindow([213,2,465,13,431,646,49,6,3,631,3163,463,164,63,3,13,134,6],5))