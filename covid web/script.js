const Data = () => {
    let ctr = document.getElementById('ctr').value;
    let name = document.getElementById('name');
    let pop = document.getElementById('population');
    let ac = document.getElementById('ac');
    let cc = document.getElementById('cc');
    let death = document.getElementById('death');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd0ce9043damshf86a95c7fc3ed44p1728ebjsn15ead1eb3581',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    fetch('https://covid-193.p.rapidapi.com/statistics?country=' + ctr, options)
        .then(response => response.json())
        .then(data => {
            name.innerHTML = data.response[0].country;
            pop.innerHTML = data.response[0].population;
            ac.innerHTML = data.response[0].cases.active;
            cc.innerHTML = data.response[0].cases.critical;
            death.innerHTML = data.response[0].deaths.total;
            if (data.response[0].cases.critical == 0) {
                cc.innerHTML = 0;
            }
        })
        .catch(err => console.error(err));
}
