const football = {
    namesOfTeams: ["Атлеты", "Русбол"],
    score: [10, 7],
    date: "10.02.2023",
    time: "21:19"
}

var footballInfo = ""
for(let key in football) {
footballInfo += (`${key}: ${football[key]} \n`)
}
console.log(footballInfo)

if (football.score[0] > football.score[1]) {
console.log("Победили Атлеты!")
} else if (football.score[0] < football.score[1]) {
    console.log("Победили Русбол!")
} else {
    console.log("Ничья!")
}