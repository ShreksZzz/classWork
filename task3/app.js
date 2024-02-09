function arrCheck (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log("Да");
            return;
        }
    }
    console.log("Нет");
}

const numbers = [2, 4, 6, -5]
arrCheck(numbers);