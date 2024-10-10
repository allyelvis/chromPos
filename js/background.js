chrome.runtime.onInstalled.addListener(() => {
  console.log('POS Sync Extension Installed');
});

function syncPOSData() {
  fetch('https://api.your-pos-system.com/sync', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer your_api_token',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: posData })
  })
  .then(response => response.json())
  .then(data => console.log('Data synced:', data))
  .catch(error => console.error('Error syncing:', error));
}

chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked. Syncing POS data...');
  syncPOSData();
});
