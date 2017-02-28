// 1. Count the number of records in the "Current Quarter Details" table.
var numberOfRecords = document.getElementsByTagName("tr").length;
console.log(numberOfRecords - 1);

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
    var winter = document.getElementsByTagName('img')[0];
    winter.src = 'https://unsplash.it/200?image=1036';
    winter.alt += 'winter image';

    var spring = document.getElementsByTagName('img')[1];
    spring.src = 'https://unsplash.it/200?image=976';
    spring.alt += 'spring image';

    var summer = document.getElementsByTagName('img')[2];
    summer.src = 'https://unsplash.it/200?image=1001';
    summer.alt += 'summer image';

    var fall = document.getElementsByTagName('img')[3];
    fall.src = 'https://unsplash.it/200?image=1043';
    fall.alt += 'fall image';

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00. 
    var firstQuarter = document.querySelectorAll('.text-muted')[0];
    firstQuarter.innerHTML = ('$' + (Math.ceil(Math.random() * 100)) + '.00')

    var secondQuarter = document.querySelectorAll('.text-muted')[1];
    secondQuarter.innerHTML = ('$' + (Math.ceil(Math.random() * 100)) + '.00')
    
    var thirdQuarter = document.querySelectorAll('.text-muted')[2];
    thirdQuarter.innerHTML = ('$' + (Math.ceil(Math.random() * 100)) + '.00')

    var fourthQuarter = document.querySelectorAll('.text-muted')[3];
    fourthQuarter.innerHTML = ('$' + (Math.ceil(Math.random() * 100)) + '.00')

// 4. Change the currently selected left side menu item from Overview to Reports.
    var unselect = document.querySelector('.active');
    unselect.classList.remove('active');
    console.log(unselect);

    var select = document.querySelectorAll('div ul li')[5];
    select.classList.add('active')
    console.log(select);

// 5. Set the default search input value to "Q4 sales".
var searchBarInput = document.querySelector('input')
searchBarInput.placeholder = 'Q4 Sales';


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
var tableHover = document.querySelector('table');
tableHover.classList.add('table-hover');
console.log(tableHover);

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var successSeven = document.querySelectorAll('tr')[7];
successSeven.classList.add('success');

var successEight = document.querySelectorAll('tr')[8];
successEight.classList.add('success');

var successNine = document.querySelectorAll('tr')[9];
successNine.classList.add('success');

var successTen = document.querySelectorAll('tr')[10];
successTen.classList.add('success');
// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var TableNames = document.querySelectorAll('th');
TableNames[0].innerHTML = 'ID';
TableNames[1].innerHTML = 'First Name';
TableNames[2].innerHTML = 'Last Name';
TableNames[3].innerHTML = 'Department';
TableNames[4].innerHTML = 'Client';

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
// var tables = document.querySelectorAll('tr');
// var tablesArray = Array.from(tables);
// console.log(tablesArray);
var data = [];

var rows = document.querySelectorAll('tbody tr');

rows.forEach(function(row) {
    var object = {};
    object.id = Number(row.children[0].innerText.replace(/,/g, ''));
    object.firstName = row.children[1].innerText;
    object.lastName = row.children[2].innerText;
    object.department = row.children[3].innerText;
    object.client = row.children[4].innerText;
    
    data.push(object);
});
console.log(data);

// 10. Make each word in the table capitalized.
// var capital = document.querySelectorAll('td')[1];
// console.log(capital);
// console.log(capital.toUpperCase());

document.querySelector('.table').classList.add('text-capitalize');
