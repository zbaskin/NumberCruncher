function printArray(a) {
    let s = "";
    for (let item of a) {
        s += "["
        for (let i = 0; i < item.length - 1; i++) {
            s += item[i] + ", ";
        }
        s += item[item.length - 1] + "]"
    }
    return s;
};

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort();
    }
    var set = new Set(arr.map(JSON.stringify));
    var newArr = Array.from(set, JSON.parse);
    return newArr.sort((a, b) => { return a.length - b.length });
}

const combinationSum = function (candidates, target) {
    let res = [];
    let temp = [];
    let tolerance = 0.000001;
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
    res = removeDuplicates(res);
    console.log(res);
    return res;
}

function callFunction() {
    var arrVal = document.getElementById("array").value;
    var x = document.getElementById("target").value;
    
    var arr = [];
    var arrStr = arrVal.split(",");
    for (var i = 0; i < arrStr.length; i++) {
        arr.push(parseFloat(arrStr[i]));
    }
  
    var result = combinationSum(arr, parseFloat(x));
  
    return result;
};

export default callFunction;