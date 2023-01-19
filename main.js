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