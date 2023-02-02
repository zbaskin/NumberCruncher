const combinationSum = function (candidates, target) {
    let res = [];
    let temp = [];
    let tolerance = 0.000001
    console.log(Math.abs(6.6 - (2.2+4.4)) < tolerance)
    let iterate = (index, sum) => {
        if (sum > target && Math.abs(sum - target) > tolerance) return;
        if (Math.abs(sum - target) < tolerance) {
            res.push([...temp]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] > target || candidates[i] <= 0 || isNaN(candidates[i])) continue;
            temp.push(candidates[i]);
            iterate(i, sum + candidates[i]);
            temp.pop();
        }
    }
    iterate(0, 0);
    console.log(res);
    return res;
}

export default combinationSum;