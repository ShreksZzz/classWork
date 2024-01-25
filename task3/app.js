// const person = {
//     name: "Stepan",
//     lastName: "Mihalich",
//     age: 32,
//     hobby: ["MovieMaking"],
//     adress: {
//         home: 'ул. Пушкина, дом Колотушкина',
//         city: 'г. Вогоград'
//     },
//     sayHello: function() {
//         console.log('Два по корпусу!!!');
//     }
// };

// console.log(person)

const collages = [
//студент
{
name: "Григорий",
surname: "Лепс",
age: 17,
friends: ["Олег", "Петя", "Артем"],
parasToday: {
    first: "Матан",
    second: "МДК",
    third: "БЖ",
    }
},
//Препод
{
name: "Михал",
surname: "Палыч",
age: 30,
subjects: ["Матан", "Теория вероятности", "Дискретная математика"],
groupsToday: {
    first: "ПБшники",
    second: "Программисты",
    third: "СисАдмины"
    }
}
];

console.log(collages[0] ["name"], collages[0] ["surname"], collages[0] ["parasToday"]);
console.log(collages[1] ["name"], collages[1] ["surname"], collages[1] ["subjects"]);