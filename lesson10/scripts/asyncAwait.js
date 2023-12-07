// async await in javascript

async function engHolidays() {
    let response = await fetch('https://www.gov.uk/bank-holidays.json');
    let data = await response.json();

    let holidays = data['england-and-wales'].events;
    let holidaysTable = document.getElementById('holidaysTable');

    holidays.forEach(holiday => {
        let newTr = document.createElement('tr');
        let newTd = document.createElement('td');
        newTd.innerHTML = holiday.title;
        newTd.appendChild(newTd);

        let newTd2 = document.getElementById('td');
        newTd2.innerHTML = holiday.notes;
        newTr.appendChild(newTd2);
        holidaysTable.appendChild(newTr);

        let newTd3 = document.getElementById('td');
        newTd2.innerHTML = holiday.notes;
        newTr.appendChild(newTd3);
        holidaysTable.appendChild(newTr);
     })

    console.log(holidays);
    return holidays;

}