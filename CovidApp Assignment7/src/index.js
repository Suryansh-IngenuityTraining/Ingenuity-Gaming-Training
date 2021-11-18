import { APIService } from './ts/APPService';
var api = new APIService();
api.getCovidData().then(function (data) {
    var keys = Object.keys(data[0]);
    var topRow = document.createElement('tr');
    var table = document.getElementById('table');
    table.appendChild(topRow);
    keys.forEach(function (key) {
        var th = document.createElement('th');
        th.textContent = key;
        topRow.appendChild(th);
    });
    data.forEach(function (element) {
        var keys = Object.keys(element);
        var row = document.createElement('tr');
        keys.forEach(function (key) {
            var td = document.createElement('td');
            td.textContent = element[key];
            row.appendChild(td);
        });
        table.appendChild(row);
    });
});
