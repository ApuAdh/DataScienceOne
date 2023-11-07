new Chart(document.getElementById("myChart"), {
    type:'scatter',
    data: {
        labels:["Celebi", "Shaymin", "Zarude", "Kartana"],
        datasets: [{
            label: "Offence",
            data: [{x:100,y:100},{x:100,y:100},{x:120,y:105},{x:181,y:109}],
            backgroundColor: 'rgb(255, 255, 255)'
        }]
    }
})
new Chart(document.getElementById("mySecondChart"), {
    type:'scatter',
    data: {
        labels: ["Celebi", "Shaymin", "Ferrothorn", "Sceptile"],
        datasets: [{
            label: "Defence",
            data: [{x:100,y:100},{x:100,y:100},{x:131,y:116}],
            backgroundColor: 'rgb(255, 255, 255)'
        }]
    }
})