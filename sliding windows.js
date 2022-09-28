// Window Sliding Technique is a computational technique which aims to reduce the use of nested loop and replace it with a single loop, thereby reducing the time complexity.
// Overview

    Sliding Window Technique is a popular method in algorithmic problems because of its high efficiency (mostly linear)
    It helps to avoid computing repetitive problems by computing only the new part that's introduced in the data set and discarding the one that moves out, usually 1 at a time.
    There are plenty of articles explaining the what and how, so this post isn't gonna repeat on that. This post is to sketch out a rough algorithm which can be tweaked for most problems on SW
    This is meant to be a continuosly improving post and I'll keep updating it and add more problems as I progress.
    Collaboration works wonders so I'd encourage anyone reading this post to feel free to contribute for the benefit of the community.

Sample Problem: Longest Substring Without Repeating Characters.

    Given a string s, find the length of the longest substring without repeating characters.

Algorithm

    Use a hashMap to keep track of the latest index of each letter
    Keeping the left pointer at rest, move the right pointer by 1 letter at a time.
    When a repeating character is encountered, update the maxLength and move the left pointer to max{left pointer, old last occurence of this character as available in the map}. We do a max because we don't want to take the left pointer backwards at any time (e.g. in "abba"), it will only move forward or stay still.
    return max {right-left, maxLength}. Doing this outside the loop is essential as it handles strings with all unique chars.

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
