import { APIService } from './ts/API';

const api = new APIService();

const btn = document.querySelector('#btn');
const selected = document.querySelector('#continentSelect');
const main = document.querySelector('#main');


let selectedValue: string;
let selectedNews: string;
let selectedPhase: string;
const x: string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/";
const a: string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/";
const b: string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/";
var y: string;
var res: string;


btn.addEventListener('click', (event) => {
    event.preventDefault();
    selectedValue = (<HTMLInputElement>document.getElementById('continentSelect')).value;
    // alert(selectedValue);
    if (selectedValue == 'All') {
        showData.textContent = null;
        y = "npm-covid-data/";
        res = x + y;
        api.COV_DATA = res;
        covidData();
        alert('Showing All data rank-wise, wait a sec it may take time');
    }
    if (selectedValue == 'Asia') {
        showData.textContent = null;
        y = "npm-covid-data/asia";
        res = x + y;
        api.COV_DATA = res;
        covidData()
        alert('wait a sec and scroll to the data')
    }
    if (selectedValue == 'Africa') {
        showData.textContent = null;
        y = "npm-covid-data/africa";
        res = x + y;
        api.COV_DATA = res;
        covidData()
        alert('wait a sec and scroll to the data')
    }
    if (selectedValue == 'Europe') {
        showData.textContent = null;
        y = "npm-covid-data/europe";
        res = x + y;
        api.COV_DATA = res;
        covidData()
        alert('wait a sec and scroll to the data')
    }
    if (selectedValue == 'North America') {
        showData.textContent = null;
        y = "npm-covid-data/northamerica";
        res = x + y;
        api.COV_DATA = res;
        covidData()
        alert('wait a sec and scroll to the data')
    }
    if (selectedValue == 'South America') {
        showData.textContent = null;
        y = "npm-covid-data/southamerica";
        res = x + y;
        api.COV_DATA = res;
        covidData()
        alert('wait a sec and scroll to the data')
    }
});


const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', (e) => {
    e.preventDefault();
    selectedNews = (<HTMLInputElement>document.getElementById('covidNewsSelect')).value;
    if (selectedNews == 'All') {
        showData.textContent = null;
        y = "get-all-treatment";
        res = b + y;
        api.TREATMENT_DATA = res;
        alert('wait a sec and scroll to the data');
        displayNews();
    }
    if (selectedNews == 'Specific') {
        showData.textContent = null;
        y = "get-treatments/rna-based-treatments";
        res = b + y;
        api.TREATMENT_DATA = res;
        alert('wait a sec and scroll to the data');
        displayNews();
    }
    if (selectedNews == 'Clinical') {
        showData.textContent = null;
        y = "get-all-treatment-clinical";
        res = b + y;
        api.TREATMENT_DATA = res;
        alert('wait a sec and scroll to the data');
        displayNews();
    }
})

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    selectedPhase = (<HTMLInputElement>document.getElementById('coviVaccSelect')).value;
    if (selectedPhase == 'Phase1') {
        showData.textContent = null;
        y = "get-all-vaccines-phase-i";
        res = a + y;
        api.VACCINE_DATA = res;
        alert('wait a sec and scroll to the data')
        displayVacc();
    }
    if (selectedPhase == 'Phase2') {
        showData.textContent = null;
        y = "get-all-vaccines-phase-ii";
        res = a + y;
        api.VACCINE_DATA = res;
        alert('wait a sec and scroll to the data')
        displayVacc();
    }
    if (selectedPhase == 'Phase3') {
        showData.textContent = null;
        y = "get-all-vaccines-phase-iii";
        res = a + y;
        api.VACCINE_DATA = res;
        alert('wait a sec and scroll to the data')
        displayVacc();
    }
    if (selectedPhase == 'Phase4') {
        showData.textContent = null;
        y = "get-all-vaccines-phase-iv";
        res = a + y;
        api.VACCINE_DATA = res;
        alert('wait a sec and scroll to the data')
        displayVacc();
    }
})

const showData = document.querySelector('#showData');


function covidData() {
    api.getCovidData().then(data => {
        const table = document.createElement('table');
        showData.appendChild(table);
        const keys = Object.keys(data[0]);
        const topRow = document.createElement('tr');
        table.appendChild(topRow);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            topRow.appendChild(th);
        })
        data.forEach(element => {
            const keys = Object.keys(element);
            const row = document.createElement('tr');
            keys.forEach(key => {
                const td = document.createElement('td');
                td.textContent = (<any>element)[key];
                row.appendChild(td);
            });
            table.appendChild(row);
        })

    });
}


function displayNews() {
    api.getCovidNews().then(data => {
        const table = document.createElement('table');
        showData.appendChild(table);
        const keys = Object.keys(data[0]);
        const topRow = document.createElement('tr');
        table.appendChild(topRow);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            topRow.appendChild(th);
        })
        data.forEach(element => {
            const keys = Object.keys(element);
            const row = document.createElement('tr');
            keys.forEach(key => {
                const td = document.createElement('td');
                td.textContent = (<any>element)[key];
                row.appendChild(td);
            });
            table.appendChild(row);
        })

    });
}

function displayVacc(){
    api.getVaccineData().then(data => {
        const table = document.createElement('table');
        showData.appendChild(table);
        const keys = Object.keys(data[0]);
        const topRow = document.createElement('tr');
        table.appendChild(topRow);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            topRow.appendChild(th);
        })
        data.forEach(element => {
            const keys = Object.keys(element);
            const row = document.createElement('tr');
            keys.forEach(key => {
                const td = document.createElement('td');
                td.textContent = (<any>element)[key];
                row.appendChild(td);
            });
            table.appendChild(row);
        })

    });
}