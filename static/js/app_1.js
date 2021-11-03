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

// Create a function that add the ability to filter the data
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Set a default filter to the original table data
    // Because we want users to refine their search on their own terms
    let filteredData = tableData;
  
    // Check to see if a date was entered and filter the data using that date
    if (date) {
      // Apply 'filter' to the table data to only keep the
      // rows where the 'datetime' value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);