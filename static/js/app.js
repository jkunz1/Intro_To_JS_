// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody")

function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var dateInput = d3.select("#datetime")
var button = d3.select("filter-btn")

function handleClick() {
    var date = d3.select("#datetime").property("value");
    let dateInput = tableData;
    if (date) {
      dateInput = dateInput.filter(row => row.datetime === date);
    }
    displayData(dateInput);
  }
  d3.selectAll("#filter-btn").on("click", handleClick);
  displayData(tableData);


