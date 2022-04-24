
document.getElementById('loc')
    .addEventListener('keyup', getLocations);


function getLocations(e) {

    console.log(e.target.value);

    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'php/suggestion.php?q=' + e.target.value);
    xhttp.send();

    xhttp.onload = function() {
        if(this.status === 200) {
            
            const data = JSON.parse(this.response);
            console.log(data);

            displayLocationsFound(data);
            
        }
            
        
    }
}

function displayLocationsFound(locations) {

    const output = document.getElementById('output');
    output.innerHTML = '';

    locations.forEach(loc => {
        
        const locationOutput = `
        <div class="card m-2">
            <ul class="list-group">
                <li class="list-group-item"><strong>Comune: </strong>${loc.name_com}</li>
                <li class="list-group-item"><strong>Provincia: </strong>${loc.name_prov} (${loc.abbr_prov})</li>
                <li class="list-group-item"><strong>Regione: </strong>${loc.name_reg}</li>
                <li class="list-group-item"><strong>Posizione: </strong> ${loc.lat}° ${loc.lng}°</li>
            </ul>
        </div>
        `;

        output.innerHTML += locationOutput;
    });

}