import { expect, test } from "bun:test";

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let x = 1; x < nums.length; x++) {
            if (i !== x && Number(nums[i]) + Number(nums[x]) === target) {
                return [i, x]
            }
        }
    }

    return [0]
}

test('example 1', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
})

test('example 2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
})

test('example 3', () => {
    expect(twoSum([2,4,11,3], 6)).toEqual([0,1])
})

test('example 4', () => {
    expect(twoSum([2,5,5,11], 10)).toEqual([1, 2])
})