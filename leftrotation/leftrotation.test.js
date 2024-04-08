const rotateLeft =require('./leftrotation')
test('rotating array[5,4,3,2,1] left by 3 positions should return[ 2, 1, 5, 4, 3 ]',() =>{
    expect(rotateLeft(3,[5,4,3,2,1])).toEqual([ 2, 1, 5, 4, 3 ])
})
test('number is negative for rotation it will return error',()=>{
    expect(rotateLeft(-3,[3,2,1])).toBe("Error: THE rotation Input is negative or Array is empty")
})
test('empty array it will return error',()=>{
    expect(rotateLeft(4,[])).toBe("Error: THE rotation Input is negative or Array is empty")
})
test('rotating array[4,3,2,1] left by 2 positions should return[ 2, 1, 4, 3 ]',() =>{
    expect(rotateLeft(2,[4,3,2,1])).toEqual([2,1,4,3])
})