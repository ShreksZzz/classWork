class ArrSum {
    findSum (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
}

const arrSum = new ArrSum();
const numbers = [2, 5, 3, 9];
console.log(arrSum.findSum(numbers));