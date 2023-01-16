const fourSum = function (nums, target) {
    const result = {}
    const map = {}
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        const sum = nums[i] + nums[j]
        if (map[target - sum]) {
          map[target - sum].forEach(([a, b]) => {
            const set = new Set([a, b, i, j])
            if (set.size === 4) {
              const current = [nums[a], nums[b], nums[i], nums[j]].sort((a, b) => a - b)
              result[current.join(',')] = current
            }
          })
        }
        if (map[sum]) {
          map[sum].push([i, j])
        } else {
          map[sum] = [[i, j]]
        }
      }
    }
    console.log(Object.values(result))
    return Object.values(result)
}
var a = [1,3,1,0,5,0,1,1,6,2,2,4,1,4];
var x = 8;
console.log(fourSum(a,x));