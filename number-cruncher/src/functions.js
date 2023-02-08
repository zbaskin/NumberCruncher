function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort();
    }
    var set = new Set(arr.map(JSON.stringify));
    var newArr = Array.from(set, JSON.parse);
    return newArr.sort((a, b) => { return a.length - b.length });
}

const combinationSum = function (candidates, target, isUnique) {
    let res = [];
    let temp = [];
    let tolerance = 0.000001;

    candidates.sort();
    let iterate = (index, sum, count) => {
        if (count > 100) return;
        if (res.length > 1000) return;
        if (sum > target && Math.abs(sum - target) > tolerance) return;
        if (Math.abs(sum - target) < tolerance) {
            res.push([...temp]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] == 0 || isNaN(candidates[i])) continue;
            temp.push(candidates[i]);
            if (isUnique || candidates[i] < 0) iterate(i + 1, sum + candidates[i], count + 1);
            else iterate(i, sum + candidates[i], count + 1);
            temp.pop();
        }
    }
    iterate(0, 0, 0);
    res = removeDuplicates(res);
    console.log(res);
    return res;
}

function callFunction(uniqueChecked) {
    var arrVal = document.getElementById("array").value;
    var x = document.getElementById("target").value;
    
    var arr = [];
    var arrStr = arrVal.split(",");
    for (var i = 0; i < arrStr.length; i++) {
        arr.push(parseFloat(arrStr[i]));
    }
  
    var result = combinationSum(arr, parseFloat(x), uniqueChecked);
  
    return result;
};

export default callFunction;