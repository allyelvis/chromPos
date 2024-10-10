document.getElementById('sync').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'syncPOSData' }, (response) => {
    document.getElementById('status').textContent = 'Syncing in progress...';
  });
});
