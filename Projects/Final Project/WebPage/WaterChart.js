new Chart(document.getElementById("myChart"), {
    type:'scatter',
    data: {
        labels:["Floatzel", "Palkia", "Manaphy", "barraskewda "],
        datasets: [{
            label: "Offence",
            data: [{x:105,y:115}, {x:150,y:100}, {x:100,y:100}, {x:136,y:123}],
            backgroundColor: 'rgb(255, 255, 255)'
        }]
    }
})
new Chart(document.getElementById("mySecondChart"), {
    type:'scatter',
    data: {
        labels: ["Palkia","Manaphy","Toxapex"],
        datasets: [{
            label: "Defence",
            data: [{x:100,y:120},{x:100,y:100},{x:152,y:142}],
            backgroundColor: 'rgb(255, 255, 255)'
        }]
    }
})