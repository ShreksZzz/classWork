class CheckArrayForNegative {
    findNegative (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                return "Да";
            }
        }
        return "Нет";
    }
}

const numbers = [2, 4, 1, -1384];
const checkArr = new CheckArrayForNegative();
console.log(checkArr.findNegative(numbers));