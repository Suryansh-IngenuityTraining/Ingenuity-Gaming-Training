import {APIService} from './ts/APPService';

const api = new APIService();

const btn = document.querySelector('#btn');
const selected = document.querySelector('#continentSelect');
let selectedValue: string;
const x:string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/";
var y:string;
var res:string;
btn.addEventListener('click',(event) => {
    event.preventDefault();
    selectedValue = (<HTMLInputElement>document.getElementById('continentSelect')).value;
    // alert(selectedValue);
    if(selectedValue == 'All'){
        y = "npm-covid-data/";
        res = x + y;
        api.INFO_DATA = res;
        alert('Showing All data rank-wise, wait a sec it may take time');
            }
    if(selectedValue == 'Asia'){
        y = "npm-covid-data/asia";
        res = x + y;
        api.INFO_DATA = res;
            }
    if(selectedValue == 'Africa'){
        y = "npm-covid-data/africa";
        res = x + y;
        api.INFO_DATA = res;
            }
    if(selectedValue == 'Europe'){
        y = "npm-covid-data/europe";
        res = x + y;
        api.INFO_DATA = res;
                    }
    if(selectedValue == 'North America'){
        y = "npm-covid-data/northamerica";
        res = x + y;
        api.INFO_DATA = res;
                        }
    if(selectedValue == 'South America'){
        y = "npm-covid-data/southamerica";
        res = x + y;
        api.INFO_DATA = res;
            }
    api.getCovidData().then(data => {
        const keys = Object.keys(data[0]);
        const topRow = document.createElement('tr');
        const table = document.getElementById('table');
        table.appendChild(topRow);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            topRow.appendChild(th);
        })
        data.forEach(element =>{
            const keys = Object.keys(element);
            const row = document.createElement('tr');
            keys.forEach(key =>{
                const td = document.createElement('td');
                td.textContent = (<any>element)[key];
                row.appendChild(td);
            });
            table.appendChild(row);
            })
        });
});
