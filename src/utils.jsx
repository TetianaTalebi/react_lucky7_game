// Get a random integer from 1 to 6 inclusive
function d6(){
    return Math.floor(Math.random()*6)+1;
}

// Get n rolls and return an array of numbers that contains n elements (i.e. has length = n)
function getRolls(n){
    return Array.from({length:n}, ()=>d6());
}

// Get sum of nums
// nums is an array of numbers

function sum(nums){
    return nums.reduce((prev, cur) => prev+cur, 0)
}

export {d6, getRolls, sum};