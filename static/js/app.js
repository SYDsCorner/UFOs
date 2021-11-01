// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to fill the table with data
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, Loop through each object in the data array
    // Add the 'forEach' function 
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop Through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            // Append data into a table data
            let cell = row.append("td");
            // Add each value from the object into a cell
            cell.text(val);
        });
    });
}