// When the popup loads, check if user is authenticated
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for the buttons in popup.html
    document.getElementById('syncSales').addEventListener('click', syncSalesData);
    document.getElementById('generateInvoice').addEventListener('click', generateInvoice);
    document.getElementById('viewReports').addEventListener('click', viewReports);
});

// Function to sync sales data from POS to the cloud accounting system
function syncSalesData() {
    chrome.storage.sync.get(['authToken'], function (result) {
        if (result.authToken) {
            // Example API call to sync data (replace with your actual API endpoint)
            fetch('https://api.your-cloud-system.com/syncSales', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + result.authToken,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                // Handle response and notify the user
                alert('Sales data synced successfully!');
                console.log('Sales data:', data);
            })
            .catch(error => {
                console.error('Error syncing sales data:', error);
                alert('Failed to sync sales data.');
            });
        } else {
            alert('Please log in to sync sales data.');
        }
    });
}

// Function to generate an invoice
function generateInvoice() {
    chrome.storage.sync.get(['authToken'], function (result) {
        if (result.authToken) {
            // Example API call to generate invoice (replace with your actual API endpoint)
            fetch('https://api.your-cloud-system.com/generateInvoice', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + result.authToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Example invoice data (replace with actual data)
                    customer: 'John Doe',
                    items: [
                        { item: 'Product 1', quantity: 2, price: 10.00 },
                        { item: 'Product 2', quantity: 1, price: 20.00 }
                    ]
                })
            })
            .then(response => response.json())
            .then(data => {
                // Handle response and notify the user
                alert('Invoice generated successfully!');
                console.log('Invoice data:', data);
            })
            .catch(error => {
                console.error('Error generating invoice:', error);
                alert('Failed to generate invoice.');
            });
        } else {
            alert('Please log in to generate an invoice.');
        }
    });
}

// Function to view financial reports
function viewReports() {
    chrome.storage.sync.get(['authToken'], function (result) {
        if (result.authToken) {
            // Redirect to reports page or make an API call to fetch reports
            window.open('https://your-cloud-system.com/reports');
        } else {
            alert('Please log in to view reports.');
        }
    });
}
