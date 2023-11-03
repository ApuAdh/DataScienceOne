new Chart(document.getElementById("myChart"), {
    type:'scatter',
    data: {
        labels:["Entei", "Blacephalon", "Cinderace", "Rapidash", "Infernape", "Victini"],
        datasets: [{
            label: "Offence",
            data: [{x:115,y:100}, {x:151,y:107}, {x:116,y:119}, {x:100,y:105}, {x:104,y:108}, {x:100,y:100}],
            backgroundColor: 'rgb(255, 255, 255)'
        }]
    }
})
new Chart(document.getElementById("mySecondChart"), {
    type:'scatter',
    data: {
        labels: ["Ho-Oh", "Reshiram", "Victini"],
        datasets: [{
            label: "Defence",
            data: [{x:90,y:154},{x:100,y:120},{x:100,y:100},{}],
            backgroundColor: 'rgb(255, 255, 255)'
        }]
    }
})