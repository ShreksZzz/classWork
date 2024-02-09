function arrCheck (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            console.log("Да");
            return;
        }
    }
    console.log("Нет");
}

const numbers = [1, 4, 5, 9];
arrCheck(numbers);