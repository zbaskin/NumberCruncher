const fourSum = function (nums, target) {
    const result = {};
    const map = {};
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        const sum = nums[i] + nums[j];
        if (map[target - sum]) {
          map[target - sum].forEach(([a, b]) => {
            const set = new Set([a, b, i, j]);
            if (set.size === 4) {
              const current = [nums[a], nums[b], nums[i], nums[j]].sort((a, b) => a - b);
              result[current.join(',')] = current;
            }
          });
        }
        if (map[sum]) {
          map[sum].push([i, j]);
        } else {
          map[sum] = [[i, j]];
        }
      }
    }
    return Object.values(result);
}

const combinationSum = function (candidates, target) {
  let res = [];
  let temp = [];
  let iterate = (index,sum) => {
      if (sum>target) return;
      if (sum == target) {
          res.push([...temp]);
          return;
      }
      for (let i =index; i<candidates.length;i++) {
          if (candidates[i]>target) continue;
          temp.push(candidates[i]);
          iterate(i, sum+candidates[i]);
          temp.pop();
      }
  }
  iterate(0,0);
  console.log(res);
  return res;
}