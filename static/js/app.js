// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

var inputField = d3.select("#form-group");
console.log(inputField);


//Event handlers
button.on("click", runEnter);
inputField.on("submit",runEnter);


function runEnter() {
	d3.event.preventDefault();
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");
	var filteredData = tableData.filter(person => person.datetime === inputValue);

	console.log(filteredData);

	var tbody = d3.select("tbody");

	
	filteredData.forEach(DataFiltered => { //for every element in data
	var row = tbody.append("tr")  // entering tbody and creating a tr
	Object.entries(DataFiltered).forEach(([key, value]) => {  //grab the key and the value for each element in weatherreport 
		row.append("td").text(value);//append the text of each of those values to td
		})
	})

}