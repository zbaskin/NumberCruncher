const combinationSum = function (candidates, target) {
    let res = [];
    let temp = [];
    let iterate = (index, sum) => {
        if (sum > target) return;
        if (sum === target) {
          res.push([...temp]);
          return;
        }
        for (let i = index; i < candidates.length; i++) {
          if (candidates[i] > target || candidates[i] == 0) continue;
          temp.push(candidates[i]);
          iterate(i, sum + candidates[i]);
          temp.pop();
        }
    }
    iterate(0,0);
    console.log(res);
    return res;
}

export default combinationSum;