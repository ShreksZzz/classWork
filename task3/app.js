class MaxNum {
    filter (a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
}

const maxNum = new MaxNum();
console.log(maxNum.filter(4, 9));