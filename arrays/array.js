function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    let reversedArray = []; 
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]); }
    return reversedArray; 
}
module.exports=reverseArray;