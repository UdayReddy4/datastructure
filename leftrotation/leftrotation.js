function rotateLeft(r, arr) {
    if (arr.length === 0 ||r<0) {
        return "Error: THE rotation Input is negative or Array is empty";
    }
    else{
 const n = arr.length;
    const rotations = r % n;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    
    return rotatedArray;
    }
}
//console.log(rotateLeft(3,[5,4,3,2,1]));

module.exports=rotateLeft